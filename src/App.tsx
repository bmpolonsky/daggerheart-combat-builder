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
      <div
        className={`flex h-full min-w-0 flex-1 transition-[padding] duration-200 ${
          selectedAdversary ? "lg:pl-[34rem]" : ""
        }`}
      >
        <SidebarContainer />
        <WorkspaceContainer />
      </div>
      {selectedAdversary && (
        <div className="pointer-events-none fixed inset-y-0 left-0 z-40 flex w-full max-w-[34rem]">
          <div className="pointer-events-auto h-full w-full">
            <AdversaryDetailsModal
              adversary={selectedAdversary}
              onClose={() => adversariesService.closeDetails()}
              onAdd={() => encounterService.addAdversary(selectedAdversary)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
