import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import bunbun from "./../dreadericon.webp";
import { SiTiktok } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
        <Row>
          <Col md={12} className="home-about-social" style={{ marginTop:"0px" }} >
          <h3>Copyright © {year} Pall-O</h3>
          <h4>Website by Pyromon🔥</h4>
            <h1 style={{ fontSize: "1.3em"}}>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://x.com/pallocomics"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="pall-o twitter/x page"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@pallocomics"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="pall-o tiktok chaos"
                >
                  <SiTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/threat_kreator"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="threat kreator's portfolio"
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
                  aria-label="Pall-O YouTube channel"
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
                  aria-label="read pall-o comics on dReader!"
                >
                <img
                  src={bunbun} // Render the image
                  alt="bun bun"
                  style={{
                    width: "0.9rem", // Set the width of the icon (similar to other icons)
                    height: "0.9rem", // Set the height to keep it uniform
                    objectFit: "contain", // Ensures the image doesn't stretch/distort
                    margin: "0 5px", // Adjust spacing if needed
                  }}
                />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
  );
}

export default Footer;
