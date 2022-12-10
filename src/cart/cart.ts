import CartItem from "./cart_item";

export default interface Cart {
  id?: number;
  items: CartItem[];
  totQuantity?: number;
  totPrice?: number;
}
