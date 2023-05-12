import { PlaceOrder } from "@features/cart/place-order";
import { ShoppingCart } from "@features/cart/shopping-cart";

export default async function Cart() {
  return (
    <div className="grid lg:grid-cols-6 gap-6 flex-1">
      <ShoppingCart />
      <PlaceOrder />
    </div>
  );
}
