import React, { useState, useContext, useEffect, useCallback } from "react";
import { Button } from "antd-mobile";

import { tabType } from "./interface";
import { context } from "./context";

import Setting from "./contentPages/setting";
import Home from "./contentPages/home";
import Hot from "./contentPages/hot";

export default function NewTabs() {
  const { unReadHot, unReadHome } = useContext(context);
  const [pageKey, setPageKey] = useState<string>("home");
  const [tabItems, setTabItems] = useState<Array<tabType>>([]);

  useEffect(() => {
    setTabItems([
      { key: "home", label: "首页" },
      { key: "hot", label: "热点" },
      { key: "setting", label: "设置" },
    ]);
  }, [unReadHome, unReadHot]);

  const tabClickHandler = useCallback((key) => setPageKey(key), []);

  console.log("=====");

  return (
    <div>
      <>
        {tabItems.map(({ label, key }) => (
          <Button inline key={key} onClick={() => tabClickHandler(key)}>
            {label}
          </Button>
        ))}
        {pageKey === "home" ? (
          <Home />
        ) : pageKey === "hot" ? (
          <Hot />
        ) : (
          <Setting />
        )}
      </>
    </div>
    // <Tabs
    //   tabs={tabItems}
    //   initialPage={0}
    //   onTabClick={ tabClickHandler }
    // >
    // </Tabs>
  );
}
