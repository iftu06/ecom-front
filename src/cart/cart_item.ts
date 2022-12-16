interface CartItem {
  id?: number;
  productId?: number;
  name?: string;
  description?: string;
  image?: string;
  quantity: number;
  price: number;
}

export default CartItem;
