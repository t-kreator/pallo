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
      <img src={pallocomics} className="img-fluid" alt="avatar" style={{borderRadius:"none"}} />
        <h1 className="project-heading">
          Finland's first <strong className="purple">on-chain</strong> comic series.
        </h1>
        <br/>
        <p style={{ maxWidth: "600px", margin: "auto", color: "white", fontSize:"0.95em" }}>
        Experimental sci-fi adventure about life inside computers. O'Pall!
        </p>
        <br/>
        <p style={{ maxWidth: "600px", margin: "auto", color: "white", fontSize:"0.88em" }}>
        Thanks to blockchain technology, digital comics can now be treated almost like physical ones. 
        When you purchase our comic, you gain the freedom to choose: will you unwrap it, resell it, 
        or request our signature? Finally, digital comics are truly collectible.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activation}
              isBlog={false}
              title="#1 - Activation"
              titlelong= "Pall-O 01: Activation"
              description="Unappreciated node gardener tries to prove he is not completely garbage. Same time AI programs find new innovative ways to make Pall-O network more efficient."
              pages="48"
              year="2024"
              demoLink="https://www.dreader.app/comic-issue/116/"
              pageimages = {[ 
                "/pages/Activation/1.webp",
                "/pages/Activation/2.webp",
                "/pages/Activation/3.webp",
                "/pages/Activation/4.webp",
                "/pages/Activation/5.webp",
              ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bindeep}
              isBlog={false}
              title="#2 - Bin Deep"
              titlelong="Pall-O 02: Bin Deep"
              pages="57"
              year="2024"
              description={<>{"To escape, Plop has to find a way through Trash Bin node. Unfortunately, The Bin is a home for all kinds of creepwares."}
            </>}
              demoLink="https://www.dreader.app/comic-issue/132/"
              pageimages = {[ 
                "/pages/BinDeep/1.webp",
                "/pages/BinDeep/2.webp",
                "/pages/BinDeep/3.webp",
                "/pages/BinDeep/4.webp",
                "/pages/BinDeep/5.webp",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
