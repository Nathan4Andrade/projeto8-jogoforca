import palavras from "./palavras";

function App() {
  return (
    <div className="App">
      <div className="jogo">
        <img className="forca" src="assets/forca0.png" alt="forca"></img>
        <div className="palavra-escolhida">
          <button className="choose-btn">Escolher palavra</button>
          <p className="palavra">_ _ _ _ _ _ _ _</p>
        </div>
      </div>
      <div className="letras">
        <div className="keyboard">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default App;
