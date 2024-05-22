import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { GuessList } from "../GuessList";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const newGuess = (newGuess) => {
    const newGuesses = [...guesses, checkGuess(newGuess, answer)];
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
