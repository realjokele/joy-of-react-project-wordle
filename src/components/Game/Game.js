import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { GuessInput } from "../GuessInput";
import { GuessList } from "../GuessList";
import { Guess } from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const newGuess = (newGuess) => {
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
  };

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput newGuess={newGuess} />
    </>
  );
}

export default Game;
