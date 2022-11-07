import { Routes, Route } from "react-router-dom";
import routes from "./AppRoutes"; // Route list
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { React, Suspense } from "react";
/* import Loader from 'sharedComponent/Loader'; */

const AppRoutes = ({ isAuthenticated }) => (
  <Routes>
    <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
      {routes
        .filter((x) => x.guard === true)
        .map(({ component: Component, path, exact }) => (
          
            <Route
              path={`/${path}`}
              element={<Component />}
              key={path}
              exact={exact}
            ></Route>
        ))}
    </Route>
    <Route path="" element={<PublicRoute isAuthenticated={isAuthenticated} />}>
      {routes
        .filter((x) => x.guard === false)
        .map(({ component: Component, path, exact }) => (
          
            <Route
              path={`/${path}`}
              element={<Component />}
              key={path}
              exact={exact}
            ></Route>
        ))}
    </Route>
  </Routes>
);

export default AppRoutes;
