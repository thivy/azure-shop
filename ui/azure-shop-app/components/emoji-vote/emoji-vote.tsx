"use client";

import { IVote } from "@features/shop/services/models";
import { FC, useState } from "react";

interface IProp {
  count: number;
  emoji: string;
  onClick?: () => void;
}

export const EmojiVote: FC<IProp> = (props) => {
  const product: IVote = {
    product: "",
    vote: props.emoji,
  };

  const [count, setCount] = useState(props.count);

  const onVote = () => {
    // const data = await voteForProduct(product);
    setCount((e) => e + 1); // update the count
  };

  return (
    <button
      onClick={() => onVote()}
      className="p-2 hover:bg-slate-400/25 rounded-md flex gap-2 bg-slate-400/10 px-3"
    >
      <span>{count}</span> <span>{props.emoji}</span>
    </button>
  );
};
