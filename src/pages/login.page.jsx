import React from "react";
import { Helmet } from "react-helmet";
import LoginComp from "../components/login/login.comp";
import Onboarding from "../components/onboarding/onboarding";

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | login</title>
      </Helmet>
      <LoginComp />
    </>
  );
}

export default LoginPage;
