import { useEffect, useState } from "preact/hooks";
import type { Adversary } from "@/lib/api";
import { REMOTE_BASE_URL } from "@/lib/constants";
import {
  IconClose,
  IconHeart,
  IconInfo,
  IconShield,
  IconSword,
  IconZap,
} from "@/components/icons";

interface AdversaryDetailsModalProps {
  adversary: Adversary;
  onClose: () => void;
  onAdd: () => void;
}

function renderLegacyMarkdown(text: string) {
  if (!text) return "";

  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic text-slate-300">$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) => {
      const fullUrl = url.startsWith("http") ? url : `${REMOTE_BASE_URL}${url}`;
      return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" class="text-dagger-gold hover:underline decoration-dagger-gold/50 cursor-pointer transition-colors">${label}</a>`;
    })
    .replace(/^- (.*)$/gm, '<li class="ml-4 list-disc marker:text-dagger-gold">$1</li>')
    .replace(/\n/g, "<br />");
}

function formatDamage(adversary: Adversary) {
  return `${adversary.damageDieCount}d${adversary.damageDieSize}${
    adversary.damageBonus > 0 ? `+${adversary.damageBonus}` : ""
  }`;
}

function damageTypeLabel(value: string) {
  if (value === "physical") return "Физический";
  if (value === "magical") return "Магический";
  return value || "—";
}

