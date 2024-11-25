import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import bunbun from "./../../dreadericon.png";
import ComicReader from "./comics/ComicReader.js";
import Carousel from "react-bootstrap/Carousel";  // Import the Carousel component

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Project Card */}
      <Card className="project-card-view" onClick={handleShow} style={{ cursor: "pointer", maxWidth: "350px", margin: "auto" }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title style={{margin:0, fontSize:"1.8rem"}}>{props.title}</Card.Title>
          <Card.Title style={{color:"#ffa600", margin:0, fontSize:"1rem"}}>{props.info}</Card.Title>
        </Card.Body>
      </Card>

      {/* Fullscreen Dark Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        centered 
        size="xl" // Makes the modal larger
        fullscreen="true"
        dialogClassName="dark-modal" // Custom class for styling
      >
        <Modal.Header style={{ backgroundColor: "#000", borderBottom: "1px solid #444" }}>
          <Modal.Title style={{ color: "#fff" }}>{props.titlelong}</Modal.Title>
          <button 
            type="button" 
            className="btn-close" 
            aria-label="Close" 
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              zIndex: 1050,
              backgroundColor: "rgb(253, 166, 15)",
              border: "none",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </Modal.Header>

        <Modal.Body style={{ padding: "2rem" }}>
{/* Render Carousel if modalImage array is provided and not the same as imgPath */}
{Array.isArray(props.modalImage) ? (
            <Carousel interval={1000}>
              {props.modalImage.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image} // Use images from modalImage array
                    alt={`Slide ${index + 1}`}
                    className="img-fluid mb-3"
                    style={{ borderRadius: "8px", maxWidth: "100%" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            // Fallback to single modalImage if no array is provided
            <img 
              src={props.modalImage || props.imgPath} 
              alt={props.title} 
              className="img-fluid mb-3"
              style={{ borderRadius: "8px", maxWidth: "100%" }} 
            />
          )}
<div style={{ maxWidth: "600px", margin: "auto" }}>
  <p style={{ margin: "5px 0 2px 0" }}><strong></strong> {props.description}</p>
  <p style={{ margin: "10px 0 2px 0" }}><strong>Pages:</strong> {props.pages}</p>
  <p style={{ margin: "5px 0" }}><strong>Year:</strong> {props.year}</p>
</div>

          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom:"30px", marginTop:"20px" }}>
          <Button className="buttonBig" variant="primary" href={props.demoLink} target="_blank">
    <img src={bunbun} className="dreader" alt="dreader" /> &nbsp;
    {props.button}
  </Button>
  </div>
          <ComicReader pages={props.pageimages}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
