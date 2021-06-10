// Interfaces
export interface TrendMark {
  color: string;
  marker: {
    enabled: boolean;
    radius: number;
  };
  y: number;
}

// Types
export type TrendFormat = number | TrendMark;
