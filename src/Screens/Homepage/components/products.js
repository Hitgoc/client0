import { Container } from "@mui/material";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Modal from "react-responsive-modal";
import { productsContent } from "./productContent/productsContent";

const Products = () => {
  const productDimension = {
    width: 420,
    height: 400,
  };

  const products = [
    {
      src: "/assets/products/rajniGandha.jpg",
      width: productDimension.width,
      height: productDimension.height,
    },
    {
      src: "/assets/products/kewdha.jpg",
      width: productDimension.width,
      height: productDimension.height,
    },
    {
      src: "/assets/products/gulabJal.jpg",
      width: productDimension.width,
      height: productDimension.height,
    },
    {
      src: "/assets/products/attarOil.jpg",
      width: productDimension.width,
      height: productDimension.height,
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

    const imgSrc = e.target.src;

    const imgName = imgSrc.split("products/")[1];

    if (imgName === "rajniGandha.jpg") {
      setShowRajniGandhaContent(true);
      setShowAttarOilContent(false);
      setShowGulabJalContent(false);
      setShowKewdhaContent(false);
    }

    if (imgName === "attarOil.jpg") {
      setShowAttarOilContent(true);
      setShowRajniGandhaContent(false);
      setShowGulabJalContent(false);
      setShowKewdhaContent(false);
    }

    if (imgName === "kewdha.jpg") {
      setShowKewdhaContent(true);
      setShowAttarOilContent(false);
      setShowGulabJalContent(false);
      setShowRajniGandhaContent(false);
    }

    if (imgName === "gulabJal.jpg") {
      setShowGulabJalContent(true);
      setShowAttarOilContent(false);
      setShowKewdhaContent(false);
      setShowRajniGandhaContent(false);
    }
  };

  const modalRef = useRef(null);

  return (
    <div>
      <Container>
        <div>
          <div id="productLL" />
          <p
            id="productsHeading"
            className="text-center mt-4 mb-4"
            style={{ color: "red", fontSize: "70px", fontFamily: "cursive" }}
          >
            Products
          </p>
          <div id="productRL" />
        </div>

        <MDBCard
          id="photoAlbumCard"
          style={{
            backgroundColor: "#FF4F4F",
          }}
        >
          <MDBCardBody>
            <PhotoAlbum
              layout="rows"
              onClick={productClicked}
              photos={products}
            />
          </MDBCardBody>
        </MDBCard>

        <Modal
          blockScroll={false}
          onClose={closeModal}
          open={modalOpen}
          center
          ref={modalRef.current}
        >
          <p>
            <div id="productContentContainer">
              {showRajniGandhaContent && (
                <MDBCard id="productContentCard">
                  <MDBCardBody>
                    <p className="h4">{productsContent.rajniGandha}</p>
                  </MDBCardBody>
                </MDBCard>
              )}

              {showAttarOilContent && (
                <MDBCard id="productContentCard">
                  <MDBCardBody>
                    <p className="h4">{productsContent.attarOil}</p>
                  </MDBCardBody>
                </MDBCard>
              )}

              {showKewdhaContent && (
                <MDBCard id="productContentCard">
                  <MDBCardBody>
                    <p className="h4">{productsContent.kewdha}</p>
                  </MDBCardBody>
                </MDBCard>
              )}

              {showGulabJalContent && (
                <MDBCard id="productContentCard">
                  <MDBCardBody>
                    <p className="h4">{productsContent.gulabJal}</p>
                  </MDBCardBody>
                </MDBCard>
              )}
            </div>
          </p>
        </Modal>
      </Container>
    </div>
  );
};

export default Products;
