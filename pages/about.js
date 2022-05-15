import React from "react";
import Head from "next/dist/shared/lib/head";
import AboutPage from "../src/Screens/AboutPage";

function about() {

  
  return (
    <div>
      <Head>
      <title>About</title>
      <AboutPage/>

      </Head>
      
    </div>
  );
}

export default about;
