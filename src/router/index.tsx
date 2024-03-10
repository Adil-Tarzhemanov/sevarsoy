import Home from "../pages/Home/Home";
import Reservation from "../pages/Reservation/Reservation";

export const RouteNames = {
  HOME: "/api",
  RESERVATION: "/",
};

export const publicRoutes = [
  {
    path: RouteNames.HOME,
    element: Home,
  },
  {
    path: RouteNames.RESERVATION,
    element: Reservation,
  },
];
