import { fetchAdversaryCollection, type Adversary } from "@/lib/api";
import {
  buildCustomAdversaryExport,
  CUSTOM_ADVERSARY_STORAGE_KEY,
  extractCustomAdversaryItems,
  normalizeCustomAdversary,
} from "@/lib/customAdversaries";
import { encounterService } from "@/services/encounterService";
import { adversariesStore } from "@/stores/adversaries";

const isBrowser = () => typeof window !== "undefined";

function sortAdversaries(items: Adversary[]) {
  return [...items].sort((left, right) => {
    if (left.isCustom !== right.isCustom) {
      return left.isCustom ? -1 : 1;
    }
    if (left.tier !== right.tier) {
      return left.tier - right.tier;
    }
    return left.name.localeCompare(right.name, "ru");
  });
}

export class AdversariesService {
  private bootstrapped = false;
  private currentRequestId = 0;
  private customLoaded = false;
  private remoteItems: Adversary[] = [];
  private customItems: Adversary[] = [];

  ensureLoaded() {
    this.ensureCustomLoaded();
    if (this.bootstrapped) return;
    this.bootstrapped = true;
    void this.reload();
  }

  private ensureCustomLoaded() {
    if (this.customLoaded || !isBrowser()) {
      this.customLoaded = true;
      return;
    }

    this.customLoaded = true;
    const raw = window.localStorage.getItem(CUSTOM_ADVERSARY_STORAGE_KEY);
    if (!raw) {
      this.publishItems();
      return;
    }

    try {
      const source = extractCustomAdversaryItems(JSON.parse(raw));
      if (!source) {
        this.publishItems();
        return;
      }
      const ids = new Set<number>();
      this.customItems = source
        .map((item) => normalizeCustomAdversary(item, ids, { keepId: true }))
        .filter((item): item is Adversary => Boolean(item));
      this.persistCustom();
      this.publishItems();
    } catch {
      this.publishItems();
    }
  }

