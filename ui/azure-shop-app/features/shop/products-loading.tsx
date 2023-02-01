import { Panel } from "@components/panel";
import { FC } from "react";

export const ProudctsLoading: FC = () => {
  return (
    <div className="grid lg:grid-cols-4 my-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
    </div>
  );
};
