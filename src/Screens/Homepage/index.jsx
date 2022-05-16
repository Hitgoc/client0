import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import ContactUs from "../../components/ContactUs";

const Homepage = (props) => {
  const [offset, setOffset] = useState(0);
  const [navColor, setNavColor] = useState("transparent");

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (offset > 60) {
      setNavColor("#121212");
    } else {
      setNavColor("transparent");
    }
  }, [offset]);

  return (
    <div>
      <Navbar navColor={navColor} />
      <Carousel autoplay autoplaySpeed={3000}>
        <div>
          <img
            src="/assets/images/i1.jpg"
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i2.jpg"
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i4.jpg"
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i3.jpg"
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>
      </Carousel>
      <ContactUs />
    </div>
  );
};

export default Homepage;
