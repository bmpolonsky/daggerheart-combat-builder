import { fetchAdversaryCollection, type Adversary } from "@/lib/api";
import { adversariesStore } from "@/stores/adversaries";

function sortAdversaries(items: Adversary[]) {
  return [...items].sort((left, right) => {
    if (left.tier !== right.tier) {
      return left.tier - right.tier;
    }
    return left.name.localeCompare(right.name, "ru");
  });
}

export class AdversariesService {
  private bootstrapped = false;
  private currentRequestId = 0;

  ensureLoaded() {
    if (this.bootstrapped) return;
    this.bootstrapped = true;
    void this.reload();
  }

  async reload() {
    const requestId = ++this.currentRequestId;

    adversariesStore.update((state) => ({
      ...state,
      isLoading: true,
      error: null,
    }));

    try {
      const payload = await fetchAdversaryCollection();
      if (requestId !== this.currentRequestId) return;

      adversariesStore.update((state) => ({
        ...state,
        items: sortAdversaries(payload.items),
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
