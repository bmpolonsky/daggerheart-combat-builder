
import React, { useState } from 'react';
import { Adversary } from '../types';
import { Shield, Heart, Zap, Sword, X, AlertTriangle, Skull } from 'lucide-react';

interface Props {
  adversary: Adversary;
  onClose: () => void;
  onAdd: (adv: Adversary) => void;
}

// Simple Markdown Parser Component
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  // Process the text
  let processed = text
    // 1. Sanitize basic HTML chars to allow us to safely use dangerouslySetInnerHTML later
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    
    // 2. Bold: **text** -> <strong ...>text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    
    // 3. Italic: *text* -> <em ...>text</em>
    .replace(/\*([^*]+)\*/g, '<em class="italic text-slate-300">$1</em>')
    
    // 4. Links: [text](url) -> <a ...>text</a>
    // We prepend daggerheart.su to relative links so they actually work
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g, 
      (match, label, url) => {
        const fullUrl = url.startsWith('http') ? url : `https://daggerheart.su${url}`;
        return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" class="text-dagger-gold hover:underline decoration-dagger-gold/50 cursor-pointer transition-colors">${label}</a>`;
      }
    )
    
    // 5. Lists: - item -> <li>item</li> (Simple handle for bullet points if they exist at start of line)
    .replace(/^- (.*)$/gm, '<li class="ml-4 list-disc marker:text-dagger-gold">$1</li>')

    // 6. Newlines -> <br>
    .replace(/\n/g, '<br />');

  return (
    <span 
      className="text-slate-300 text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: processed }} 
    />
  );
};

