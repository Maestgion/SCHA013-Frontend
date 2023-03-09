import React from "react";
import { Helmet } from "react-helmet";
import FacultyOnboarding from "../components/onboarding/facultyOnboarding";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | Home</title>
      </Helmet>
      <FacultyOnboarding />
    </>
  );
}

export default HomePage;
