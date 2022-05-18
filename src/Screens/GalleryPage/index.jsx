import { Copyright } from "@mui/icons-material";
import React from "react";
import Gallery from "react-grid-gallery";
import Navbar from "../../components/Navbar";

const GalleryPage = () => {
  const IMAGES = [
    {
      src: "/assets/images/i1.jpg",
      thumbnail: "/assets/images/i1.jpg",
      thumbnailWidth: 250,
      thumbnailHeight: 180,
    },
    {
      src: "/assets/images/i2.jpg",
      thumbnail: "/assets/images/i2.jpg",
      thumbnailWidth: 250,
      thumbnailHeight: 212,
    },

    {
      src: "/assets/images/i3.jpg",
      thumbnail: "/assets/images/i3.jpg",
      thumbnailWidth: 250,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i4.jpg",
      thumbnail: "/assets/images/i4.jpg",
      thumbnailWidth: 380,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i5.jpg",
      thumbnail: "/assets/images/i5.jpg",
      thumbnailWidth: 220,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i6.jpg",
      thumbnail: "/assets/images/i6.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i7.jpg",
      thumbnail: "/assets/images/i7.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 202,
    },
    {
      src: "/assets/images/i8.jpg",
      thumbnail: "/assets/images/i8.jpg",
      thumbnailWidth: 180,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i9.jpg",
      thumbnail: "/assets/images/i9.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i10.jpg",
      thumbnail: "/assets/images/i10.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i11.jpg",
      thumbnail: "/assets/images/i11.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i12.jpg",
      thumbnail: "/assets/images/i12.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i13.jpg",
      thumbnail: "/assets/images/i13.jpg",
      thumbnailWidth: 180,
      thumbnailHeight: 212,
    },
    {
      src: "/assets/images/i14.jpg",
      thumbnail: "/assets/images/i14.jpg",
      thumbnailWidth: 200,
      thumbnailHeight: 212,
    },
  ];

  return (
    //gallary
    <div>
      <Navbar />
      <div
        style={{
          fontSize: "45px",
          margin: "100px auto",
          width: "80%",
          textAlign: "center",
          fontWeight: "semi-bold",
          color: "#DE3163",
        }}
      >
        Gallery
        <hr style={{ border: "0.5px solid #DE3163" }} />
      </div>
      <Gallery rowHeight={350} rowWidth={400} images={IMAGES} />
    </div>
  );
};

export default GalleryPage;
