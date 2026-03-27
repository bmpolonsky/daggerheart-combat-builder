
import React, { useState, useMemo } from 'react';
import { Adversary, EncounterEntry } from '../types';
import { calculateAdversaryCost, calculateBudget, getDifficultyLabel } from '../utils/mechanics';
import { Minus, Plus, Users, RefreshCw, Settings, Check, Info } from 'lucide-react';

interface Props {
  encounter: EncounterEntry[];
  playerCount: number;
  onUpdateCount: (id: number, delta: number) => void;
  onRemove: (id: number) => void; // Keeping prop for compatibility but removing button
  onClear: () => void;
  setPlayerCount: (n: number) => void;
  onViewDetails: (adv: Adversary) => void;
}

export const EncounterSidebar: React.FC<Props> = ({ 
  encounter, 
  playerCount, 
  onUpdateCount, 
  onClear,
  setPlayerCount,
  onViewDetails
}) => {
  const [showModifiers, setShowModifiers] = useState(true);
  
  // Manual Modifier States
  const [difficultyMode, setDifficultyMode] = useState<'standard' | 'easy' | 'hard'>('standard');
  const [isDamageBoosted, setIsDamageBoosted] = useState(false);
  const [isLowerTierUsed, setIsLowerTierUsed] = useState(false);

  // 1. Calculate Total Cost of Monsters
  const totalCost = encounter.reduce((acc, entry) => {
    return acc + (calculateAdversaryCost(entry.adversary.type_slug) * entry.count);
  }, 0);

  // 2. Automatic Modifiers Logic
  const autoModifiers = useMemo(() => {
    let mods = {
      multipleSolos: false,
      noHeavies: false,
      value: 0
    };

    if (encounter.length === 0) return mods;

    // Check for 2+ Solos
    const soloCount = encounter.reduce((acc, entry) => {
      return entry.adversary.type_slug === 'solo' ? acc + entry.count : acc;
    }, 0);
    if (soloCount >= 2) {
      mods.multipleSolos = true;
      mods.value -= 2;
    }

    // Check for absence of Heavies (Bruiser, Horde, Leader, Solo)
    const heavyTypes = ['bruiser', 'horde', 'leader', 'solo'];
    const hasHeavies = encounter.some(entry => heavyTypes.includes(entry.adversary.type_slug));
    
    if (!hasHeavies && encounter.length > 0) {
      mods.noHeavies = true;
      mods.value += 1;
    }

    return mods;
  }, [encounter]);

  // 3. Calculate Final Budget
  const baseBudget = calculateBudget(playerCount);
  
  let manualModifierValue = 0;
  if (difficultyMode === 'easy') manualModifierValue -= 1;
  if (difficultyMode === 'hard') manualModifierValue += 2;
  if (isDamageBoosted) manualModifierValue -= 2;
  if (isLowerTierUsed) manualModifierValue += 1;

  const totalModifiers = manualModifierValue + autoModifiers.value;
  const finalBudget = baseBudget + totalModifiers;

  const difficulty = getDifficultyLabel(finalBudget, totalCost);

  return (
    <div className="h-full flex flex-col w-full bg-dagger-panel">
      {/* Header */}
      <div className="p-4 border-b border-slate-700 bg-slate-900 flex justify-between items-center shrink-0 shadow-sm">
        <div>
          <h2 className="font-display font-bold text-xl text-dagger-gold">Колода боя</h2>
          <div className="text-xs text-slate-400">
            Соберите свою битву.
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowModifiers(!showModifiers)}
            className={`p-2 rounded transition-colors ${showModifiers ? 'bg-slate-800 text-dagger-gold' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
            title="Модификаторы боя"
          >
            <Settings size={18} />
          </button>
          {encounter.length > 0 && (
            <button 
              onClick={onClear}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded transition-colors"
              title="Очистить бой"
            >
              <RefreshCw size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Modifiers Panel */}
      {showModifiers && (
        <div className="bg-slate-800/50 border-b border-slate-700 p-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Настройка сложности</span>
            <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-700">
              <button 
                onClick={() => setDifficultyMode('easy')}
                className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${difficultyMode === 'easy' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Легкий (-1)
              </button>
              <button 
                onClick={() => setDifficultyMode('standard')}
                className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${difficultyMode === 'standard' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Норма
              </button>
              <button 
                onClick={() => setDifficultyMode('hard')}
                className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${difficultyMode === 'hard' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Сложный (+2)
              </button>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Ручные модификаторы</span>
            <div className="space-y-2">
              <label className="flex items-center justify-between text-sm text-slate-300 cursor-pointer group">
                <span className="group-hover:text-white transition-colors">Усиленный урон (+1d4 или +2)</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-red-400">-2 ОБ</span>
                  <div 
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isDamageBoosted ? 'bg-dagger-gold border-dagger-gold text-dagger-dark' : 'border-slate-600 bg-slate-900'}`}
                    onClick={() => setIsDamageBoosted(!isDamageBoosted)}
                  >
                    {isDamageBoosted && <Check size={14} strokeWidth={3} />}
                  </div>
                </div>
              </label>
              <label className="flex items-center justify-between text-sm text-slate-300 cursor-pointer group">
                <span className="group-hover:text-white transition-colors">Враги низкого ранга</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-green-400">+1 ОБ</span>
                  <div 
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isLowerTierUsed ? 'bg-dagger-gold border-dagger-gold text-dagger-dark' : 'border-slate-600 bg-slate-900'}`}
                    onClick={() => setIsLowerTierUsed(!isLowerTierUsed)}
                  >
                    {isLowerTierUsed && <Check size={14} strokeWidth={3} />}
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Авто-модификаторы</span>
            <div className="space-y-2">
              <div className={`flex items-center justify-between text-sm ${autoModifiers.multipleSolos ? 'text-dagger-gold' : 'text-slate-600'}`}>
                <span>2+ Одиночки (Solo)</span>
                <span className="font-mono text-xs">-2 ОБ</span>
              </div>
              <div className={`flex items-center justify-between text-sm ${autoModifiers.noHeavies ? 'text-dagger-gold' : 'text-slate-600'}`}>
                <span>Нет тяжелых типов</span>
                <span className="font-mono text-xs">+1 ОБ</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className="flex-grow overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {encounter.length === 0 ? (
          <div className="text-center text-slate-600 py-12 italic border-2 border-dashed border-slate-800 rounded-lg mx-2">
            <p>Противники не выбраны.</p>
            <p className="text-xs mt-2 text-slate-700">Нажмите "Добавить в бой" на карточках.</p>
          </div>
        ) : (
          encounter.map((entry) => {
            const cost = calculateAdversaryCost(entry.adversary.type_slug);
            return (
              <div key={entry.adversary.id} className="bg-slate-800 rounded p-3 flex items-center gap-3 border border-slate-700 shadow-sm group animate-in slide-in-from-right-4 duration-300">
                {/* Cost Badge */}
                <button 
                  onClick={() => onViewDetails(entry.adversary)}
                  className="flex-shrink-0 w-8 h-8 bg-dagger-dark text-dagger-gold border border-dagger-gold/30 rounded flex items-center justify-center font-bold text-sm shadow-inner hover:bg-slate-700 transition-colors"
                  title="Посмотреть свойства"
                >
                  {cost}
                </button>
                
                <div 
                  className="flex-grow min-w-0 cursor-pointer hover:text-dagger-gold transition-colors"
                  onClick={() => onViewDetails(entry.adversary)}
                >
                  <div className="text-sm font-medium text-slate-200 truncate pr-1">{entry.adversary.name}</div>
                  <div className="text-xs text-slate-500 capitalize truncate">{entry.adversary.type_name}</div>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 rounded px-1 py-1 border border-slate-700 shrink-0">
                  <button 
                    onClick={() => onUpdateCount(entry.adversary.id, -1)}
                    className="p-1 hover:text-red-400 text-slate-400 transition-colors"
                    title="Уменьшить / Удалить"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-mono w-5 text-center select-none text-white">{entry.count}</span>
                  <button 
                    onClick={() => onUpdateCount(entry.adversary.id, 1)}
                    className="p-1 hover:text-green-400 text-slate-400 transition-colors"
                    title="Увеличить"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Footer Calculation */}
      <div className="p-6 bg-slate-900 border-t border-dagger-gold/20 shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] relative z-10">
        
        {/* Player Count Control */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-slate-300">
            <Users size={18} />
            <span className="text-sm font-medium">Размер группы</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-800 rounded-lg px-2 py-1 border border-slate-700 shadow-sm">
            <button 
              onClick={() => setPlayerCount(Math.max(1, playerCount - 1))}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="text-lg font-bold w-6 text-center select-none text-white">{playerCount}</span>
            <button 
              onClick={() => setPlayerCount(playerCount + 1)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Math Breakdown (Only if modifiers exist) */}
        {totalModifiers !== 0 && (
          <div className="flex justify-between text-xs text-slate-500 mb-2 border-t border-slate-800 pt-2 border-dashed">
             <span>База: {baseBudget}</span>
             <span className={totalModifiers > 0 ? 'text-green-500' : 'text-red-500'}>
               {totalModifiers > 0 ? '+' : ''}{totalModifiers} Мод.
             </span>
          </div>
        )}

        {/* Difficulty Meter */}
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-sm text-slate-400 font-medium">Очки боя (ОБ)</span>
            <div className="text-right flex items-baseline gap-1">
              <span className={`text-3xl font-bold font-display ${difficulty.color} drop-shadow-sm`}>
                {totalCost}
              </span>
              <span className="text-slate-600 text-xl font-light">/</span>
              <span className="text-xl text-slate-400 font-mono">{finalBudget}</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700 relative shadow-inner">
            {/* Target Marker */}
            <div 
               className="absolute top-0 bottom-0 w-0.5 bg-white/50 z-10 shadow-[0_0_4px_rgba(255,255,255,0.5)]" 
               style={{ left: `${Math.min(100, (1 / 1.5) * 100)}%` }} // Target represents the budget relative to 1.5x scale
            />
            <div 
              className={`h-full transition-all duration-500 ease-out relative ${
                totalCost > finalBudget ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-dagger-gold to-yellow-300'
              }`}
              style={{ width: `${Math.min(100, (totalCost / (Math.max(1, finalBudget) * 1.5)) * 100)}%` }}
            />
          </div>
          
          <div className="flex justify-between items-center pt-2">
             <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Info size={12} />
                <span>Бюджет: {finalBudget}</span>
             </div>
             <span className={`text-sm font-bold uppercase tracking-wider ${difficulty.color} border border-current px-2 py-0.5 rounded text-[10px]`}>
              {difficulty.label}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
