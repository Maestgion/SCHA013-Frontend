import React from "react";
import { Helmet } from "react-helmet";
import HomeComp from "../components/Home/home.comp";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>SRM HUB | Home</title>
      </Helmet>
      <HomeComp />
    </>
  );
}

export default HomePage;
