import React from "react";
import { Helmet } from "react-helmet";
import LoginComp from "../components/login/login.comp";

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
