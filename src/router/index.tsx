import Home from "../pages/Home/Home";
import Reservation from "../pages/Reservation/Reservation";

export const RouteNames = {
  HOME: "/",
  RESERVATION: "/api/reservation/check",
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
