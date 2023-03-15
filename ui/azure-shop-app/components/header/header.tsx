import { uiDebug } from "@features/settings";
import { HeaderButton } from ".";
import { CartButton } from "./cart-button";

export const Header = () => {
  return (
    <div className={`py-8 flex justify-between ${uiDebug(false)}`}>
      <div className="flex gap-3">
        <HeaderButton href="/" icon="/azure.svg" name="Home" />
        <HeaderButton href="/shop" icon="/store.svg" name="Shop" />
        <HeaderButton href="/demo" icon="/demo.svg" name="Demo" />
      </div>

      <CartButton href="/cart" icon="/shopping-bag.svg" name="" />
    </div>
  );
};
