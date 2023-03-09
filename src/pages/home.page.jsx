import React from "react";
import { Helmet } from "react-helmet";
import FacultyComp from "../components/faculty/faculty.comp";
import StudentComp from "../components/student/student.comp";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | Home</title>
      </Helmet>
      <StudentComp />
      <FacultyComp />
    </>
  );
}

export default HomePage;
