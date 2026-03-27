
import React, { useState } from 'react';
import { Adversary } from '../types';
import { calculateAdversaryCost } from '../utils/mechanics';
import { Shield, Heart, Zap, Sword, Plus, Info } from 'lucide-react';

interface Props {
  adversary: Adversary;
  onAdd: (adv: Adversary) => void;
  onViewDetails: (adv: Adversary) => void;
}

export const AdversaryCard: React.FC<Props> = ({ adversary, onAdd, onViewDetails }) => {
  const cost = calculateAdversaryCost(adversary.type_slug);
  const [imageError, setImageError] = useState(false);
  
  const tierColor = 
    adversary.tier === 1 ? 'bg-green-500' :
    adversary.tier === 2 ? 'bg-blue-500' :
    adversary.tier === 3 ? 'bg-purple-500' :
    'bg-orange-500';

  const imageUrl = adversary.image_url && !imageError 
    ? `https://daggerheart.su${adversary.image_url}` 
    : null;

  return (
    <div 
      className="group relative bg-dagger-panel border border-slate-700 rounded-lg shadow-lg overflow-hidden hover:border-dagger-gold transition-all duration-200 flex flex-col h-full hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
    >
      {/* Clickable Area for Details */}
      <div 
        className="flex-grow flex flex-col cursor-pointer relative" 
        onClick={() => onViewDetails(adversary)}
      >
        {/* Image Section */}
        <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-dagger-panel via-transparent to-transparent z-10 opacity-80" />
          
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={adversary.name}
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-600">
                <span className="text-xs uppercase font-bold tracking-widest opacity-20">Нет изображения</span>
            </div>
          )}

          {/* Cost Badge - Absolute Top Right */}
          <div 
            className="absolute top-2 right-2 z-20" 
            title={`Стоимость: ${cost} очков (Роль: ${adversary.type_name})`}
          >
             <div className="bg-dagger-gold text-dagger-dark font-bold w-8 h-8 flex items-center justify-center rounded clip-hexagon shadow-lg text-base cursor-help border border-white/20" style={{clipPath: "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)"}}>
               {cost}
             </div>
          </div>

          {/* Type Badge - Absolute Bottom Left of Image */}
          <div className="absolute bottom-2 left-2 z-20">
             <span className="text-[10px] uppercase tracking-widest text-dagger-gold font-bold bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-dagger-gold/20 shadow-sm">
                {adversary.type_name}
             </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-3 pb-3 pt-2 flex-grow bg-dagger-panel flex flex-col gap-2 relative z-20">
          
          {/* Header: Name + Rank */}
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-display font-bold text-base text-white leading-tight">
              {adversary.name}
            </h3>
            <div className="flex items-center gap-1.5 shrink-0 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700/50 mt-0.5">
               <span className="text-[9px] text-slate-400 font-mono uppercase leading-none tracking-tight">Ранг {adversary.tier}</span>
               <div className={`w-2 h-2 rounded-full ${tierColor} shadow-[0_0_4px_currentColor]`}></div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 min-h-[3em]">
             <p className="text-xs text-slate-400 italic leading-relaxed line-clamp-3">
              {adversary.short_description}
            </p>
          </div>

          {/* Horizontal Stats Grid */}
          <div className="grid grid-cols-4 gap-1.5 mt-auto">
            {/* Diff */}
            <div className="flex flex-col items-center bg-slate-800/80 p-1 rounded border border-slate-700/50" title="Сложность">
              <Shield size={12} className="text-blue-400 mb-0.5" />
              <span className="text-white text-xs font-bold">{adversary.difficulty}</span>
            </div>

            {/* HP */}
            <div className="flex flex-col items-center bg-slate-800/80 p-1 rounded border border-slate-700/50" title="ОЗ">
              <Heart size={12} className="text-red-400 mb-0.5" />
              <span className="text-white text-xs font-bold">{adversary.hp}</span>
            </div>

            {/* Stress */}
            <div className="flex flex-col items-center bg-slate-800/80 p-1 rounded border border-slate-700/50" title="Стресс">
              <Zap size={12} className="text-yellow-400 mb-0.5" />
              <span className="text-white text-xs font-bold">{adversary.stress}</span>
            </div>

            {/* Dmg */}
            <div className="flex flex-col items-center bg-slate-800/80 p-1 rounded border border-slate-700/50 col-span-1" title="Урон">
              <Sword size={12} className="text-orange-400 mb-0.5" />
              <span className="text-white text-[10px] font-bold leading-none truncate w-full text-center">
                {adversary.damage_die_count}d{adversary.damage_die_size}{adversary.damage_bonus > 0 ? `+${adversary.damage_bonus}` : ''}
              </span>
            </div>
          </div>
          
          {/* Hover Hint */}
          <div className="absolute inset-0 -z-10 group-hover:bg-white/[0.02] transition-colors pointer-events-none rounded"></div>
        </div>
      </div>

      {/* Action Footer */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onAdd(adversary);
        }}
        className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-dagger-gold font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-t border-slate-700 transition-colors z-20 h-9"
      >
        <Plus size={14} />
        Добавить
      </button>
    </div>
  );
};
