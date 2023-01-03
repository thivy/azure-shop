"use client";

import React from "react";
import { IProduct } from "./product/product-models";

interface IcartItem {
  prodct: IProduct;
  quantity: number;
}

interface IShopContext {
  cart: Array<IcartItem>;
  addToCart: (item: IcartItem) => void;
  removeFromCart: (item: IcartItem) => void;
  productCount: (productId: string) => number;
  counter: number;
}

const ShopContext = React.createContext<IShopContext | null>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCartItems] = React.useState<IcartItem[]>([]);
  const [counter, setCounter] = React.useState(0);

  const addToCart = (cartItem: IcartItem) => {
    const items = [...cart];
    const existingItem = items.find((i) => i.prodct.id === cartItem.prodct.id);

    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...items]);
    } else {
      setCartItems([...cart, cartItem]);
    }

    setCounter(counter + 1);
  };

  const removeFromCart = (cartItem: IcartItem) => {
    const items = [...cart];
    const existingItem = items.find((i) => i.prodct.id === cartItem.prodct.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const index = items.indexOf(existingItem);
        items.splice(index, 1);
      }
      existingItem.quantity -= 1;
      setCartItems([...items]);
      setCounter(counter - 1);
    }
  };

  const productCount = (productId: string) => {
    const items = [...cart];
    const existingItem = items.find((i) => i.prodct.id === productId);

    if (existingItem) {
      return existingItem.quantity;
    }

    return 0;
  };

  return (
    <ShopContext.Provider
      value={{ cart, addToCart, counter, removeFromCart, productCount }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShopContext() {
  const context = React.useContext(ShopContext);
  if (context === null) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}