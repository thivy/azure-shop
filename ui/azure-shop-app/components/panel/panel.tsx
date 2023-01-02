import { FC } from "react";

interface IProp {
  className?: string;
  children?: React.ReactNode;
}

export const Panel: FC<IProp> = (props) => {
  return (
    <div
      className={`bg-slate-800/50 rounded-xl p-9 ring-1 ring-inset ring-white/5  ${props.className}`}
    >
      {props.children}
    </div>
  );
};
