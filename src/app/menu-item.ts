export interface Entree {
  entreeId?: number;
  name: string;
  cost: number;
// This is a tuple of the item name and its unique id for futre implmentation
  inventory?: [string?, number?][];
}

export interface ITEM {
  item: string;
  cost: number;
}
