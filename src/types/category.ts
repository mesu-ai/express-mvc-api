interface CategotyLayerT {
  base: string;
  first?: string;
  second?: string;
  third?: string;
}

export interface CategoryWithLayerT {
  id: number | null;
  name: string;
  layer: CategotyLayerT;
}