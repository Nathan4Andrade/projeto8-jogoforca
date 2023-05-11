import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

import { useState } from "react";

function App() {
  const [disabled, setDisabled] = useState(true);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [counterErrors, setCounterErrors] = useState(0);
  const [showNewWord, setShowNewWord] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("palavra");
  const [playingWord, setPlayingWord] = useState([]);

  const wordSorter =
    palavras[Math.floor(Math.random() * (palavras.length - 1))];
  let counter = 0;

  function startGame() {
    setDisabled(false);
    setCounterErrors(0);
    setSelectedLetters([]);
    setFinalAnswer("palavra");
    setPlayingWord(wordSorter.split(""));
    setShowNewWord(wordSorter.split("").map((char) => "_" + " "));
  }

  //console.log(newWord);
  // TODO
  function selectLetter(string) {
    let newWordDisplay = [...showNewWord];
    setSelectedLetters([...selectedLetters, string]);
    if (playingWord.includes(string)) {
      playingWord.forEach((i, index) => {
        if (string === i) {
          newWordDisplay[index] = playingWord[index];
        }
      });

      setShowNewWord(newWordDisplay);
    }
  }

  return (
    <div className="App">
      <Jogo
        disabled={disabled}
        errors={counterErrors}
        showNewWord={showNewWord}
        finalAnswer={finalAnswer}
        startGame={startGame}></Jogo>
      <Letras
        disabled={disabled}
        selectedLetters={selectedLetters}
        selectLetter={selectLetter}></Letras>
    </div>
  );
}

export default App;
