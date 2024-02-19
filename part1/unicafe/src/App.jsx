import { useState } from "react";
import "./App.css";
import Button from "../components/Button";
import StatTotals from "../components/StatTotals";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div className="feedback-section">
      <div>
        <h1>Give Feedback</h1>
        <div className="card">
          <Button onClick={() => setBad((count) => count + 1)} text="Bad" />
          <Button
            onClick={() => setNeutral((count) => count + 1)}
            text="Neutral"
          />
          <Button onClick={() => setGood((count) => count + 1)} text="Good" />
        </div>
      </div>
      <div className="statistics">
        <h2>Statistics</h2>
        <StatTotals bad={bad} neutral={neutral} good={good} />
      </div>
    </div>
  );
}

export default App;
