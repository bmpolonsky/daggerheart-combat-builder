import type { Adversary, EncounterEntry } from "@/lib/api";
import { clamp } from "@/lib/utils";
import {
  encounterStore,
  type EncounterBattleEntry,
  type EncounterUnitState,
} from "@/stores/encounter";

type PersistedEncounterState = Pick<
  ReturnType<typeof encounterStore.getState>,
  "entries" | "playerCount" | "difficultyMode" | "isDamageBoosted" | "isLowerTierUsed"
>;

const STORAGE_KEY = "daggerheart-combat-builder:encounter";

const isBrowser = () => typeof window !== "undefined";

function createInstanceId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `unit-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function createUnitState(hp = 0, stress = 0): EncounterUnitState {
  return {
    id: createInstanceId(),
    currentHp: hp,
    currentStress: stress,
  };
}

function hydrateEntry(entry: EncounterEntry | EncounterBattleEntry): EncounterBattleEntry {
  const legacyHp =
    typeof (entry as EncounterBattleEntry & { currentHp?: number }).currentHp === "number"
      ? clamp(
          (entry as EncounterBattleEntry & { currentHp?: number }).currentHp ?? 0,
          0,
          Math.max(0, entry.adversary.hp)
        )
      : 0;
  const legacyStress =
    typeof (entry as EncounterBattleEntry & { currentStress?: number }).currentStress === "number"
      ? clamp(
          (entry as EncounterBattleEntry & { currentStress?: number }).currentStress ?? 0,
          0,
          Math.max(0, entry.adversary.stress)
        )
      : 0;
  const rawInstances = Array.isArray((entry as EncounterBattleEntry).instances)
    ? (entry as EncounterBattleEntry).instances
    : [];
  const targetCount = Math.max(0, entry.count);
  const baseInstances =
    rawInstances.length > 0
      ? rawInstances.map((instance) => ({
          id: instance.id || createInstanceId(),
          currentHp: clamp(instance.currentHp, 0, Math.max(0, entry.adversary.hp)),
          currentStress: clamp(instance.currentStress, 0, Math.max(0, entry.adversary.stress)),
        }))
      : Array.from({ length: targetCount }, () => createUnitState(legacyHp, legacyStress));
  const instances =
    baseInstances.length >= targetCount
      ? baseInstances.slice(0, targetCount)
      : [
          ...baseInstances,
          ...Array.from({ length: targetCount - baseInstances.length }, () => createUnitState()),
        ];

  return {
    ...entry,
    count: instances.length,
    instances,
  };
}

function normalizeEntries(entries: Array<EncounterEntry | EncounterBattleEntry>) {
  return entries
    .map(hydrateEntry)
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
              ? {
                  ...entry,
                  instances: [...entry.instances, createUnitState()],
                  count: entry.instances.length + 1,
                }
              : entry
          )
        : [
            ...state.entries,
            {
              adversary,
              count: 1,
              instances: [createUnitState()],
            },
          ];

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
              ? (() => {
                  const nextCount = Math.max(0, entry.count + delta);
                  const instances =
                    nextCount <= entry.instances.length
                      ? entry.instances.slice(0, nextCount)
                      : [
                          ...entry.instances,
                          ...Array.from(
                            { length: nextCount - entry.instances.length },
                            () => createUnitState()
                          ),
                        ];

                  return {
                    ...entry,
                    count: instances.length,
                    instances,
                  };
                })()
              : entry
          )
          .filter((entry) => entry.count > 0)
      ),
    }));

    this.persist();
  }

  adjustHp(id: number, unitId: string, delta: number) {
    encounterStore.update((state) => ({
      ...state,
      entries: normalizeEntries(
        state.entries.map((entry) =>
          entry.adversary.id === id
            ? {
                ...entry,
                instances: entry.instances.map((instance) =>
                  instance.id === unitId
                    ? {
                        ...instance,
                        currentHp: clamp(instance.currentHp + delta, 0, entry.adversary.hp),
                      }
                    : instance
                ),
              }
            : entry
        )
      ),
    }));

    this.persist();
  }

  adjustStress(id: number, unitId: string, delta: number) {
    encounterStore.update((state) => ({
      ...state,
      entries: normalizeEntries(
        state.entries.map((entry) =>
          entry.adversary.id === id
            ? {
                ...entry,
                instances: entry.instances.map((instance) =>
                  instance.id === unitId
                    ? {
                        ...instance,
                        currentStress: clamp(
                          instance.currentStress + delta,
                          0,
                          entry.adversary.stress
                        ),
                      }
                    : instance
                ),
              }
            : entry
        )
      ),
    }));

    this.persist();
  }

  resetEntryState(id: number) {
    encounterStore.update((state) => ({
      ...state,
      entries: normalizeEntries(
        state.entries.map((entry) =>
          entry.adversary.id === id
            ? {
                ...entry,
                instances: entry.instances.map((instance) => ({
                  ...instance,
                  currentHp: 0,
                  currentStress: 0,
                })),
              }
            : entry
        )
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
