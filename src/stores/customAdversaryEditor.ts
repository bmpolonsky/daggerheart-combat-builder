import type { Adversary } from "@/lib/api";
import { Store } from "@/lib/store";

export type CustomAdversaryEditorMode = "create" | "edit";

export interface CustomAdversaryEditorState {
  mode: CustomAdversaryEditorMode;
  adversary: Adversary | null;
}

export const customAdversaryEditorStore = new Store<CustomAdversaryEditorState | null>(null);
