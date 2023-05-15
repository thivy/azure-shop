"use client";

import { uiDebug } from "@features/settings";
import { FC, useState } from "react";

interface IProp {
  count: number;
  emoji: string;
  onClick?: (emoji: string) => void;
}

export const EmojiVote: FC<IProp> = (props) => {
  const [count, setCount] = useState(props.count);

  const onVote = async () => {
    props.onClick?.(props.emoji);
  };

  return (
    <button
      onClick={() => onVote()}
      className={`p-2 hover:bg-slate-400/25 rounded-md flex gap-2 bg-slate-400/10 px-3 ${uiDebug(
        true
      )}`}
    >
      <span>{count}</span> <span>{props.emoji}</span>
    </button>
  );
};
