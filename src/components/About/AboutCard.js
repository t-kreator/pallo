import React from "react";
import Card from "react-bootstrap/Card";  

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify",fontSize: "0.8em" }}>
          <span className="purple"> Threat Kreator </span>
          is a professional fine artist who creates the art and visual image for Pall-O.
          </p>
          <p style={{ textAlign: "justify",fontSize: "0.8em" }}>
            She has a background as an artist and art director in the gaming industry, and
            is also an experienced inker and painter.
            Her approach to comics follows the style of animation or a game, 
            while also blending in a sense of traditional art.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
