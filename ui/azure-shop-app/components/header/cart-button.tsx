"use client";

import Image from "next/image";
import { FC } from "react";
import { usePathname } from "next/navigation";
import { useShopContext } from "app/shop/shop-context";
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
