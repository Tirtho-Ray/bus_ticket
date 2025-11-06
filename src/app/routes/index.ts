import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { RouteRoutes } from '../modules/route/route.routes';
import { BusRoutes } from '../modules/bus/bus.routes';
import { BookingRoutes } from '../modules/booking/booking.routes';


const routes = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/route',
    route: RouteRoutes,
  },
  {
    path: '/bus',
    route: BusRoutes,
  },
  {
    path: '/booking',
    route: BookingRoutes,
  },
  {
    path: '/booking',
    route: BookingRoutes,
  },
];

moduleRoutes.forEach((route) => routes.use(route.path, route.route));
export default routes;
