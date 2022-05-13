import Navbar from "../../components/Navbar";
import "antd/dist/antd.css";
import { Carousel } from "antd";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Carousel autoplay autoplaySpeed={3000}>
        <div>
          <img
            src="/assets/images/img1.jpeg"
            style={{ width: "100vw", height: "60vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/img2.jpeg"
            style={{ width: "100vw", height: "60vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/img3.jpeg"
            style={{ width: "100vw", height: "60vh" }}
          />
        </div>
        <div>
          <img
            src="/assets/images/img4.jpeg"
            style={{ width: "100vw", height: "60vh" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
