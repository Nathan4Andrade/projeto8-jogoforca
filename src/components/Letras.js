export default function Letras(props) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const { selectedLetters, selectLetter, disabled } = props;
  return (
    <div className="letras">
      <div className="keyboard">
        {alfabeto.map((letra) => (
          <button>{letra}</button>
        ))}
      </div>
    </div>
  );
}
