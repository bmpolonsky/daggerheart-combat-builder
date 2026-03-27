import { EncounterPanel } from "@/components/encounter/EncounterPanel";
import { useStore } from "@/lib/store";
import { buildEncounterSummary } from "@/lib/mechanics";
import { adversariesService } from "@/services/adversariesService";
import { encounterService } from "@/services/encounterService";
import { encounterStore } from "@/stores/encounter";

export function WorkspaceContainer() {
  const {
    entries,
    playerCount,
    difficultyMode,
    isDamageBoosted,
    isLowerTierUsed,
    isSidebarOpen,
  } = useStore(encounterStore);

  const summary = buildEncounterSummary(entries, {
    playerCount,
    difficultyMode,
    isDamageBoosted,
    isLowerTierUsed,
  });

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => encounterService.setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 right-0 z-30 flex h-full w-80 transform flex-col border-l border-slate-700 bg-dagger-panel shadow-2xl transition-transform duration-300 ease-in-out lg:static lg:w-96 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <EncounterPanel
          entries={entries}
          summary={summary}
          playerCount={playerCount}
          difficultyMode={difficultyMode}
          isDamageBoosted={isDamageBoosted}
          isLowerTierUsed={isLowerTierUsed}
          onOpenDetails={(id) => adversariesService.openDetails(id)}
          onUpdateCount={(id, delta) => encounterService.updateCount(id, delta)}
          onClear={() => encounterService.clear()}
          onSetPlayerCount={(count) => encounterService.setPlayerCount(count)}
          onSetDifficultyMode={(mode) => encounterService.setDifficultyMode(mode)}
          onToggleDamageBoosted={() => encounterService.toggleDamageBoosted()}
          onToggleLowerTierUsed={() => encounterService.toggleLowerTierUsed()}
        />
      </aside>
    </>
  );
}
