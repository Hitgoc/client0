import React from "react";
import Head from "next/dist/shared/lib/head";
import AboutPage from "../src/Screens/AboutPage";
import Navbar from "../src/components/Navbar";

function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <AboutPage />
    </div>
  );
}

export default about;
