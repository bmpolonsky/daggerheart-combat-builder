import type { Adversary } from "@/lib/api";
import { buildDuplicateTemplate } from "@/lib/customAdversaries";
import { customAdversaryEditorStore } from "@/stores/customAdversaryEditor";

export class CustomAdversaryEditorService {
  openCreate() {
    customAdversaryEditorStore.update(() => ({
      mode: "create",
      adversary: null,
    }));
  }

  openEdit(adversary: Adversary) {
    if (!adversary.isCustom) return;

    customAdversaryEditorStore.update(() => ({
      mode: "edit",
      adversary,
    }));
  }

  openDuplicate(adversary: Adversary) {
    customAdversaryEditorStore.update(() => ({
      mode: "create",
      adversary: buildDuplicateTemplate(adversary),
    }));
  }

  close() {
    customAdversaryEditorStore.update(() => null);
  }
}

export const customAdversaryEditorService = new CustomAdversaryEditorService();
