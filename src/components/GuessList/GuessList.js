import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { Guess } from "../Guess";

export function GuessList({ guesses }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((_, index) => (
        <Guess key={index} guess={guesses[index] ?? null} />
      ))}
    </div>
  );
}
