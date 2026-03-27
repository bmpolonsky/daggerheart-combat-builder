export interface Feature {
  id: number;
  name: string;
  main_body: string;
}

export interface Adversary {
  id: number;
  slug: string;
  source_slugs: string[];
  tier: number;
  type_slug: string; // e.g., 'skulk', 'minion'
  type_name: string; // e.g., 'Скрытный'
  name: string;
  short_description: string;
  image_url: string;
  features: Feature[];
  attack_bonus: string;
  attack_range: string;
  damage_type: string;
  damage_bonus: number;
  damage_die_size: number;
  damage_die_count: number;
  stress: number;
  hp: number;
  difficulty: number;
  damage_thresholds: number[] | null;
  motives: string;
  campaign_frame_slugs: string[];
  horde_per_hp: number | null;
  language: string;
  main_body: string | null;
  weapon_name: string;
  experiences: string;
}

export interface EncounterEntry {
  adversary: Adversary;
  count: number;
}

export enum AdversaryTypeCost {
  minion = 1,
  social = 1,
  support = 1,
  horde = 2,
  ranged = 2,
  skulk = 2,
  standard = 2,
  leader = 3,
  bruiser = 4,
  solo = 5,
}

// Fallback if type_slug is not in enum
export const DEFAULT_COST = 2;