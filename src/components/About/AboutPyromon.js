import React from "react";
import Card from "react-bootstrap/Card";

function AboutPyromon() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "0.8em" }}>
            <span className="purple">Pyromon</span> is the writer of Pall-O.
            With a technical background, she can creatively write a comic about a computer universe. 
            </p>
            <p style={{ textAlign: "justify", fontSize: "0.8em" }}>
            Her writing offers interesting brain teasers and sharp humor in unexpected situations for
             a comic audience that loves details.     
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutPyromon;
