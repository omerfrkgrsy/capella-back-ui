import { lazy } from "react";
import Dashboard from "../views/pages/Dashboard";
import Login from "../views/pages/Login";
import UserManagement from "../views/pages/UserManagement";

const AppRoutes = [
  {
    path: "login",
    component: <Login/>,
    exact: true,
    guard: false,
  },
  {
    path: "",
    component: <Dashboard/>,
    exact: true,
    guard: true,
  },

  {
    path: "user-management",
    component: <UserManagement/>,
    exact: true,
    guard: true,
  },
];

export default AppRoutes;
