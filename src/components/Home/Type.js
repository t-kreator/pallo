import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Damn great art. Insane story. On-chain comics."
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
