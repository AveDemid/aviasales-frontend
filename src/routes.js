import { renderRoutes } from "react-router-config";
import { ticketsRoutes } from "@features/tickets";

const routes = [...ticketsRoutes()];

export const rootRoutes = () => renderRoutes(routes);
