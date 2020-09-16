import React, { ReactElement, useState } from "react";

import { context } from "./index";

type propsType = {
  children: ReactElement;
};

export default function NewsProvider({ children }: propsType) {
  const [unReadHome, setUnReadHome] = useState<number>(0);
  const [unReadHot, setUnReadHot] = useState<number>(0);

  return (
    <context.Provider
      value={{
        unReadHome,
        unReadHot,
        setUnReadHome,
        setUnReadHot,
      }}
    >
      {children}
    </context.Provider>
  );
}
