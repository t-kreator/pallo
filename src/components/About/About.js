import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Aboutcard from "./AboutCard";
import AboutPyromon from "./AboutPyromon";
import pyromon from "../../Assets/pyromon.webp";
import tk from "../../Assets/tk.webp";

function About() {
  return (
    <Container>
     <Container className="quote-card-view" style={{ marginTop: "100px" }}>
  <Col className="creators">
    <h1 >
      <strong>Creators</strong>
    </h1>
    <blockquote className="blockquote mb-0">
      <p >
      We’re a bold two-person indie studio and pioneers in the comic industry. We’ve created Finland’s first on-chain comic series!
      Our focus is clear: to bring high-quality comics to an international audience and redefine the comic industry for the modern era.
      </p>
      <p >
      As an experimental team with strong technological backgrounds in the game industry, we push boundaries, 
      explore new possibilities, and create stories the world has never seen before.
      </p>
      <p >
        Based in Oulu, Finland, we’re ready to make our mark.
      </p>
    </blockquote>
  </Col>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            <h1 style={{ fontSize: "1.5em", paddingBottom: "0px" }}>
            Threat Kreator
            </h1>
            <p style={{ color: "rgb(155 126 172)" }}>
            Outcast who creates comics, games and art.
          </p>
            <Aboutcard />
            <Button className="buttonBig"  variant="primary" href="https://threatkreator.com/" target="_blank">
          {"Portfolio"}
        </Button>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={tk} alt="about" className="img-fluid" style={{width:"150px"}} />
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
            <h1 style={{ fontSize: "1.5em", paddingBottom: "0px" }}>
            Pyromon
            </h1>
            <p style={{ color: "rgb(155 126 172)" }}>
           In the middle of a forest, creating a lasting cultural legacy.
          </p>
            <AboutPyromon/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            className="about-img"
          >
            <img src={pyromon} alt="about" className="img-fluid"  style={{width:"150px"}}/>
          </Col>
        </Row>
      </Container>
      </Container>
  );
}

export default About;
