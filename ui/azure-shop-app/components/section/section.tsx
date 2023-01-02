import { FC } from "react";

interface IProp {
  children?: React.ReactNode;
}

export const Section: FC<IProp> = (props: IProp) => {
  return <div className="my-36">{props.children}</div>;
};
