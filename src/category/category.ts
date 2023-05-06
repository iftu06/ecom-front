export interface Category {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  class?: boolean;
  child?: Category[];
}
