import type { EncounterEntry } from "@/lib/api";
import type { DifficultyMode } from "@/lib/mechanics";
import { Store } from "@/lib/store";

export interface EncounterState {
  entries: EncounterEntry[];
  playerCount: number;
  difficultyMode: DifficultyMode;
  isDamageBoosted: boolean;
  isLowerTierUsed: boolean;
  isSidebarOpen: boolean;
}

const initialState: EncounterState = {
  entries: [],
  playerCount: 4,
  difficultyMode: "standard",
  isDamageBoosted: false,
  isLowerTierUsed: false,
  isSidebarOpen: false,
};

export const encounterStore = new Store<EncounterState>(initialState);
