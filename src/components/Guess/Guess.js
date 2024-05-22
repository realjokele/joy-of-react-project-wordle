import React from "react";

import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

export function Guess({ guess }) {
  const cells = range(WORD_LENGTH);

  return (
    <p className="guess">
      {cells.map((_, index) => (
        <span key={index} className="cell">
          {guess && guess.length === WORD_LENGTH ? guess[index] : ""}
        </span>
      ))}
    </p>
  );
}
