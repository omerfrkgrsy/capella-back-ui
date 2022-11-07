import { lazy } from "react";

const AppRoutes = [
  {
    path: "login",
    component: lazy(() => import("../views/pages/Login")),
    exact: true,
    guard: false,
  },
  {
    path: "",
    component: lazy(() => import("../views/pages/Dashboard")),
    exact: true,
    guard: true,
  },

  {
    path: "user-management",
    component: lazy(() => import("../views/pages/UserManagement")),
    exact: true,
    guard: true,
  },
];

export default AppRoutes;
