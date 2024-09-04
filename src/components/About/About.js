import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Aboutcard from "./AboutCard";
import AboutPyromon from "./AboutPyromon";
import pyromon from "../../Assets/pyromon.webp";
import tk from "../../Assets/tk.webp";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
            Threat Kreator
            </h1>
            <p style={{ color: "rgb(155 126 172)" }}>
            Outcast who creates comics, games and art.
          </p>
            <Aboutcard />
            <Button variant="primary" href="https://threatkreator.com/" target="_blank">
          {"Portfolio"}
        </Button>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "100px" }}
            className="about-img"
          >
            <img src={tk} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "0px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
            Pyromon
            </h1>
            <p style={{ color: "rgb(155 126 172)" }}>
            Creating a lasting cultural legacy in the middle of a forest.
          </p>
            <AboutPyromon/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="about-img"
          >
            <img src={pyromon} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
