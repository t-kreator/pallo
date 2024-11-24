import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiFillHeart
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
        <Row>
          <Col md={12} className="home-about-social" style={{ marginTop:"0px" }} >
          <h3>Copyright © {year} Pall-O</h3>
          <h4>Website by Pyromon</h4>
            <h1 style={{ fontSize: "1.3em"}}>FIND US ON</h1>
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
  );
}

export default Footer;
