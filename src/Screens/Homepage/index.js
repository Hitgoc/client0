import Navbar from "../../components/Navbar";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import Products from "./components/products";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#E2DEAE" }}>
      <Navbar />

      <Carousel autoplay autoplaySpeed={3000}>
        <div>
          <img
            src="/assets/images/i1.jpg"
            style={{ width: "100vw", height: "120vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i2.jpg"
            style={{ width: "100vw", height: "120vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i4.jpg"
            style={{ width: "100vw", height: "120vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/i3.jpg"
            style={{ width: "100vw", height: "120vh" }}
          />
        </div>
      </Carousel>
      {/* Products */}

      <Products />
    </div>
  );
};

export default HomePage;
