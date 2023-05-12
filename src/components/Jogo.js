import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Jogo(props) {
  const { errors, startGame, finalAnswer, showNewWord } = props;
  const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  return (
    <div className="jogo">
      <img
        className="forca"
        src={images[errors]}
        alt="forca"
        data-test="game-image"></img>
      <div className="palavra-escolhida">
        <button
          className="choose-btn"
          onClick={startGame}
          data-test="choose-word">
          Escolher palavra
        </button>
        <div className={finalAnswer} data-test="word">
          {showNewWord}
        </div>
      </div>
    </div>
  );
}
