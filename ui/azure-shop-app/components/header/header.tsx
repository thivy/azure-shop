import Image from "next/image";
import Link from "next/link";
import { HeaderButton } from ".";

export const Header = () => {
  return (
    <div className="py-8 flex gap-3">
      <Image src="/azure.svg" alt="Azure Logo" width={30} height={30} />
      <HeaderButton href="" icon="/k8.svg" name="Azure" selected />
      <HeaderButton href="" icon="/azure.svg" name="Azure" selected />
      <HeaderButton href="" icon="/azure.svg" name="Azure" selected />
    </div>
  );
};
