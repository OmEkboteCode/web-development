import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr, SetArr] = useState(["No Moves"]);

  let updateBlue = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      blue: prevMoves.blue + 1,
    }));

    SetArr((prevArr) => {
      return [...prevArr, " Blue Moves"];
    });
    console.log(arr);
  };
  let updateYellow = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      yellow: prevMoves.yellow + 1,
    }));
  };
  let updateGreen = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      green: prevMoves.green + 1,
    }));
  };
  let updateRed = () => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      red: prevMoves.red + 1,
    }));
  };
  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div>
        <p>Blue Moves = {moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green Moves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
