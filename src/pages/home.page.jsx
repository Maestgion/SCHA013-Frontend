import React from "react";
import { Helmet } from "react-helmet";
import ClubStudentsComp from "../components/club/clubstudents.comp";
import FacultyDashboardComp from "../components/faculty/dashboard.comp";
import FacultyStudentsComp from "../components/faculty/fstudents.comp";
import FacultyProjectsComp from "../components/faculty/projects.comp";
import FacultyComp from "../components/faculty/projects.comp";
import FacultyResearchComp from "../components/faculty/research.comp";
import StudentComp from "../components/student/student.comp";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | Home</title>
      </Helmet>
      <ClubStudentsComp />
      <FacultyDashboardComp />
      <FacultyStudentsComp />
      <FacultyProjectsComp />
      <FacultyComp />
      <FacultyResearchComp />
      <StudentComp />
    </>
  );
}

export default HomePage;
