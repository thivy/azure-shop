"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface IProp {
  href: string;
  icon: string;
  name: string;
  children?: React.ReactNode;
  refresh?: boolean;
}

export const HeaderButton: FC<IProp> = (props: IProp) => {
  const pathname = usePathname();

  const isSelected = pathname === props.href;

  return (
    <Link
      className={`py-2 px-4 rounded-full flex items-center gap-x-3 hover:bg-slate-800/90 transition  ${
        isSelected ? "bg-black/10 border border-slate-800 " : ""
      }}`}
      href={props.href}
    >
      <Image src={props.icon} alt={props.name} width={26} height={26} />
      {props.name}
      {props.children}
    </Link>
  );
};
