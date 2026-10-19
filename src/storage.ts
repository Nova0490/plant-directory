import type { Plant, Room } from './types/types.ts';

const VALID_ROOMS: Room[] = ['Гостиная', 'Балкон', 'Ванная' , 'Кухня', 'Спальня'];

const isPlant = (value: unknown): value is Plant => {
  if (typeof value !== 'object' || value === null) return false;
  const p = value as Record<string, unknown>;
  return (
    typeof p.id === 'string' &&
    typeof p.name === 'string' &&
    VALID_ROOMS.includes(p.room as Room) &&
    typeof p.interval === 'number' &&
    typeof p.lastWatered === 'number' &&
    (p.note === undefined || typeof p.note === 'string')
  );
};

export const loadPlants = () : Plant[] => {
    try{
        const raw = localStorage.getItem('plants');
        if(!raw) return [];
        const parsed: unknown = JSON.parse(raw);
        if(!Array.isArray(parsed)) return [];
        return parsed.filter(isPlant);
    } catch (e) {
        console.error('Failed to load plants', e);
        return [];
    }
};

export const savePlants = (plants:Plant[]): void =>{
    try{
        localStorage.setItem('plants', JSON.stringify(plants));
    } catch (e) {
        console.error('Failed to load plants', e);
    }
};

export const generateId = (): string =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;