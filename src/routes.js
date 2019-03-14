import React from "react";
import { renderRoutes } from "react-router-config";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <div />
  }
];

export const rootRoutes = () => renderRoutes(routes);
