export interface Options {
  label: string;
  value: any;
}

export interface Division {
  divisa?: string | null;
  ask: number;
  bid: number;
}

export interface TotalDivision extends Division {
  prevAsk: number;
  prevBid: number;
}

export interface Selected<T> {
  2: T; //Red, que el valor disminuyo de valor
  3: T; //Green, que el valor aumento de valor
}

export interface Prices {
  [key: string]: Division;
}
