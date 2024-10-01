import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/hailuodonauto.webp";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillHeart
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT ARE WE ABOUT
            </h1>
            <p className="home-about-body">
            Futuristic, but at the same time nostalgic. 
            We are driven by <b className="purple"> authenticity</b>, and everything for Pall-O is <b className="purple">hand-drawn</b>.
            The style draws inspiration from computer science.
            It implements hints of Nordic culture featuring roughly beautiful landscapes, sauna scenes, and dark jokes.
            This creates<b className="purple"> an exotic</b> sci-fi world never seen before.
              <br />
              <br />
              <i>
                
              </i>
              The creators of Pall-O are two Finnish<b className="purple"> millennials</b>, trapped in economic chaos and constantly feeling like outsiders in life.
              This is not your average fictional adventure; it mirrors the challenges of <b className="purple"> real life</b>.
              <i>
                <b className="purple"></b>{" "}
                <b className="purple">
                
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{paddingBottom:0, width:"300px"}}/>
              </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://x.com/digipallo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/threat_kreator"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@PALL-O"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dreader.app/comic/pall-o"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillHeart />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;