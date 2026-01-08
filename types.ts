
export interface BinStatus {
  id: string;
  name: string;
  fillLevel: number;
  battery: number;
  lastSync: string;
  temperature: number;
  type: string;
  location: string;
}

export interface PickupHistory {
  id: string;
  date: string;
  weight: number;
  type: string;
}

export interface Insight {
  title: string;
  content: string;
}
