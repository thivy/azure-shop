import { CartItems } from "./cart-items";

export const revalidate = 10;

export default async function Cart() {
  return (
    <div className="flex">
      <CartItems />
    </div>
  );
}
