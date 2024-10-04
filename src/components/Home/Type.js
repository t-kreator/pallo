import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "High quality art. Captivating story. Onchain comics."
        ],
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 0,
      }}
    />
  );
}

export default Type;
