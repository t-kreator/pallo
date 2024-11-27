import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
const Home2 = lazy(() => import("./Home2"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
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
            {/* Lazy load the Home2 component */}
            <Suspense fallback={<div>Loading...</div>}>
            <Home2 />
            </Suspense>
    </section>
  );
}

export default Home;
