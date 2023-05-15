"use client";
import { FC } from "react";

interface IProp {
  count: number;
  emoji: string;
  productId: string;
  onClick?: (productId: string, emoji: string) => void;
}

export const EmojiVote: FC<IProp> = (props) => {
  const onVote = () => {
    props.onClick?.(props.productId, props.emoji);
  };

  return (
    <button
      value={props.emoji}
      onClick={() => onVote()}
      className={`p-2 hover:bg-slate-400/25 rounded-md flex gap-2 bg-slate-400/10 px-3 `}
    >
      <span>{props.count}</span> <span>{props.emoji}</span>
    </button>
  );
};