  private persistCustom() {
    if (!isBrowser()) return;
    if (this.customItems.length === 0) {
      window.localStorage.removeItem(CUSTOM_ADVERSARY_STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(CUSTOM_ADVERSARY_STORAGE_KEY, JSON.stringify(this.customItems));
  }

  private publishItems() {
    adversariesStore.update((state) => ({
      ...state,
      items: sortAdversaries([...this.customItems, ...this.remoteItems]),
    }));
  }

  async reload() {
    const requestId = ++this.currentRequestId;
    this.ensureCustomLoaded();

    adversariesStore.update((state) => ({
      ...state,
      isLoading: true,
      error: null,
    }));

    try {
      const payload = await fetchAdversaryCollection();
      if (requestId !== this.currentRequestId) return;

      this.remoteItems = payload.items;
      adversariesStore.update((state) => ({
        ...state,
        items: sortAdversaries([...this.customItems, ...this.remoteItems]),
        lastFetchedAt: payload.fetchedAt,
      }));
    } catch (error) {
      if (requestId !== this.currentRequestId) return;

      adversariesStore.update((state) => ({
        ...state,
        error: error instanceof Error ? error.message : "Не удалось загрузить противников",
      }));
    } finally {
      if (requestId !== this.currentRequestId) return;

      adversariesStore.update((state) => ({
        ...state,
        isLoading: false,
      }));
    }
  }

  setSearchTerm(searchTerm: string) {
    adversariesStore.update((state) => ({
      ...state,
      searchTerm,
    }));
  }

  setTierFilter(tierFilter: number | "all") {
    adversariesStore.update((state) => ({
      ...state,
      tierFilter,
    }));
  }

  setRoleFilter(roleFilter: string) {
    adversariesStore.update((state) => ({
      ...state,
      roleFilter,
    }));
  }

  openDetails(id: number) {
    adversariesStore.update((state) => ({
      ...state,
      selectedAdversaryId: id,
    }));
  }

  closeDetails() {
    adversariesStore.update((state) => ({
      ...state,
      selectedAdversaryId: null,
    }));
  }

  getById(id: number | null) {
    if (!id) return null;
    return adversariesStore.getState().items.find((item) => item.id === id) ?? null;
  }

  createCustomAdversary(payload: Partial<Adversary>) {
    this.ensureCustomLoaded();
    const existingIds = new Set(adversariesStore.getState().items.map((item) => item.id));
    const adversary = normalizeCustomAdversary(
      {
        ...payload,
        updatedAt: Date.now(),
      },
      existingIds
    );
    if (!adversary) {
      throw new Error("Введите название противника");
    }

    this.customItems = [adversary, ...this.customItems];
    this.persistCustom();
    this.publishItems();
    return adversary;
  }

  updateCustomAdversary(id: number, payload: Partial<Adversary>) {
    this.ensureCustomLoaded();
    const current = this.customItems.find((item) => item.id === id);
    if (!current) {
      throw new Error("Кастомный противник не найден");
    }

    const existingIds = new Set(
      adversariesStore
        .getState()
        .items.map((item) => item.id)
        .filter((itemId) => itemId !== id)
    );
    const adversary = normalizeCustomAdversary(
      {
        ...current,
        ...payload,
        id,
        updatedAt: Date.now(),
      },
      existingIds,
      { keepId: true }
    );
    if (!adversary) {
      throw new Error("Введите название противника");
    }

    this.customItems = this.customItems.map((item) => (item.id === id ? adversary : item));
    this.persistCustom();
    this.publishItems();
    encounterService.syncAdversary(adversary);
    return adversary;
  }

  removeCustomAdversary(id: number) {
    this.ensureCustomLoaded();
    const target = this.customItems.find((item) => item.id === id);
    if (!target) return;

    this.customItems = this.customItems.filter((item) => item.id !== id);
    this.persistCustom();
    this.publishItems();

    adversariesStore.update((state) => ({
      ...state,
      selectedAdversaryId: state.selectedAdversaryId === id ? null : state.selectedAdversaryId,
    }));
  }

  exportCustomAdversaries() {
    this.ensureCustomLoaded();
    return JSON.stringify(buildCustomAdversaryExport(this.customItems), null, 2);
  }

  importCustomAdversaries(raw: string) {
    this.ensureCustomLoaded();
    const source = extractCustomAdversaryItems(JSON.parse(raw));
    if (!source) {
      throw new Error("Некорректный формат файла");
    }

    const ids = new Set(this.remoteItems.map((item) => item.id));
    const imported = source
      .map((item) => normalizeCustomAdversary(item, ids, { keepId: true }))
      .filter((item): item is Adversary => Boolean(item));

    if (imported.length === 0) {
      throw new Error("В файле нет валидных противников");
    }

    const byId = new Map(this.customItems.map((item) => [item.id, item]));
    for (const item of imported) {
      byId.set(item.id, item);
      encounterService.syncAdversary(item);
    }
    this.customItems = Array.from(byId.values());
    this.persistCustom();
    this.publishItems();

    return imported.length;
  }

  buildBrowserView() {
    const { items, searchTerm, tierFilter, roleFilter } = adversariesStore.getState();
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredItems = sortAdversaries(
      items.filter((item) => {
        const matchesSearch = normalizedSearch
          ? item.name.toLowerCase().includes(normalizedSearch) ||
            item.roleName.toLowerCase().includes(normalizedSearch) ||
            item.summary.toLowerCase().includes(normalizedSearch)
          : true;
        const matchesTier = tierFilter === "all" || item.tier === tierFilter;
        const matchesRole = roleFilter === "all" || item.roleId === roleFilter;

        return matchesSearch && matchesTier && matchesRole;
      })
    );

    const roleOptions = Array.from(
      new Map(
        items.map((item) => [item.roleId, { id: item.roleId, name: item.roleName }])
      ).values()
    ).sort((left, right) => left.name.localeCompare(right.name, "ru"));

    return {
      filteredItems,
      roleOptions,
    };
  }
}

export const adversariesService = new AdversariesService();
