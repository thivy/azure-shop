import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface IProp {
  href: string;
  icon: string;
  name: string;
  selected?: boolean;
}

export const HeaderButton: FC<IProp> = (props: IProp) => {
  return (
    <Link
      className={`px-4 h-10 rounded-full flex items-center gap-x-3 hover:bg-slate-800/90 transition  ${
        props.selected ? "bg-black/10 border border-slate-800 " : ""
      }}`}
      href={props.href}
    >
      <Image src={props.icon} alt={props.name} width={22} height={22} />
      {props.name}
    </Link>
  );
};
