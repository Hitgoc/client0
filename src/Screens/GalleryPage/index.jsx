import React from "react";
import Gallery from "react-grid-gallery";

function GalleryPage() {
  const IMAGES = [
    {
      src: "/assets/1.jpg",
      thumbnail: "/assets/1.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 180,
      //   isSelected: true,
      //   caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ];

  return (
    <div style={{ backgroundColor: "red" }}>
      <h2>Gallery</h2>
      <Gallery rowHeight={350} rowWidth={400} images={IMAGES} />
    </div>
  );
}

export default GalleryPage;
