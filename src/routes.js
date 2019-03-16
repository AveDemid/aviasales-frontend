import { renderRoutes } from "react-router-config";
import { ticketsRoutes } from "@features/tickets";
import { commonRoutes } from "@features/common";

const routes = [...ticketsRoutes(), ...commonRoutes()];

export const rootRoutes = () => renderRoutes(routes);
