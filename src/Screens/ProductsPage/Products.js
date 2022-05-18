import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-responsive-modal/styles.css";
import { Container } from "@mui/material";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useRef, useState } from "react";
import Modal from "react-responsive-modal";
import { productsContent } from "./content";
import Gallery from "react-grid-gallery";

const Products = () => {
  const productDimension = {
    width: 420,
    height: 400,
    galleryHeight: 320,
  };

  const IMAGES = [
    {
      src: "/assets/products/rajniGandha.jpg",
      thumbnail: "/assets/products/rajniGandha.jpg",
      thumbnailWidth: productDimension.width,
      thumbnailHeight: productDimension.height,
      caption: productsContent.rajniGandha,
    },
    {
      src: "/assets/products/kewdha.jpg",
      thumbnail: "/assets/products/kewdha.jpg",
      thumbnailWidth: productDimension.width,
      thumbnailHeight: productDimension.height,
      caption: productsContent.kewdha,
    },

    {
      src: "/assets/products/gulabJal.jpg",
      thumbnail: "/assets/products/gulabJal.jpg",
      thumbnailWidth: productDimension.width,
      thumbnailHeight: productDimension.height,
      caption: productsContent.gulabJal,
    },
    {
      src: "/assets/products/attarOil.jpg",
      thumbnail: "/assets/products/attarOil.jpg",
      thumbnailWidth: productDimension.width,
      thumbnailHeight: productDimension.height,
      caption: productsContent.attarOil,
    },
  ];

  const [showRajniGandhaContent, setShowRajniGandhaContent] = useState();
  const [showAttarOilContent, setShowAttarOilContent] = useState();
  const [showGulabJalContent, setShowGulabJalContent] = useState();
  const [showKewdhaContent, setShowKewdhaContent] = useState();

  const [modalOpen, setModalOpen] = useState();

  const closeModal = () => {
    setModalOpen(false);
  };

  const productClicked = (e) => {
    setModalOpen(true);

    console.log(e);

    /*const imgSrc = e.target.src;

    const imgName = imgSrc.split("products/")[1];*/

    if (e === 0) {
      setShowRajniGandhaContent(true);
      setShowAttarOilContent(false);
      setShowGulabJalContent(false);
      setShowKewdhaContent(false);
    }

    if (e === 1) {
      setShowAttarOilContent(true);
      setShowRajniGandhaContent(false);
      setShowGulabJalContent(false);
      setShowKewdhaContent(false);
    }

    if (e === 2) {
      setShowKewdhaContent(true);
      setShowAttarOilContent(false);
      setShowGulabJalContent(false);
      setShowRajniGandhaContent(false);
    }

    if (e === 3) {
      setShowGulabJalContent(true);
      setShowAttarOilContent(false);
      setShowKewdhaContent(false);
      setShowRajniGandhaContent(false);
    }
  };

  const modalRef = useRef(null);

  return (
    <div>
      <Container style={{ marginTop: 100 }}>
        <div style={{ width: "100%" }}>
          <div
            id="productsHeading"
            className="text-center mt-4 mb-4"
            style={{
              color: "#DE3163",
              fontSize: "70px",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Products
          </div>
          <hr style={{ border: "0.5px solid #DE3163" }} />
        </div>

        <MDBCard
          id="photoAlbumCard"
          style={{
            backgroundColor: "#DE3163",
          }}
        >
          <MDBCardBody>
            <Gallery
              rowHeight={productDimension.galleryHeight}
              onClickThumbnail={productClicked}
              images={IMAGES}
            />
          </MDBCardBody>
        </MDBCard>

        {modalOpen && (
          <Modal
            onClose={closeModal}
            open={modalOpen}
            center
            ref={modalRef.current}
          >
            {modalOpen && (
              <div id="productContentContainer">
                {showRajniGandhaContent && (
                  <div id="productContentCard">
                    <p className="h4">{productsContent.rajniGandha}</p>
                  </div>
                )}

                {showAttarOilContent && (
                  <div id="productContentCard">
                    <p className="h4">{productsContent.attarOil}</p>
                  </div>
                )}

                {showKewdhaContent && (
                  <div id="productContentCard">
                    <p className="h4">{productsContent.kewdha}</p>
                  </div>
                )}

                {showGulabJalContent && (
                  <div id="productContentCard">
                    <p className="h4">{productsContent.gulabJal}</p>
                  </div>
                )}
              </div>
            )}
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default Products;
