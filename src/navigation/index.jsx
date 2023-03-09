import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../constants/route";
import HomePage from "../pages/home.page";

function Navigation({ isLoggedIn, onBoarding }) {
  console.log("onBoarding", onBoarding);

  return (
    <Router>
      {onBoarding ? (
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      ) : (
        <Routes>
          {isLoggedIn &&
            PRIVATE_ROUTES.map((route) => (
              <Route
                path={route.path}
                element={route.component}
                key={route.path}
              />
            ))}
          {!isLoggedIn &&
            PUBLIC_ROUTES.map((route) => {
              console.log("route", route);
              return (
                <Route
                  path={route.path}
                  element={route.component}
                  key={route.path}
                />
              );
            })}
          {isLoggedIn && <Route path="*" element={<Navigate to="/" />} />}
          {!isLoggedIn && <Route path="*" element={<Navigate to="/login" />} />}
        </Routes>
      )}
    </Router>
  );
}

export default Navigation;
