import { useMemo } from "preact/hooks";
import { AdversaryCard } from "@/components/adversaries/AdversaryCard";
import { IconClose, IconMenu, IconSearch } from "@/components/icons";
import { useStore } from "@/lib/store";
import { adversariesService } from "@/services/adversariesService";
import { encounterService } from "@/services/encounterService";
import { adversariesStore } from "@/stores/adversaries";
import { encounterStore } from "@/stores/encounter";

export function SidebarContainer() {
  const { searchTerm, tierFilter, roleFilter, items } = useStore(adversariesStore);
  const { isSidebarOpen } = useStore(encounterStore);
  const { filteredItems, roleOptions } = adversariesService.buildBrowserView();

  const uniqueTiers = useMemo(
    () => Array.from(new Set(items.map((item) => item.tier))).sort((left, right) => left - right),
    [items]
  );

  return (
    <main className="relative flex h-full min-w-0 flex-1 flex-col">
      <header className="z-10 flex shrink-0 flex-col items-center justify-between gap-4 border-b border-slate-700 bg-dagger-dark p-4 shadow-md md:flex-row">
        <div className="flex w-full items-center gap-3 md:w-auto">
          <h1 className="whitespace-nowrap font-display text-2xl font-bold tracking-wide text-dagger-gold">
            ПРОТИВНИКИ
          </h1>
          <span className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-400">
            {filteredItems.length} рез.
          </span>
        </div>

        <div className="flex w-full flex-wrap items-center justify-end gap-3 md:w-auto md:flex-nowrap">
          <div className="relative w-full flex-grow md:w-64 md:flex-grow-0">
            <IconSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={16}
            />
            <input
              type="text"
              placeholder="Поиск..."
              className="w-full rounded-md border border-slate-700 bg-slate-900 py-2 pl-9 pr-4 text-sm text-slate-200 outline-none transition-all placeholder:text-slate-600 focus:border-dagger-gold focus:ring-1 focus:ring-dagger-gold"
              value={searchTerm}
              onInput={(event) => adversariesService.setSearchTerm(event.currentTarget.value)}
            />
          </div>

          <div className="flex w-full items-center gap-2 md:w-auto">
            <select
              className="flex-1 cursor-pointer rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 outline-none focus:border-dagger-gold md:flex-none"
              value={String(tierFilter)}
              onChange={(event) => {
                const value = event.currentTarget.value;
                adversariesService.setTierFilter(value === "all" ? "all" : Number(value));
              }}
            >
              <option value="all">Любой ранг</option>
              {uniqueTiers.map((tier) => (
                <option key={tier} value={tier}>
                  Ранг {tier}
                </option>
              ))}
            </select>

            <select
              className="max-w-[140px] flex-1 cursor-pointer rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 outline-none focus:border-dagger-gold md:flex-none"
              value={roleFilter}
              onChange={(event) => adversariesService.setRoleFilter(event.currentTarget.value)}
            >
              <option value="all">Любая роль</option>
              {roleOptions.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="rounded border border-dagger-gold/30 bg-slate-800 p-2 text-dagger-gold lg:hidden"
            onClick={() => encounterService.setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto bg-slate-900/50 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredItems.map((adversary) => (
            <AdversaryCard
              key={adversary.id}
              adversary={adversary}
              onAdd={() => encounterService.addAdversary(adversary)}
              onViewDetails={() => adversariesService.openDetails(adversary.id)}
            />
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-lg text-slate-500">
                Противники, соответствующие критериям, не найдены.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
