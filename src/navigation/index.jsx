import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import StudentOnboarding from "../components/onboarding/studentOnboarding";
import ClubOnboarding from "../components/onboarding/clubOnboarding";
import FacultyOnboarding from "../components/onboarding/facultyOnboarding";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../constants/route";

function Navigation({ isLoggedIn, onBoarding, user }) {
  console.log("onBoarding", onBoarding);

  return (
    <Router>
      {onBoarding ? (
        <Routes>
          {user?.userType === "club" && (
            <Route path="*" element={<ClubOnboarding />} />
          )}
          {user?.userType === "faculty" && (
            <Route path="*" element={<FacultyOnboarding />} />
          )}
          {user?.userType === "student" && (
            <Route path="*" element={<StudentOnboarding />} />
          )}
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
          {isLoggedIn && <Route path="*" element={<Navigate to="/dashboard" />} />}
          {!isLoggedIn && <Route path="*" element={<Navigate to="/login" />} />}
        </Routes>
      )}
    </Router>
  );
}

export default Navigation;
