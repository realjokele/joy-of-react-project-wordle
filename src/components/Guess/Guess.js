import React from "react";

import { range } from "../../utils";
import { WORD_LENGTH } from "../../constants";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

export function Guess({ guess }) {
  const cells = range(WORD_LENGTH);

  return (
    <p className="guess">
      {cells.map((_, index) => (
        <Cell
          key={index}
          letter={guess ? guess[index].letter : ""}
          status={guess ? guess[index].status : ""}
        />
      ))}
    </p>
  );
}
