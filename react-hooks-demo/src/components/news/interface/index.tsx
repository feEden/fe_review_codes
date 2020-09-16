import { Dispatch } from "react";

export type tabType = {
  key: string;
  label: string;
};

export type stateType = {
    tabs: Array<tabType>,
    onIncrementUnReadMessNum: (key: string) => any,
}

export type Injected = {
  unReadHome: number,
  setUnReadHome: Dispatch<any>,
  unReadHot: number,
  setUnReadHot: Dispatch<any>,
};

