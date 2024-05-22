import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { GuessList } from "../GuessList";
import { checkGuess } from "../../game-helpers";

const GAME_OVER_WON = "WON";
const GAME_OVER_LOST = "LOST";

function HappyBanner({ numberOfGuesses, restartGame }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuesses === 1 ? "1 guess" : `${numberOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button onClick={restartGame}>Play agin?</button>
    </div>
  );
}

function SadBanner({ answer, restartGame }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={restartGame}>Play agin?</button>
    </div>
  );
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(undefined);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const restartGame = () => {
    setGuesses([]);
    setGameOver(undefined);
    setAnswer(sample(WORDS));
  };

  const newGuess = (newGuess) => {
    const newGuesses = [...guesses, checkGuess(newGuess, answer)];
    setGuesses(newGuesses);
    if (newGuess === answer) {
      setGameOver(GAME_OVER_WON);
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(GAME_OVER_LOST);
    }
  };

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput newGuess={newGuess} disabled={gameOver} />
      {gameOver === GAME_OVER_WON && (
        <HappyBanner
          numberOfGuesses={guesses.length}
          restartGame={restartGame}
        />
      )}
      {gameOver === GAME_OVER_LOST && (
        <SadBanner answer={answer} restartGame={restartGame} />
      )}
    </>
  );
}

export default Game;
