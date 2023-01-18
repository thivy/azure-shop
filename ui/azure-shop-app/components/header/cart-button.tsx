"use client";

import { useShopContext } from "@features/shop/shop-context";
import { FC } from "react";
import { HeaderButton } from "./header-button";

interface IProp {
  href: string;
  icon: string;
  name: string;
}

export const CartButton: FC<IProp> = (props: IProp) => {
  const context = useShopContext();
  return <HeaderButton {...props}>{context.counter}</HeaderButton>;
};
