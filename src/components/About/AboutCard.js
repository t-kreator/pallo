import React from "react";
import Card from "react-bootstrap/Card";  

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",fontSize: "0.9em" }}>
          <span className="purple"> Threat Kreator </span>
          is a professional fine artist who creates the art and visual image for Pall-O.
            <br />
            <br />
            Located in <span className="purple"> Oulu, Finland</span>, 
            she has a long background as an artist and art director in the gaming industry and comics. 
            She is an experienced inker and painter, whose style is suprising, memorable, and sentimentally raw. 
            <br />
            <br />
            Threat Kreator roams around abandoned places, spooks anyone accidentally passing by, and
            leaves behind her a dark veil of beautiful art. 
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
