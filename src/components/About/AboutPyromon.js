import React from "react";
import Card from "react-bootstrap/Card";

function AboutPyromon() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "0.9em" }}>
            <span className="purple">Pyromon</span> is the writer of Pall-O.
             She is located in<span className="purple"> Oulu, Finland</span>, and works in programming, 
            allowing her to creatively write a comic about a computer universe. 
            <br />  
            <br /> 
            Her writing offers interesting brain teasers and sharp humor in unexpected situations for
             a comic audience that loves details.
            <br />  
            <br />            
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutPyromon;
