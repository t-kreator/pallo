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
      <Container className="quote-card-view" style={{marginTop:"100px"}}>
       <Col md={7} className="quote-card-view"
                   style={{
                    padding: "26px",
                  }}>
            <h1 style={{ fontSize: "2.6em" }}>
            <strong className="purple">CREATORS</strong>
            </h1>
            <blockquote className="blockquote mb-0">
      <p style={{paddingBottom:"50px", paddingTop:"20px", textAlign: "justify",fontSize: "0.9em" }}>
      We are a two-person comic studio located in Oulu, Finland. 
      </p>
      </blockquote>
      </Col>
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
           In the middle of a forest, creating a lasting cultural legacy.
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
