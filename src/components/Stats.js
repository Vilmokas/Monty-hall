import React from "react";
import { uuid } from "uuidv4";
import "../css/stats.css";

function calcWinRate(total, won) {
  if (total === 0) return "0.000";
  else return ((won / total) * 100).toFixed(3);
}

function Stats(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">Attempts</div>
        <div className="card-body overflow-auto stats">
          {props.attempt.slice(1).map((a) => (
            <p key={uuid()}>
              Picked door: {a.picked + 1} | Correct door: {a.correct + 1}
            </p>
          ))}
        </div>
        <div className="card-footer text-muted">
          Won: {calcWinRate(props.attempt.length - 1, props.won)}%
        </div>
      </div>
    </div>
  );
}

export default Stats;
