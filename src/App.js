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
  const [chute, setChute] = useState("");

  const wordSorter =
    palavras[Math.floor(Math.random() * (palavras.length - 1))];

  function startGame() {
    setDisabled(false);
    setCounterErrors(0);
    setSelectedLetters([]);
    setFinalAnswer("palavra");
    setPlayingWord(wordSorter.split(""));
    setShowNewWord(wordSorter.split("").map((char) => "_" + " "));
  }

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
    } else {
      let counter = counterErrors + 1;
      setCounterErrors(counter);
      if (counter === 6) {
        setShowNewWord(playingWord);
        setFinalAnswer(`${finalAnswer} resposta-errada`);
        setDisabled(true);
      }
    }
    console.log(counterErrors);
    console.log(newWordDisplay);
    console.log(playingWord.join(""));
    if (counterErrors < 6 && newWordDisplay.join("") === playingWord.join("")) {
      setFinalAnswer(`${finalAnswer} resposta-certa`);
      setDisabled(true);
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
