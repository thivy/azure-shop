import { HeadingSection } from "@/components/section/section";
import { CartItems } from "./cart-items";

export const revalidate = 10;

export default async function Cart() {
  return (
    <div>
      <HeadingSection>
        <h3 className="display-3 col-span-4">Order details</h3>
      </HeadingSection>
      <div className="flex">
        <CartItems />
      </div>
    </div>
  );
}
