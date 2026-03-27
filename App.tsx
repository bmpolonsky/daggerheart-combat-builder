
import React, { useState, useMemo } from 'react';
import { adversaryData } from './data/adversaries';
import { Adversary, EncounterEntry } from './types';
import { AdversaryCard } from './components/AdversaryCard';
import { EncounterSidebar } from './components/EncounterSidebar';
import { AdversaryDetailsModal } from './components/AdversaryDetailsModal';
import { Search, Filter, Menu, X } from 'lucide-react';

function App() {
  // State
  const [encounter, setEncounter] = useState<EncounterEntry[]>([]);
  const [playerCount, setPlayerCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<number | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedAdversary, setSelectedAdversary] = useState<Adversary | null>(null);

  // Constants
  const uniqueTypes = useMemo(() => {
    const types = new Set(adversaryData.map(a => a.type_name));
    return Array.from(types).sort();
  }, []);

  // Filter Logic
  const filteredAdversaries = useMemo(() => {
    return adversaryData.filter(adv => {
      const matchesSearch = adv.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            adv.type_name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTier = tierFilter === 'all' || adv.tier === tierFilter;
      const matchesType = typeFilter === 'all' || adv.type_name === typeFilter;
      
      return matchesSearch && matchesTier && matchesType;
    });
  }, [searchQuery, tierFilter, typeFilter]);

  // Handlers
  const handleAddAdversary = (adv: Adversary) => {
    setEncounter(prev => {
      const exists = prev.find(e => e.adversary.id === adv.id);
      if (exists) {
        return prev.map(e => e.adversary.id === adv.id ? { ...e, count: e.count + 1 } : e);
      }
      return [...prev, { adversary: adv, count: 1 }];
    });
    // Optional: Open sidebar on add on mobile
    if (window.innerWidth < 1024) setIsSidebarOpen(true);
  };

  const handleUpdateCount = (id: number, delta: number) => {
    setEncounter(prev => {
      return prev.map(e => {
        if (e.adversary.id === id) {
          const newCount = Math.max(0, e.count + delta);
          return { ...e, count: newCount };
        }
        return e;
      }).filter(e => e.count > 0);
    });
  };

  const handleRemove = (id: number) => {
    setEncounter(prev => prev.filter(e => e.adversary.id !== id));
  };

  const handleClear = () => {
    if (window.confirm('Вы уверены, что хотите очистить весь бой?')) {
      setEncounter([]);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#111318]">
      
      {/* Left Panel: Adversary Browser */}
      <main className="flex-1 flex flex-col h-full relative min-w-0">
        
        {/* Top Bar */}
        <header className="bg-dagger-dark border-b border-slate-700 p-4 flex flex-col md:flex-row gap-4 items-center justify-between z-10 shadow-md shrink-0">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <h1 className="font-display font-bold text-2xl text-dagger-gold tracking-wide whitespace-nowrap">
              ПРОТИВНИКИ
            </h1>
            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">
              {filteredAdversaries.length} рез.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap md:flex-nowrap justify-end">
            {/* Search */}
            <div className="relative flex-grow md:flex-grow-0 md:w-64 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Поиск..." 
                className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-md py-2 pl-9 pr-4 focus:ring-1 focus:ring-dagger-gold focus:border-dagger-gold outline-none placeholder-slate-600 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <select 
                className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-md py-2 px-3 focus:border-dagger-gold outline-none cursor-pointer flex-1 md:flex-none"
                value={tierFilter}
                onChange={(e) => setTierFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              >
                <option value="all">Любой ранг</option>
                <option value="1">Ранг 1</option>
                <option value="2">Ранг 2</option>
                <option value="3">Ранг 3</option>
                <option value="4">Ранг 4</option>
              </select>

              <select 
                className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-md py-2 px-3 focus:border-dagger-gold outline-none cursor-pointer flex-1 md:flex-none max-w-[140px]"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">Любая роль</option>
                {uniqueTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-dagger-gold border border-dagger-gold/30 rounded bg-slate-800"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {/* Grid Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-900/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pb-20">
            {filteredAdversaries.map(adv => (
              <AdversaryCard 
                key={adv.id} 
                adversary={adv} 
                onAdd={handleAddAdversary} 
                onViewDetails={setSelectedAdversary}
              />
            ))}
            {filteredAdversaries.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-slate-500 text-lg">Противники, соответствующие критериям, не найдены.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Right Panel: Encounter Builder */}
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <aside className={`
        fixed lg:static inset-y-0 right-0 z-30 
        w-80 lg:w-96 transform transition-transform duration-300 ease-in-out
        bg-dagger-panel border-l border-slate-700 shadow-2xl flex flex-col h-full
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <EncounterSidebar 
          encounter={encounter}
          playerCount={playerCount}
          onUpdateCount={handleUpdateCount}
          onRemove={handleRemove}
          onClear={handleClear}
          setPlayerCount={setPlayerCount}
          onViewDetails={setSelectedAdversary}
        />
      </aside>

      {/* Details Modal */}
      {selectedAdversary && (
        <AdversaryDetailsModal 
          adversary={selectedAdversary}
          onClose={() => setSelectedAdversary(null)}
          onAdd={handleAddAdversary}
        />
      )}

    </div>
  );
}

export default App;
