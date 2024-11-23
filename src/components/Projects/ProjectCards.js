import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import dreader from "../../Assets/dreader.png";
import ComicReader from "./comics/ComicReader.js";

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
          <Card.Title>{props.title}</Card.Title>
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
          <img 
            src={props.imgPath} 
            alt={props.title} 
            className="img-fluid mb-3" 
            style={{ borderRadius: "8px", maxWidth: "100%", loading:"lazy" }} 
          />
          <div style={{ maxWidth: "600px", margin: "auto" }}>
            <p><strong>Description:</strong> {props.description}</p>
            <p><strong>Pages:</strong> {props.pages}</p>
            <p><strong>Year:</strong> {props.year}</p>
          </div>
          <br/>
          <ComicReader pages={props.pageimages}/>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", justifyContent: "center", width: "100%" }}>
  <Button variant="primary" href={props.demoLink} target="_blank">
    <img src={dreader} className="dreader" alt="dreader" /> &nbsp;
    Read on dReader
  </Button>
</Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;
