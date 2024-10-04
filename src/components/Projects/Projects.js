import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import bindeep from "../../Assets/Projects/issue2.jpg";
import activation from "../../Assets/Projects/issue1.webp";
import pallocomics from "../../Assets/logoball.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
      <img src={pallocomics} className="img-fluid" alt="avatar" />
        <h1 className="project-heading">
          Finland's first <strong className="purple">onchain</strong> comic series.
        </h1>
        <p style={{ color: "white"}}>
        Experimental sci-fi adventure about life inside computers.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activation}
              isBlog={false}
              title="Issue 1 - Activation"
              description="Unappreciated node gardener tries to prove he is not completely garbage. Same time AI programs find new innovative ways to make Pall-O network more efficient."
              demoLink="https://dreader.app/comic/pall-o"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bindeep}
              isBlog={false}
              title="Issue 2 - Bin Deep"
              description={<>{"To escape, Plop has to find a way through Trash Bin node. Unfortunately, The Bin is a home for all kinds of creepwares."}
              <br />
              <br />
            </>}
              
              demoLink="https://dreader.app/comic/pall-o"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
