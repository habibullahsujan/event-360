import { Router } from "express";
import { EventsRouter } from "../modules/events/events.route";
import { RecentEventRouter } from "../modules/recentEvents/recentEvents.route";
import { EventServices } from "../modules/services/services.route";

const routes = Router();
const applicationRoutes = [
  { path: "/api/v1", route: EventsRouter },
  { path: "/api/v1", route: RecentEventRouter },
  {
    path:'/api/v1',route:EventServices
  }
];

applicationRoutes.forEach((route) => routes.use(route.path, route.route));

export default routes;