export const AdversaryDetailsModal: React.FC<Props> = ({ adversary, onClose, onAdd }) => {
  const [imageError, setImageError] = useState(false);

  // Prevent background scrolling
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const imageUrl = adversary.image_url && !imageError 
    ? `https://daggerheart.su${adversary.image_url}` 
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-dagger-panel border border-dagger-gold rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image Background */}
        <div className="relative shrink-0 bg-slate-900 overflow-hidden min-h-[120px]">
          {imageUrl && (
            <>
              <div className="absolute inset-0">
                <img 
                  src={imageUrl} 
                  alt={adversary.name}
                  className="w-full h-full object-cover opacity-40 blur-[2px]"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-dagger-panel"></div>
              </div>
              {/* Floating clear image on right if available */}
              <div className="absolute right-12 -bottom-4 h-32 w-32 md:h-40 md:w-40 z-10 hidden sm:block pointer-events-none">
                 <img 
                  src={imageUrl} 
                  alt="" 
                  className="w-full h-full object-contain drop-shadow-xl"
                 />
              </div>
            </>
          )}

          <div className="relative z-20 p-6 flex justify-between items-start">
            <div className="max-w-[70%]">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h2 className="text-2xl md:text-4xl font-display font-bold text-white leading-none shadow-black drop-shadow-md">
                  {adversary.name}
                </h2>
                <span className={`px-2 py-0.5 text-xs font-bold uppercase rounded bg-slate-800 text-dagger-gold border border-dagger-gold/30 shadow-sm`}>
                  Ранг {adversary.tier}
                </span>
              </div>
              <div className="text-slate-300 italic text-sm md:text-base leading-relaxed drop-shadow-sm">
                <span className="font-bold text-slate-200">{adversary.type_name}</span> — <SimpleMarkdown text={adversary.short_description} />
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors backdrop-blur-sm"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6 bg-dagger-panel">
          
          {/* Main Stats Bar Compact - 4 Columns on Large Screens */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Difficulty */}
            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex flex-col items-center justify-center shadow-sm">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wide mb-1">
                <Shield size={16} /> Сложность
              </div>
              <span className="text-4xl font-display font-bold text-white leading-none pb-1">{adversary.difficulty}</span>
            </div>

            {/* 2. Vitals (Combined) */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 flex shadow-sm relative overflow-hidden">
              {/* Wounds */}
              <div className="flex-1 flex flex-col items-center justify-center p-2">
                <div className="flex items-center gap-1 text-red-400 text-xs font-bold uppercase tracking-wide mb-1">
                  <Heart size={16} /> Раны
                </div>
                <span className="text-4xl font-display font-bold text-white leading-none pb-1">{adversary.hp}</span>
              </div>
              {/* Divider */}
              <div className="w-px bg-slate-700 my-2"></div>
              {/* Stress */}
              <div className="flex-1 flex flex-col items-center justify-center p-2">
                <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold uppercase tracking-wide mb-1">
                  <Zap size={16} /> Стресс
                </div>
                <span className="text-4xl font-display font-bold text-white leading-none pb-1">{adversary.stress}</span>
              </div>
            </div>

            {/* 3. Attack & Damage */}
            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex flex-col justify-center shadow-sm relative">
              <div className="flex items-center justify-between text-orange-400 text-xs font-bold uppercase tracking-wide mb-2">
                <span className="flex items-center gap-1"><Sword size={16} /> Атака</span>
                <span className="text-lg text-white font-display">
                  {adversary.attack_bonus.startsWith('-') ? adversary.attack_bonus : `+${adversary.attack_bonus}`}
                </span>
              </div>
              <div className="text-center pt-1 mt-auto">
                <div className="text-xl font-bold text-white font-mono leading-none tracking-tight">
                  {adversary.damage_die_count}d{adversary.damage_die_size}{adversary.damage_bonus > 0 ? `+${adversary.damage_bonus}` : ''}
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-bold mt-1 truncate">
                  {adversary.damage_type === 'physical' ? 'Физический' : adversary.damage_type === 'magical' ? 'Магический' : adversary.damage_type}
                </div>
              </div>
            </div>

            {/* 4. Thresholds (Combined) */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 flex flex-col shadow-sm p-3 justify-center">
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider text-center mb-2">
                Пороги урона
              </div>
              {adversary.damage_thresholds ? (
                <div className="flex items-center justify-center gap-0 divide-x divide-slate-700 h-full">
                  <div className="flex-1 flex flex-col items-center justify-center px-1">
                    <div className="text-[9px] text-slate-400 uppercase font-bold mb-0.5">Ощутимый</div>
                    <div className="text-2xl font-bold text-slate-200 font-mono leading-none">{adversary.damage_thresholds[0]}</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center px-1">
                    <div className="text-[9px] text-slate-400 uppercase font-bold mb-0.5">Тяжелый</div>
                    <div className="text-2xl font-bold text-white font-mono leading-none">{adversary.damage_thresholds[1]}</div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-500 italic text-xs h-full flex items-center justify-center">Нет</div>
              )}
            </div>

          </div>

          {/* Motives & Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adversary.motives && (
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Мотивы и Тактика</span>
                <p className="text-slate-300 text-sm leading-relaxed">{adversary.motives}</p>
              </div>
            )}
            {adversary.experiences && (
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Опыт</span>
                <p className="text-slate-300 text-sm leading-relaxed">{adversary.experiences}</p>
              </div>
            )}
          </div>

          {/* Properties / Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-700 pb-2">
              <div className="h-1.5 w-1.5 rounded-full bg-dagger-gold"></div>
              <h3 className="font-display font-bold text-lg text-dagger-gold">
                Свойства
              </h3>
            </div>
            
            {adversary.features.length > 0 ? (
              <div className="grid gap-3">
                {adversary.features.map((feature) => (
                  <div key={feature.id} className="bg-slate-800 p-4 rounded border border-slate-700 hover:border-slate-600 transition-colors">
                    <h4 className="font-bold text-white text-base mb-2">{feature.name}</h4>
                    <div className="text-slate-300 text-sm leading-relaxed">
                      <SimpleMarkdown text={feature.main_body} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-slate-500 italic flex items-center gap-2 py-4 justify-center bg-slate-800/30 rounded border border-dashed border-slate-800">
                <AlertTriangle size={16} /> Свойства не указаны.
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-700 bg-slate-900 flex justify-between items-center gap-3 shrink-0">
          <div className="text-xs text-slate-500 font-mono hidden md:block">
            ID: {adversary.slug}
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button 
              onClick={onClose}
              className="flex-1 md:flex-none px-4 py-2.5 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium border border-transparent hover:border-slate-600"
            >
              Закрыть
            </button>
            <button 
              onClick={() => { onAdd(adversary); onClose(); }}
              className="flex-1 md:flex-none px-6 py-2.5 bg-dagger-gold hover:bg-yellow-500 text-dagger-dark font-bold rounded shadow-lg hover:shadow-dagger-gold/20 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
            >
              <Sword size={16} />
              Добавить в бой
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
