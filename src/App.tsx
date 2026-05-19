import { useMemo, useState } from "preact/hooks";
import { SidebarContainer } from "@/components/app/SidebarContainer";
import { WorkspaceContainer } from "@/components/app/WorkspaceContainer";
import { AdversaryDetailsModal } from "@/components/adversaries/AdversaryDetailsModal";
import { CustomAdversaryModal } from "@/components/adversaries/CustomAdversaryModal";
import type { Adversary } from "@/lib/api";
import { buildDuplicateTemplate } from "@/lib/customAdversaries";
import { useStore } from "@/lib/store";
import { adversariesService } from "@/services/adversariesService";
import { encounterService } from "@/services/encounterService";
import { adversariesStore } from "@/stores/adversaries";
import { encounterStore } from "@/stores/encounter";

type CustomEditorState = {
  mode: "create" | "edit";
  adversary: Adversary | null;
};

export default function App() {
  adversariesService.ensureLoaded();
  encounterService.ensureHydrated();

  const [customEditor, setCustomEditor] = useState<CustomEditorState | null>(null);
  const { items, selectedAdversaryId } = useStore(adversariesStore);
  const { entries } = useStore(encounterStore);
  const selectedAdversary = useMemo(
    () =>
      items.find((item) => item.id === selectedAdversaryId) ??
      entries.find((entry) => entry.adversary.id === selectedAdversaryId)?.adversary ??
      null,
    [entries, items, selectedAdversaryId]
  );

  const closeCustomEditor = () => {
    setCustomEditor(null);
  };

  const openCreateCustomAdversary = () => {
    setCustomEditor({ mode: "create", adversary: null });
  };

  const openEditCustomAdversary = (adversary: Adversary) => {
    if (!adversary.isCustom) return;
    setCustomEditor({ mode: "edit", adversary });
  };

  const openDuplicateAdversary = (adversary: Adversary) => {
    setCustomEditor({ mode: "create", adversary: buildDuplicateTemplate(adversary) });
  };

  const saveCustomAdversary = (payload: Partial<Adversary>) => {
    if (customEditor?.mode === "edit" && customEditor.adversary) {
      adversariesService.updateCustomAdversary(customEditor.adversary.id, payload);
      closeCustomEditor();
      return;
    }

    const adversary = adversariesService.createCustomAdversary(payload);
    closeCustomEditor();
    adversariesService.openDetails(adversary.id);
  };

  const deleteCustomAdversary = (id: number) => {
    if (!window.confirm("Удалить кастомного противника из каталога? В текущем бою он останется.")) {
      return;
    }
    adversariesService.removeCustomAdversary(id);
    closeCustomEditor();
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#111318]">
      <div
        className={`flex h-full min-w-0 flex-1 transition-[padding] duration-200 ${
          selectedAdversary ? "lg:pl-[34rem]" : ""
        }`}
      >
        <SidebarContainer
          onCreateCustomAdversary={openCreateCustomAdversary}
          onEditCustomAdversary={openEditCustomAdversary}
        />
        <WorkspaceContainer />
      </div>
      {selectedAdversary && (
        <div className="pointer-events-none fixed inset-y-0 left-0 z-40 flex w-full max-w-[34rem]">
          <div className="pointer-events-auto h-full w-full">
            <AdversaryDetailsModal
              adversary={selectedAdversary}
              onClose={() => adversariesService.closeDetails()}
              onAdd={() => encounterService.addAdversary(selectedAdversary)}
              onEdit={
                selectedAdversary.isCustom
                  ? () => openEditCustomAdversary(selectedAdversary)
                  : undefined
              }
              onDuplicate={() => openDuplicateAdversary(selectedAdversary)}
            />
          </div>
        </div>
      )}
      {customEditor && (
        <CustomAdversaryModal
          adversary={customEditor.adversary}
          mode={customEditor.mode}
          onClose={closeCustomEditor}
          onSave={saveCustomAdversary}
          onDelete={
            customEditor.mode === "edit" && customEditor.adversary
              ? deleteCustomAdversary
              : undefined
          }
        />
      )}
    </div>
  );
}
