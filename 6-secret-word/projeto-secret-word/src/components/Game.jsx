import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory.toUpperCase()}</span>
      </h3>
      <p>Tentativas restantes {guesses}</p>
      <div className="wordContainer">
        {letters.map((l, i) =>
          guessedLetters.includes(l) ? (
            <span className="letter" key={i}>
              {l}
            </span>
          ) : (
            <span className="blankSquare" key={i}></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="letter"
              maxLength={1}
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
          </div>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((l, i) => (
          <span key={i}>{l} </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
