import React from "react";
import Button from "react-bootstrap/Button";
import festival from "../../Assets/festival.jpeg";
import gulp from "../../Assets/Gulprageolutta_optimized.gif";
import moon from "../../Assets/pallotothemoon_mini_resize.gif";
import best from "../../Assets/thebest_mini_resize.gif";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="quote-card-view">
      <div class="image-container">
      <div class="content">
  <h1>Comics</h1>
  <p>Pall-O is a groundbreaking sci-fi comic blending retro gaming vibes, 
    unique characters, and an unforgettable adventure—now live on dReader app.
    </p>
    <Button className= "button" variant="primary" href={"https://pall-o.com/comics"}>
    Jump in!
  </Button>
</div>
</div>
        <Row className="features-section">
  <Col md={4} className="feature-item">
    <img
      src={gulp}
      className="feature-image"
      alt="Fighting for Indies"
      loading="lazy"
    />
    <h1 className="feature-title">FIGHTING FOR INDIES</h1>
    <p className="feature-body">
      We’re pushing back against elitism and gatekeeping in the art world.
      Entertainment needs fresh voices and new ideas. We’re here to champion
      the authenticity and perspectives of a new generation!
    </p>
  </Col>

  <Col md={4} className="feature-item">
    <img
      src={moon}
      className="feature-image"
      alt="Fast & Secure"
      loading="lazy"
    />
    <h1 className="feature-title">FAST + SECURE</h1>
    <p className="feature-body">
      Our digital comics run on the reliable, lightning-fast Solana blockchain.
      Don’t worry—you don’t need to be a tech whiz to enjoy them!
    </p>
  </Col>

  <Col md={4} className="feature-item">
    <img
      src={best}
      className="feature-image"
      alt="Physical & Digital"
      loading="lazy"
    />
    <h1 className="feature-title">PHYSICAL + DIGITAL</h1>
    <p className="feature-body">
      We’re reimagining comics for the modern era, blending the best of both
      worlds. Issues are released as digital collectibles in the dReader app
      and, over time, compiled into a beautifully crafted physical book.
    </p>
  </Col>
</Row>
<div class="image-container2">
      <div class="content">
  <h1>About</h1>
  <p>
  The creators of Pall-O are two Finnish millennials, 
  trapped in economic chaos and constantly feeling like outsiders in life.
    </p>
    <Button className= "button" variant="primary" href={"https://pall-o.com/about"} style={{marginTop:"10px"}}>
    Read more
  </Button>
</div>
</div>
        <Row style={{marginTop:"30px"}}>
          <Col md={8} fluid className="home-about-section">
            <h1 style={{ fontSize: "1.7em", textAlign:"left", color:"#ffa600"}}>
              News
            </h1>
            <p className="home-about-body">
            15th-17th of November 2024 -  Oulu Comic Festival
              </p>
          </Col>
          <Col 
          md={4} style={{ marginTop:"0px" }} className="about-img">
          <img src={festival} alt="about" className="img-fluid"  style={{width:"250px", padding:0, loading:"lazy"}}/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;