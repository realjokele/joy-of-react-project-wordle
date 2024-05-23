import React from "react";

export function GuessInput({ newGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleGuess = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Your guess has to be 5 characters long.");
      return;
    }
    newGuess(guess);
    setGuess("");
  };

  function handleGuessInput(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleGuess(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disabled}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => handleGuessInput(event)}
      />
    </form>
  );
}