export function AdversaryDetailsModal({
  adversary,
  onClose,
  onAdd,
}: AdversaryDetailsModalProps) {
  const [imageError, setImageError] = useState(false);
  const imageUrl = adversary.image && !imageError ? adversary.image : null;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200">
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-dagger-gold bg-dagger-panel shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-[120px] shrink-0 overflow-hidden bg-slate-900">
          {imageUrl && (
            <>
              <div className="absolute inset-0">
                <img
                  src={imageUrl}
                  alt={adversary.name}
                  className="h-full w-full object-cover opacity-40 blur-[2px]"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-dagger-panel" />
              </div>
              <div className="pointer-events-none absolute -bottom-4 right-12 z-10 hidden h-32 w-32 sm:block md:h-40 md:w-40">
                <img src={imageUrl} alt="" className="h-full w-full object-contain drop-shadow-xl" />
              </div>
            </>
          )}

          <div className="relative z-20 flex items-start justify-between p-6">
            <div className="max-w-[70%]">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h2 className="font-display text-2xl font-bold leading-none text-white drop-shadow-md shadow-black md:text-4xl">
                  {adversary.name}
                </h2>
                <span className="rounded border border-dagger-gold/30 bg-slate-800 px-2 py-0.5 text-xs font-bold uppercase text-dagger-gold shadow-sm">
                  Ранг {adversary.tier}
                </span>
              </div>
              <div className="text-sm italic leading-relaxed text-slate-300 drop-shadow-sm md:text-base">
                <span className="font-bold text-slate-200">{adversary.roleName}</span> {"— "}
                <span
                  dangerouslySetInnerHTML={{ __html: renderLegacyMarkdown(adversary.summary) }}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-black/20 p-2 text-slate-400 transition-colors hover:bg-black/40 hover:text-white backdrop-blur-sm"
            >
              <IconClose size={24} />
            </button>
          </div>
        </div>

        <div className="custom-scrollbar flex-1 space-y-6 overflow-y-auto bg-dagger-panel p-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center rounded-lg border border-slate-700 bg-slate-800 p-3 shadow-sm">
              <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-blue-400">
                <IconShield size={16} /> Сложность
              </div>
              <span className="font-display text-4xl font-bold leading-none text-white pb-1">
                {adversary.difficulty}
              </span>
            </div>

            <div className="relative flex overflow-hidden rounded-lg border border-slate-700 bg-slate-800 shadow-sm">
              <div className="flex flex-1 flex-col items-center justify-center p-2">
                <div className="mb-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-red-400">
                  <IconHeart size={16} /> Раны
                </div>
                <span className="font-display text-4xl font-bold leading-none text-white pb-1">
                  {adversary.hp}
                </span>
              </div>
              <div className="my-2 w-px bg-slate-700" />
              <div className="flex flex-1 flex-col items-center justify-center p-2">
                <div className="mb-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-yellow-400">
                  <IconZap size={16} /> Стресс
                </div>
                <span className="font-display text-4xl font-bold leading-none text-white pb-1">
                  {adversary.stress}
                </span>
              </div>
            </div>

            <div className="relative flex flex-col justify-center rounded-lg border border-slate-700 bg-slate-800 p-3 shadow-sm">
              <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-orange-400">
                <span className="flex items-center gap-1">
                  <IconSword size={16} /> Атака
                </span>
                <span className="font-display text-lg text-white">
                  {adversary.attackBonus.startsWith("-")
                    ? adversary.attackBonus
                    : `+${adversary.attackBonus}`}
                </span>
              </div>
              <div className="mt-auto pt-1 text-center">
                <div className="font-mono text-xl font-bold leading-none tracking-tight text-white">
                  {formatDamage(adversary)}
                </div>
                <div className="mt-1 truncate text-[10px] font-bold uppercase text-slate-500">
                  {damageTypeLabel(adversary.damageType)}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-lg border border-slate-700 bg-slate-800 p-3 shadow-sm">
              <div className="mb-2 text-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Пороги урона
              </div>
              {adversary.damageThresholds ? (
                <div className="flex h-full items-center justify-center divide-x divide-slate-700">
                  <div className="flex flex-1 flex-col items-center justify-center px-1">
                    <div className="mb-0.5 text-[9px] font-bold uppercase text-slate-400">
                      Ощутимый
                    </div>
                    <div className="font-mono text-2xl font-bold leading-none text-slate-200">
                      {adversary.damageThresholds[0]}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center px-1">
                    <div className="mb-0.5 text-[9px] font-bold uppercase text-slate-400">
                      Тяжелый
                    </div>
                    <div className="font-mono text-2xl font-bold leading-none text-white">
                      {adversary.damageThresholds[1]}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center text-center text-xs italic text-slate-500">
                  Нет
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {adversary.motives && (
              <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Мотивы и Тактика
                </span>
                <p className="text-sm leading-relaxed text-slate-300">{adversary.motives}</p>
              </div>
            )}
            {adversary.experiences && (
              <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Опыт
                </span>
                <p className="text-sm leading-relaxed text-slate-300">{adversary.experiences}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-700 pb-2">
              <div className="h-1.5 w-1.5 rounded-full bg-dagger-gold" />
              <h3 className="font-display text-lg font-bold text-dagger-gold">Свойства</h3>
            </div>

            {adversary.features.length > 0 ? (
              <div className="grid gap-3">
                {adversary.features.map((feature) => (
                  <div
                    key={feature.id}
                    className="rounded border border-slate-700 bg-slate-800 p-4 transition-colors hover:border-slate-600"
                  >
                    <h4 className="mb-2 text-base font-bold text-white">{feature.name}</h4>
                    <div
                      className="text-sm leading-relaxed text-slate-300"
                      dangerouslySetInnerHTML={{ __html: renderLegacyMarkdown(feature.text) }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 rounded border border-dashed border-slate-800 bg-slate-800/30 py-4 italic text-slate-500">
                <IconInfo size={16} /> Свойства не указаны.
              </div>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-700 bg-slate-900 p-4">
          <div className="hidden font-mono text-xs text-slate-500 md:block">ID: {adversary.slug}</div>
          <div className="flex w-full gap-3 md:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded border border-transparent px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white md:flex-none"
            >
              Закрыть
            </button>
            <button
              type="button"
              onClick={() => {
                onAdd();
                onClose();
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded bg-dagger-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-dagger-dark shadow-lg transition-all hover:bg-yellow-500 hover:shadow-dagger-gold/20 md:flex-none"
            >
              <IconSword size={16} />
              Добавить в бой
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
