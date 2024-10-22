import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/hailuodonauto.webp";
import festival from "../../Assets/festival.jpeg";
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
      <Container className="quote-card-view">
        <Row>
          <Col md={8} fluid className="home-about-section">
            <h1 style={{ fontSize: "2.6em" }}>
              WHAT ARE WE ABOUT
            </h1>
            <p className="home-about-body">
            Pall-O is a <b className="purple">sci-fi</b> world and an adventure never seen before.
            The futuristic yet nostalgic story draws inspiration from
            <b className="purple"> retro games</b> and <b className="purple">computer graphics</b>, 
            combining them with hints of <b className="purple">Nordic culture</b>. 
              <br />
              <br />
              The creators of Pall-O are two Finnish <b className="purple">millennials</b>, 
              trapped in economic chaos and constantly
               feeling like <b className="purple">outsiders</b> in life. 
               This is not your average fictional adventure; 
               it mirrors the challenges of <b className="purple">real life</b>.
               <br />
               <br />
              Pall-O adventure is being published as 
              an on-going <b className="purple">comic</b> on the dReader app. Jump in, but remember to put your duck float on.
            </p>
          </Col>
          <Col md={4} style={{ marginTop:"40px" }} className="about-img">
              <img src={myImg} className="img-fluid" alt="avatar" style={{paddingBottom:0, width:"300px"}}/>
          </Col>
        </Row>

        <Row style={{marginTop:"100px"}}>
          <Col md={8} fluid className="home-about-section">
            <h1 style={{ fontSize: "2.6em" }}>
              EVENTS
            </h1>
            <p className="home-about-body"  style={{textAlign:"center"}}>
            15th-17th of November 2024 -  Oulu Comic Festival
              <br />
              <br />
              </p>
          </Col>
          <Col 
          md={4} style={{ marginTop:"0px" }} className="about-img">
          <img src={festival} alt="about" className="img-fluid"  style={{paddingBottom:0, width:"300px"}}/>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social" style={{ marginTop:"100px" }} >
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