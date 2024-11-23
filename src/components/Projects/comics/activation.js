import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../style.css";
import ComicReader from "./ComicReader.js";

function Activation() {

  return (
    <Container className="hash-section">
      <Row>
        <Col className="hash-body">
          <h1 style={{ fontSize: "2.6em", color: "rgba(253, 166, 15, 0.959)" }}>
            Activation
          </h1>
          <p className="hash-description">
            Comic pre-view
        </p>
          <ComicReader pages={Pages} />
          <br />

        </Col>
      </Row>
    </Container>
  );
}

export default Activation;