import React from "react";
import Home from "@view/pages/Home/index";

export const privateRouter: Array<object> = [
  {
    path: "/",
    exact: true,
    permissionCode: "ALLOW",
    main: () => <Home />,
  },
];
