import { useMemo } from "preact/hooks";
import { SidebarContainer } from "@/components/app/SidebarContainer";
import { WorkspaceContainer } from "@/components/app/WorkspaceContainer";
import { AdversaryDetailsModal } from "@/components/adversaries/AdversaryDetailsModal";
import { useStore } from "@/lib/store";
import { adversariesService } from "@/services/adversariesService";
import { encounterService } from "@/services/encounterService";
import { adversariesStore } from "@/stores/adversaries";

export default function App() {
  adversariesService.ensureLoaded();
  encounterService.ensureHydrated();

  const { items, selectedAdversaryId } = useStore(adversariesStore);
  const selectedAdversary = useMemo(
    () => items.find((item) => item.id === selectedAdversaryId) ?? null,
    [items, selectedAdversaryId]
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#111318]">
      <SidebarContainer />
      <WorkspaceContainer />
      {selectedAdversary && (
        <AdversaryDetailsModal
          adversary={selectedAdversary}
          onClose={() => adversariesService.closeDetails()}
          onAdd={() => encounterService.addAdversary(selectedAdversary)}
        />
      )}
    </div>
  );
}
