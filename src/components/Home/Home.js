import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid="true" className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col  className="home-header">
              <h1 className="heading-name">
                Welcome to
                <strong className="main-name"> PALL-O</strong>
              </h1>
              <p className="flavor-text">
              This is where your next-level adventure kicks off into a whole new reality. 
              <br/>
              Buckle up—it’s about to get glitchy!
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
