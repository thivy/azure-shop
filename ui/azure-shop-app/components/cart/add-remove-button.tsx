import { uiDebug } from "@features/settings";
import { FC } from "react";
import { Button } from "../button/button";

interface IProp {
  add: () => void;
  remove: () => void;
  value: number;
}

export const AddRemoveButton: FC<IProp> = (props) => {
  return (
    <div className={`flex gap-4 items-center ${uiDebug(true)}`}>
      <Button onClick={props.remove}>-</Button>
      {props.value}
      <Button onClick={props.add}>+</Button>
    </div>
  );
};
