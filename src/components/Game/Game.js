import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import GuessList from "../GuessList";

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
      Put a game here!
      <GuessList guesses={guesses} />
      <GuessInput newGuess={newGuess} />
    </>
  );
}

export default Game;
