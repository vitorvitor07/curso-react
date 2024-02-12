import "./App.css";

import { useState, useEffect, useCallback } from "react";

import { wordsList } from "./data/words";

import StartScreen from "./components/StartScreen";
import GameOver from "./components/GameOver";
import Game from "./components/Game";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const words = wordsList;

  const [pickedWord, setPickWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  // Start the game
  const startGame = useCallback(() => {
    // Clear all letters
    clearLetterStates();

    // Pick word and category
    const { word, category } = pickWordCategory();

    // Create array of letters
    let wordLetters = word.split("").map((l) => l.toLowerCase());

    // Fill states
    setPickWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordCategory]);

  // Process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Check if the letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    )
      return;

    // Push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  };

  // Check if a guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]; // Remove duplicates letters
    // Win condition
    if (uniqueLetters.length === guessedLetters.length) {
      // Add score
      setScore((actualScore) => (actualScore += 100));

      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <>
      <div>
        {gameStage === "start" && (
          <StartScreen startGame={startGame}></StartScreen>
        )}
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          ></Game>
        )}
        {gameStage === "end" && (
          <GameOver retry={retry} score={score}></GameOver>
        )}
      </div>
    </>
  );
}

export default App;
