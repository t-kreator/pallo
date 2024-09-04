import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={11} className="home-header">
              <h1 style={{ paddingBottom: 0 }} className="heading">
                {""}
              </h1>

              <h1 className="heading-name">
                What is
                <strong className="main-name"> PALL-O</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left", marginBottom:20}}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
