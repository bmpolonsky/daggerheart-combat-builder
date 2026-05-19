import type { Adversary, AdversaryFeature } from "@/lib/api";

export const CUSTOM_ADVERSARY_STORAGE_KEY = "daggerheart-combat-builder:custom-adversaries";
export const CUSTOM_ADVERSARY_EXPORT_FORMAT = "daggerheart-combat-builder.custom-adversaries";

export const ADVERSARY_ROLE_OPTIONS = [
  { id: "minion", name: "Приспешник" },
  { id: "social", name: "Социальный" },
  { id: "support", name: "Поддержка" },
  { id: "horde", name: "Орда" },
  { id: "ranged", name: "Дальнобойный" },
  { id: "skulk", name: "Скрытный" },
  { id: "standard", name: "Рядовой" },
  { id: "leader", name: "Лидер" },
  { id: "bruiser", name: "Громила" },
  { id: "solo", name: "Одиночка" },
];

export interface CustomAdversaryExportPayload {
  format: typeof CUSTOM_ADVERSARY_EXPORT_FORMAT;
  version: 1;
  exportedAt: string;
  items: Adversary[];
}

export interface NormalizeCustomAdversaryOptions {
  keepId?: boolean;
  now?: number;
}

export function createCustomAdversaryId(existingIds: Set<number>) {
  let id = 0;
  do {
    id = -Math.floor(Date.now() + Math.random() * 1000);
  } while (existingIds.has(id));
  return id;
}

export function normalizeNumber(
  value: unknown,
  fallback: number,
  min = 0,
  max = Number.MAX_SAFE_INTEGER
) {
  const parsed = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, Math.trunc(parsed)));
}

export function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function resolveRoleName(roleId: string, fallback?: string) {
  return ADVERSARY_ROLE_OPTIONS.find((role) => role.id === roleId)?.name ?? fallback ?? "Рядовой";
}

export function extractCustomAdversaryItems(parsed: unknown) {
  if (Array.isArray(parsed)) return parsed;
  if (parsed && typeof parsed === "object" && Array.isArray((parsed as { items?: unknown }).items)) {
    return (parsed as { items: unknown[] }).items;
  }
  return null;
}

function normalizeFeature(feature: Partial<AdversaryFeature>, index: number) {
  const name = normalizeText(feature?.name);
  const text = normalizeText(feature?.text);
  if (!name && !text) return null;

  return {
    id: feature?.id ?? `custom-feature-${index}`,
    name: name || "Без названия",
    text,
  };
}

export function normalizeCustomAdversary(
  item: Partial<Adversary>,
  existingIds: Set<number>,
  options: NormalizeCustomAdversaryOptions = {}
): Adversary | null {
  const name = normalizeText(item.name);
  if (!name) return null;

  const roleId = normalizeText(item.roleId) || "standard";
  const id =
    options.keepId && typeof item.id === "number" && item.id < 0 && !existingIds.has(item.id)
      ? item.id
      : createCustomAdversaryId(existingIds);
  existingIds.add(id);

  const damageThresholds = Array.isArray(item.damageThresholds)
    ? [
        normalizeNumber(item.damageThresholds[0], 0),
        normalizeNumber(item.damageThresholds[1], 0),
      ].filter((value) => value > 0)
    : [];
  const features = Array.isArray(item.features)
    ? item.features
        .map((feature, index) => normalizeFeature(feature, index))
        .filter((feature): feature is AdversaryFeature => Boolean(feature))
    : [];

  return {
    id,
    slug: normalizeText(item.slug) || `custom-${Math.abs(id)}`,
    isCustom: true,
    updatedAt: normalizeNumber(item.updatedAt, options.now ?? Date.now(), 0),
    tier: normalizeNumber(item.tier, 1, 1, 4),
    roleId,
    roleName: resolveRoleName(roleId, normalizeText(item.roleName)),
    name,
    summary: normalizeText(item.summary),
    image: normalizeText(item.image) || null,
    features,
    attackBonus: normalizeText(item.attackBonus) || "0",
    attackRange: normalizeText(item.attackRange),
    damageType: normalizeText(item.damageType),
    damageBonus: normalizeNumber(item.damageBonus, 0, -999),
    damageDieSize: normalizeNumber(item.damageDieSize, 0),
    damageDieCount: normalizeNumber(item.damageDieCount, 0),
    stress: normalizeNumber(item.stress, 0),
    hp: normalizeNumber(item.hp, 0),
    difficulty: normalizeNumber(item.difficulty, 0),
    damageThresholds: damageThresholds.length === 2 ? damageThresholds : null,
    motives: normalizeText(item.motives),
    experiences: normalizeText(item.experiences),
    weaponName: normalizeText(item.weaponName),
    sourceSlugs: ["custom"],
    campaignFrameSlugs: [],
    hordePerHp: item.hordePerHp ?? null,
    mainBody: normalizeText(item.mainBody),
  };
}

export function buildCustomAdversaryExport(items: Adversary[]): CustomAdversaryExportPayload {
  return {
    format: CUSTOM_ADVERSARY_EXPORT_FORMAT,
    version: 1,
    exportedAt: new Date().toISOString(),
    items,
  };
}

export function buildDuplicateTemplate(adversary: Adversary): Adversary {
  return {
    ...adversary,
    id: 0,
    slug: "",
    isCustom: true,
    updatedAt: undefined,
    name: `${adversary.name} (копия)`,
    sourceSlugs: ["custom"],
    campaignFrameSlugs: [],
  };
}
