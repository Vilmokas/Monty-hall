import React, { useState } from "react";
import "./App.css";
import Stats from "./components/Stats";

function App() {
  const [attempt, setAttempt] = useState([
    {
      picked: 0,
      correct: 0,
    },
  ]);
  const [won, setWon] = useState(0);
  const [door, setDoor] = useState(0);
  const [finalDoor, setFinalDoor] = useState(false);
  const [disabledDoor, setDisabledDoor] = useState({
    0: false,
    1: false,
    2: false,
  });

  function SelectDoor(number) {
    if (!finalDoor) {
      var d = Math.floor(Math.random() * Math.floor(3));

      var showDoor = [false, false, false];
      var doors = [0, 1, 2];
      doors.splice(number, 1);
      if (d !== doors[0] && d !== doors[1]) {
        var _showDoor = doors[Math.floor(Math.random() * Math.floor(2))];
        showDoor[_showDoor] = true;
      } else if (d === doors[0]) {
        showDoor[doors[1]] = true;
      } else {
        showDoor[doors[0]] = true;
      }
      setDisabledDoor(showDoor);

      setDoor(d);
      setFinalDoor(true);
    } else {
      setAttempt((attempt) => [
        ...attempt,
        {
          picked: number,
          correct: door,
        },
      ]);
      if (number === door) {
        setWon(won + 1);
      }

      setFinalDoor(false);
      setDisabledDoor({
        0: false,
        1: false,
        2: false,
      });
    }
  }

  return (
    <div className="App">
      <h1>Monty Hall</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary door"
                onClick={() => SelectDoor(0)}
                disabled={disabledDoor[0]}
              >
                1
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary door"
                onClick={() => SelectDoor(1)}
                disabled={disabledDoor[1]}
              >
                2
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary door"
                onClick={() => SelectDoor(2)}
                disabled={disabledDoor[2]}
              >
                3
              </button>
            </div>
          </div>
          <div className="row test">
            <div className="col"></div>
          </div>
        </div>
        <div className="col">
          <Stats attempt={attempt} won={won} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
