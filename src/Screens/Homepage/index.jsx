import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import ContactUs from "../../components/ContactUs";

const Homepage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginBottom: 30 }}>
      <Navbar />
      <Carousel style={{ marginTop: 56 }} autoplay autoplaySpeed={3000}>
        <div>
          <img
            src="/assets/images/i1.jpg"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i2.jpg"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i4.jpg"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i3.jpg"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Homepage;
