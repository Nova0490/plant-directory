export type Room = 'Гостиная' | 'Спальня' | 'Кухня' | 'Балкон' | 'Ванная';


export interface Plant {
    name: string;
    room: Room;
    interval: number;
    lastWatered: number;
    note?: string;
}
export type UseDrawerReturn = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export type PlantFormState = {
  name: string;
  room: Room;
  interval: number;
  lastWatered: number;
  note: string;
};
