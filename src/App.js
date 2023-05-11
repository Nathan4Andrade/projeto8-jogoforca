import Letras from "./components/Letras";
import palavras from "./palavras";

function App() {
  return (
    <div className="App">
      <div className="jogo">
        <img className="forca" src="assets/forca0.png" alt="forca"></img>
        <div className="palavra-escolhida">
          <button className="choose-btn">Escolher palavra</button>
          <p className="palavra">_ _ _ _ _ _ _</p>
        </div>
      </div>
      <Letras></Letras>
    </div>
  );
}

export default App;
