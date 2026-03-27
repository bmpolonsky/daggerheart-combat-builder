import { Adversary, AdversaryTypeCost, DEFAULT_COST } from '../types';

export const calculateAdversaryCost = (typeSlug: string): number => {
  const slug = typeSlug.toLowerCase();
  if (slug in AdversaryTypeCost) {
    return AdversaryTypeCost[slug as keyof typeof AdversaryTypeCost];
  }
  return DEFAULT_COST;
};

export const calculateBudget = (playerCount: number): number => {
  // Formula: (3 x Players) + 2
  return (3 * playerCount) + 2;
};

export const getDifficultyLabel = (budget: number, cost: number) => {
  const diff = cost - budget;
  
  if (diff <= -4) return { label: 'Тривиально', color: 'text-gray-400' };
  if (diff <= -2) return { label: 'Легко', color: 'text-green-400' };
  if (diff <= 1) return { label: 'Стандарт', color: 'text-dagger-gold' };
  if (diff <= 4) return { label: 'Сложно', color: 'text-orange-500' };
  if (diff <= 8) return { label: 'Экстремально', color: 'text-red-500' };
  return { label: 'Смертельно', color: 'text-purple-500' };
};