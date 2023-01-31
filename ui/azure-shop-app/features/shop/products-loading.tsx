import { Panel } from "@components/panel";
import { FC } from "react";

export const ProudctsLoading: FC = () => {
  return (
    <>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
      <Panel className="min-h-[400px] animate-pulse"></Panel>
    </>
  );
};
