import Home from "../pages/Home/Home";

export const RouteNames={
    HOME: '/',
}

export const publicRoutes =[
    {
        path:RouteNames.HOME,
        element: Home,
    },
]