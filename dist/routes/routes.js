"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const events_route_1 = require("../modules/events/events.route");
const recentEvents_route_1 = require("../modules/recentEvents/recentEvents.route");
const services_route_1 = require("../modules/services/services.route");
const routes = (0, express_1.Router)();
const applicationRoutes = [
    { path: "/api/v1", route: events_route_1.EventsRouter },
    { path: "/api/v1", route: recentEvents_route_1.RecentEventRouter },
    {
        path: '/api/v1', route: services_route_1.EventServices
    }
];
applicationRoutes.forEach((route) => routes.use(route.path, route.route));
exports.default = routes;
