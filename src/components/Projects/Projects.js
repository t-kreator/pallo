import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; 
import sale from "../../Assets/sale.webp";
import bindeep from "../../Assets/Projects/issue2.webp";
import bindeepleg from "../../Assets/Projects/bindeep_legendary.webp";
import bindeeprare from "../../Assets/Projects/bindeep_rare.webp";
import activation from "../../Assets/Projects/issue1.webp";
import pallocomics from "../../Assets/logoball.webp";


function Projects() {

  return (
    <Container fluid={true} className="project-section">
      <Container>
        <img
          src={pallocomics}
          className="img-fluid"
          alt="logo"
          style={{
            borderRadius: "none",
            height: "auto",
            width: "150px",
            maxWidth: "150px"
          }}
        />
        <h1 className="project-heading">
          Finland's first <strong className="purple">on-chain</strong> comic series.
        </h1>
        <p>
          Experimental sci-fi adventure about life inside computers. O'Pall!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           {/* Bin Deep Card with Badge */}
           <Col md={4} className="project-card">
  
  <ProjectCard
    imgPath={sale}
    modalImage={[bindeep, bindeeprare, bindeepleg]} // Modal image (could be different)
    isBlog={false}
    title="#2 - Bin Deep"
    info="Limited supply: 200"
    titlelong="Pall-O 02: Bin Deep"
    pages="57"
    year="2024"
    button="Get the comic"
    contract="EQ2zqNT56HyibwKSFhwP9wRhzHyZLwpgiuRUAiq3ovt7"
    description={
      <>
        {"To escape, Plop has to find a way through Trash Bin node. Unfortunately, The Bin is a home for all kinds of creepwares."}
      </>
    }
    demoLink="https://www.dreader.app/comic-issue/132/"
    pageimages={[
      "/pages/BinDeep/1.webp",
      "/pages/BinDeep/2.webp",
      "/pages/BinDeep/3.webp",
      "/pages/BinDeep/4.webp",
      "/pages/BinDeep/5.webp",
    ]}
  />
</Col>
          {/* Activation Card */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activation}
              isBlog={false}
              title="#1 - Activation"
              info="Free to read"
              titlelong="Pall-O 01: Activation"
              description="Unappreciated node gardener tries to prove he is not completely garbage. Same time AI programs find new innovative ways to make Pall-O network more efficient."
              pages="48"
              year="2024"
                  button="Read the comic"
              demoLink="https://www.dreader.app/comic-issue/116/"
              pageimages={[
                "/pages/Activation/1.webp",
                "/pages/Activation/2.webp",
                "/pages/Activation/3.webp",
                "/pages/Activation/4.webp",
                "/pages/Activation/5.webp",
              ]}
            />
          </Col>
        </Row>
        <p
          style={{
            maxWidth: "600px",
            margin: "auto",
            fontSize: "0.88em",
            fontWeight: "500"
          }}
        >
          Thanks to blockchain technology, digital comics can now be treated almost like physical ones. When you purchase our comic, you gain the freedom to choose: will you unwrap it, resell it, or request our signature? Finally, digital comics are truly collectible.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
