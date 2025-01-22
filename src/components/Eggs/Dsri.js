import React from "react";
import { Container} from "react-bootstrap";


function Dsri() {
  return (
    <Container>
    <Container className="dsri">
          <p style={{ fontSize: "40px", fontWeight: "bold" }}>DSRI</p>
          <p>
            Digital Species Research Institution
            <br />
            65° 4' 35" N, 25° 9' 38.4" E
          </p>
          <p>
            We conduct research on digital species within computational systems.
            The observations stem from an ongoing investigation of the Pall-O network.
            <br />
            Our work is at the intersection of technology, biology, and data science,
            driving forward research that shapes the future of digital evolution.
          </p>
          <br />
          <p>
            <strong>Research Questions We Aim to Answer:</strong>
            <br />
            1. What are Pall-O nodes?
            <br />
            2. How many nodes exist?
            <br />
            3. How do digital species behave within Pall-O network?
            <br />
            4. Is the void endless?
          </p>
          </Container>
    </Container>
  );
}

export default Dsri;
