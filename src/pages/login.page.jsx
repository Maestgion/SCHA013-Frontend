import React from "react";
import { Helmet } from "react-helmet";
import AnnouncementComp from "../components/dept/announcement.comp";
import DeptDashComp from "../components/dept/dashboard.comp";
import FacultiesComp from "../components/dept/faculties.comp";
import ProjectReqComp from "../components/dept/projectreq.comp";

function LoginPage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | login</title>
      </Helmet>
      <DeptDashComp />
      <FacultiesComp />
    </>
  );
}

export default LoginPage;
