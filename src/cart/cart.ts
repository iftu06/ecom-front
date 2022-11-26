import { CartItem } from "./cart_item";

export interface Car {
  id?: number;
  items: CartItem[];
  totQuantity?: number;
  totPrice?: number;
}
