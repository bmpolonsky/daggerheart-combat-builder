import type { Adversary, EncounterEntry } from "@/lib/api";
import { clamp } from "@/lib/utils";
import { encounterStore } from "@/stores/encounter";

type PersistedEncounterState = Pick<
  ReturnType<typeof encounterStore.getState>,
  "entries" | "playerCount" | "difficultyMode" | "isDamageBoosted" | "isLowerTierUsed"
>;

const STORAGE_KEY = "daggerheart-combat-builder:encounter";

const isBrowser = () => typeof window !== "undefined";

function normalizeEntries(entries: EncounterEntry[]) {
  return entries
    .filter((entry) => entry.count > 0)
    .sort((left, right) => {
      if (left.adversary.tier !== right.adversary.tier) {
        return left.adversary.tier - right.adversary.tier;
      }
      return left.adversary.name.localeCompare(right.adversary.name, "ru");
    });
}

export class EncounterService {
  private bootstrapped = false;

  ensureHydrated() {
    if (this.bootstrapped || !isBrowser()) {
      this.bootstrapped = true;
      return;
    }

    this.bootstrapped = true;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as Partial<PersistedEncounterState>;
      encounterStore.update((state) => ({
        ...state,
        entries: Array.isArray(parsed.entries) ? normalizeEntries(parsed.entries) : state.entries,
        playerCount:
          typeof parsed.playerCount === "number" ? clamp(parsed.playerCount, 1, 8) : state.playerCount,
        difficultyMode:
          parsed.difficultyMode === "easy" ||
          parsed.difficultyMode === "standard" ||
          parsed.difficultyMode === "hard"
            ? parsed.difficultyMode
            : state.difficultyMode,
        isDamageBoosted:
          typeof parsed.isDamageBoosted === "boolean"
            ? parsed.isDamageBoosted
            : state.isDamageBoosted,
        isLowerTierUsed:
          typeof parsed.isLowerTierUsed === "boolean"
            ? parsed.isLowerTierUsed
            : state.isLowerTierUsed,
      }));
    } catch {
      return;
    }
  }

  private persist() {
    if (!isBrowser()) return;
    const { entries, playerCount, difficultyMode, isDamageBoosted, isLowerTierUsed } =
      encounterStore.getState();

    const payload: PersistedEncounterState = {
      entries,
      playerCount,
      difficultyMode,
      isDamageBoosted,
      isLowerTierUsed,
    };

    if (
      entries.length === 0 &&
      !isDamageBoosted &&
      !isLowerTierUsed &&
      difficultyMode === "standard" &&
      playerCount === 4
    ) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  addAdversary(adversary: Adversary) {
    encounterStore.update((state) => {
      const existing = state.entries.find((entry) => entry.adversary.id === adversary.id);
      const entries = existing
        ? state.entries.map((entry) =>
            entry.adversary.id === adversary.id
              ? { ...entry, count: entry.count + 1 }
              : entry
          )
        : [...state.entries, { adversary, count: 1 }];

      return {
        ...state,
        entries: normalizeEntries(entries),
        isSidebarOpen:
          typeof window !== "undefined" ? window.innerWidth < 1100 : state.isSidebarOpen,
      };
    });

    this.persist();
  }

  updateCount(id: number, delta: number) {
    encounterStore.update((state) => ({
      ...state,
      entries: normalizeEntries(
        state.entries
          .map((entry) =>
            entry.adversary.id === id
              ? { ...entry, count: Math.max(0, entry.count + delta) }
              : entry
          )
          .filter((entry) => entry.count > 0)
      ),
    }));

    this.persist();
  }

  clear() {
    encounterStore.update((state) => ({
      ...state,
      entries: [],
    }));
    this.persist();
  }

  setPlayerCount(playerCount: number) {
    encounterStore.update((state) => ({
      ...state,
      playerCount: clamp(playerCount, 1, 8),
    }));
    this.persist();
  }

  setDifficultyMode(difficultyMode: PersistedEncounterState["difficultyMode"]) {
    encounterStore.update((state) => ({
      ...state,
      difficultyMode,
    }));
    this.persist();
  }

  toggleDamageBoosted() {
    encounterStore.update((state) => ({
      ...state,
      isDamageBoosted: !state.isDamageBoosted,
    }));
    this.persist();
  }

  toggleLowerTierUsed() {
    encounterStore.update((state) => ({
      ...state,
      isLowerTierUsed: !state.isLowerTierUsed,
    }));
    this.persist();
  }

  setSidebarOpen(isSidebarOpen: boolean) {
    encounterStore.update((state) => ({
      ...state,
      isSidebarOpen,
    }));
  }
}

export const encounterService = new EncounterService();
