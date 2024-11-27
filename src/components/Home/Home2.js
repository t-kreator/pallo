import React from "react";
import Button from "react-bootstrap/Button";
import festival from "../../Assets/festival.jpeg";
import gulp from "../../Assets/Gulprageolutta_optimized.gif";
import moon from "../../Assets/pallotothemoon_mini_resize.gif";
import best from "../../Assets/thebest_mini_resize.gif";
import { Container, Row, Col, Accordion } from "react-bootstrap";

function Home2() {

 // Define the FAQs
 const faqs = [
  { question: "What is Pall-O about?", answer: "Pall-O is a sci-fi world and an adventure never seen before. The futuristic yet nostalgic story draws inspiration from retro games and computer graphics, combining them with hints of Nordic culture. We create high-quality comics for everyone who loves millennium internet humour and questions their absurd existence. " },
  { question: "Where can I read Pall-O comics?", answer: "Pall-O comics are available now on dReader app! dReader is a digital platform where comics like Pall-O are available as digital collectibles." },
  { question: "What is an on-chain comic?", answer: "An on-chain comic is a digital comic book that is stored on a blockchain. Pall-O comics are stored in Solana blockchain. <br /><br />Each issue can be represented as a non-fungible token (NFT), which gives the buyer ownership of their copy. With decentralized storage and blockchain records, this technology makes digital comics collectible. It’s finally possible to treat digital comics almost same way than physical comics!" },
  { question: "What can I do with my comic copy? ", answer: "We hope you read it over and over again, and enjoy all the tiniest details and easter eggs we have hidden for you. When you buy our comic, you have also a possibility to decide if you unwrap it, resell it or ask for our signature. <br /><br />  However, the buyers don’t have the copyrights or rights for the IP. It is prohibited to commercialize any content without the written permission of Pall-O studio. The intellectual property rights linked to the comics are retained by Pall-O studio, including those used in the creation of each comic issue. Any and all other commercially-linked activity in which an owner uses their comic is prohibited, unless otherwise stated by agreement with our studio." },
  { question: "Are the Pall-O comics going to be a physical book? ", answer: "First, we’ll publish issues 1-8 digitally. Over time, we will create a physical book of Pall-O comics. The book will have issues 1-8 combined! The physical book might differ from original comics, depending of the edits and publisher - This means that the digital comics have all the original, non-censored content!" },
  { question: "How can I support Pall-O?", answer: "You can support Pall-O by reading the comics on dReader and sharing them with others." },
  { question: "What happens if I lose my wallet and comic? ", answer: "Please take good care of your wallet and your comic. Remember to have backup keys to your wallet and always check the wallet address is correct when sending it.  Pall-O studio is not responsible if you lose your comic. " },
  {
    question: "Where can I see the trailer?", 
    answer: 'Please check it <a style="color: #ffa600; text-decoration: none !important;" href="https://youtu.be/6tRs48gKywc?feature=shared" target="_blank" arial-label="Watch Pall-O trailer on YouTube" rel="noopener noreferrer">here</a> !'
  },
  { question: "Why is Duckota angry?", answer: "If you were born as a vehicle, but hated that - and instead of having any purpose for your life, you would end up in Trash Bin node - do you think, you might also be a bit angry? " },
  { question: "Why is Plop so huge?", answer: "What do you mean, he’s only 17,3 GB? No, he truly is huge! He has a very powerful skill, but he’s also full of bugs." }
];

  return (
    <Container fluid="true" className="home-about-section" id="about">
      <Container className="quote-card-view">
      <div className="image-container">
        
      <div className="content">
  <h1>Comics</h1>
  <p>Pall-O is a groundbreaking sci-fi comic blending retro gaming vibes, 
    unique characters, and an unforgettable adventure—now live on dReader app.
    </p>
    <Button className= "buttonBig" variant="primary" href={"https://pall-o.com/comics"} aria-label="pall-o comics">
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
</Row>
<div className="image-container2">
      <div className="content">
  <h1>About</h1>
  <p>
  The creators of Pall-O are two Finnish millennials, 
  trapped in economic chaos and constantly feeling like outsiders in life.
    </p>
    <Button className= "buttonBig" variant="primary" href={"https://pall-o.com/about"} aria-label="about us" style={{marginTop:"10px"}}>
    Read more
  </Button>
</div>
</div>
        <Row style={{marginTop:"30px"}}>
          <Col md={8} fluid="true" className="home-about-section">
            <h1 style={{ fontSize: "1.7em", textAlign:"left", color:"#ffa600"}}>
              News
            </h1>
            <p className="home-about-body">
            15th-17th of November 2024 -  Oulu Comic Festival
              </p>
          </Col>
          <Col 
          md={4} style={{ marginTop:"0px" }} className="about-img">
          <img src={festival} alt="about" className="img-fluid" loading="lazy" style={{width:"250px", padding:0, loading:"lazy"}}/>
          </Col>
        </Row>
        <div className="faq-container" style={{ marginTop: "50px", padding: "20px", backgroundColor: "rgba(0,0,0,0)"}}>
  <h1 style={{ fontSize: "1.7em", textAlign: "center", marginBottom: "30px"}}>
    Frequently Asked Questions
  </h1>
  <Accordion>
  {faqs.map((faq, index) => (
    <Accordion.Item 
      eventKey={index.toString()} 
      key={index} 
      style={{ marginBottom: "10px" }}
    >
      <Accordion.Header 
        className="custom-accordion-header"
        style={{fontWeight: "bold" }}
      >
        {faq.question}
      </Accordion.Header>
      <Accordion.Body 
        style={{  textAlign: "left" }}
      >
        {/* Use dangerouslySetInnerHTML to render the HTML content correctly */}
        <div 
          dangerouslySetInnerHTML={{ __html: faq.answer }} 
        />
      </Accordion.Body>
    </Accordion.Item>
  ))}
</Accordion>
</div>

      </Container>
    </Container>
  );
}
export default Home2;