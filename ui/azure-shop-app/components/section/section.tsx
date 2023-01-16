import { FC } from "react";

interface IProp {
  children?: React.ReactNode;
}

export const Section: FC<IProp> = (props: IProp) => {
  return <div className="my-36">{props.children}</div>;
};

export const HeadingSection: FC<IProp> = (props: IProp) => {
  return <div className="my-20">{props.children}</div>;
};
