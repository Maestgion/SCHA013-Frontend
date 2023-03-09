import React from "react";
import { Helmet } from "react-helmet";
import SignupComp from "../components/signup/signup.comp";

function SignupPage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | Sign Up</title>
      </Helmet>
      <SignupComp />
    </>
  );
}

export default SignupPage;
