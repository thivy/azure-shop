import Image from "next/image";
import Link from "next/link";
import { HeaderButton } from ".";
import { CartButton } from "./cart-button";

export const Header = () => {
  return (
    <div className="py-8 flex justify-between">
      <div className="flex gap-3">
        <HeaderButton href="/" icon="/azure.svg" name="Home" />
        <HeaderButton href="/shop" icon="/store.svg" name="Shop" />
      </div>

      <CartButton href="/cart" icon="./shopping-bag.svg" name="" />
    </div>
  );
};
