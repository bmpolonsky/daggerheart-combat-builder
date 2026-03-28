import { useState } from "preact/hooks";
import type { JSX } from "preact";
import type { Adversary } from "@/lib/api";
import { calculateAdversaryCost } from "@/lib/mechanics";
import { IconHeart, IconPlus, IconShield, IconSword, IconZap } from "@/components/icons";
import { formatDamageRoll } from "@/lib/utils";

interface AdversaryCardProps {
  adversary: Adversary;
  onAdd: () => void;
  onViewDetails: () => void;
}

function getTierColor(tier: number) {
  if (tier === 1) return "bg-green-500";
  if (tier === 2) return "bg-blue-500";
  if (tier === 3) return "bg-purple-500";
  return "bg-orange-500";
}

export function AdversaryCard({
  adversary,
  onAdd,
  onViewDetails,
}: AdversaryCardProps) {
  const cost = calculateAdversaryCost(adversary.roleId);
  const [imageError, setImageError] = useState(false);
  const imageUrl = adversary.image && !imageError ? adversary.image : null;
  const tierColor = getTierColor(adversary.tier);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-700 bg-dagger-panel shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-dagger-gold hover:shadow-xl hover:shadow-black/40">
      <div className="relative flex flex-grow cursor-pointer flex-col" onClick={onViewDetails}>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-dagger-panel via-transparent to-transparent opacity-80" />

          {imageUrl ? (
            <img
              src={imageUrl}
              alt={adversary.name}
              className="h-full w-full object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-600">
              <span className="text-xs font-bold uppercase tracking-widest opacity-20">
                Нет изображения
              </span>
            </div>
          )}

          <div
            className="absolute right-2 top-2 z-20"
            title={`Стоимость: ${cost} очков (Роль: ${adversary.roleName})`}
          >
            <div
              className="flex h-8 w-8 cursor-help items-center justify-center rounded border border-white/20 bg-dagger-gold text-base font-bold text-dagger-dark shadow-lg clip-hexagon"
              style={
                {
                  clipPath:
                    "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
                } as JSX.CSSProperties
              }
            >
              {cost}
            </div>
          </div>

          <div className="absolute bottom-2 left-2 z-20">
            <span className="rounded border border-dagger-gold/20 bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-dagger-gold shadow-sm backdrop-blur-sm">
              {adversary.roleName}
            </span>
          </div>
        </div>

        <div className="relative z-20 flex flex-grow flex-col gap-2 bg-dagger-panel px-3 pb-3 pt-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-bold leading-tight text-white">
              {adversary.name}
            </h3>
            <div className="mt-0.5 flex shrink-0 items-center gap-1.5 rounded border border-slate-700/50 bg-slate-800 px-1.5 py-0.5">
              <span className="font-mono text-[9px] uppercase leading-none tracking-tight text-slate-400">
                Ранг {adversary.tier}
              </span>
              <div className={`h-2 w-2 rounded-full shadow-[0_0_4px_currentColor] ${tierColor}`} />
            </div>
          </div>

          <div className="min-h-[3em] flex-1">
            <p className="line-clamp-3 text-xs italic leading-relaxed text-slate-400">
              {adversary.summary}
            </p>
          </div>

          <div className="mt-auto grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.45fr)] gap-1.5">
            <div
              className="flex flex-col items-center rounded border border-slate-700/50 bg-slate-800/80 p-1"
              title="Сложность"
            >
              <IconShield size={12} className="mb-0.5 text-blue-400" />
              <span className="text-xs font-bold text-white">{adversary.difficulty}</span>
            </div>

            <div
              className="flex flex-col items-center rounded border border-slate-700/50 bg-slate-800/80 p-1"
              title="ОЗ"
            >
              <IconHeart size={12} className="mb-0.5 text-red-400" />
              <span className="text-xs font-bold text-white">{adversary.hp}</span>
            </div>

            <div
              className="flex flex-col items-center rounded border border-slate-700/50 bg-slate-800/80 p-1"
              title="Стресс"
            >
              <IconZap size={12} className="mb-0.5 text-yellow-400" />
              <span className="text-xs font-bold text-white">{adversary.stress}</span>
            </div>

            <div
              className="flex min-w-0 flex-col items-center rounded border border-slate-700/50 bg-slate-800/80 p-1"
              title="Урон"
            >
              <IconSword size={12} className="mb-0.5 text-orange-400" />
              <span className="w-full whitespace-nowrap text-center font-mono text-[9px] font-bold leading-none tracking-tight text-white">
                {formatDamageRoll(adversary, { flatSuffix: " ур." })}
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10 rounded transition-colors group-hover:bg-white/[0.02]" />
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onAdd();
        }}
        className="z-20 flex h-9 w-full items-center justify-center gap-2 border-t border-slate-700 bg-slate-800 py-2 text-xs font-bold uppercase tracking-wider text-dagger-gold transition-colors hover:bg-slate-700"
      >
        <IconPlus size={14} />
        Добавить
      </button>
    </div>
  );
}
