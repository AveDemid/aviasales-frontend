import React from "react";
import { Redirect } from "react-router-dom";

export const routes = () => [
  {
    component: () => <Redirect to="/" />
  }
];
