import React from "react";
import { Helmet } from "react-helmet";
import ClubDashComp from "../components/club/dashboard.comp";
import DeptDashComp from "../components/dept/dashboard.comp";
import FacultyProjectsComp from "../components/faculty/projects.comp";
import LoginComp from "../components/login/login.comp";
import Onboarding from "../components/onboarding/clubOnboarding";

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | login</title>
      </Helmet>
      {/* <FacultyProjectsComp /> */}
      {/* <ClubDashComp /> */}
      <LoginComp />
    </>
  );
}

export default LoginPage;
