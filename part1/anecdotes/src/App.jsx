import { useState } from "react";
import "./App.css";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  function randomAnecdote() {
    let anec = Math.floor(Math.random() * anecdotes.length);
    // console.log(anec);
    while (anec === selected) {
      anec = Math.floor(Math.random() * anecdotes.length);
      //   console.log(anec);
    }
    setSelected(anec);
    return anecdotes[selected];
  }

  //   const points = Array(anecdotes.length).fill(0);
  //   console.log(points);
  const finalVote = [...votes];

  function vote() {
    finalVote[selected] += 1;

    setVotes(finalVote);
    // const finalVote = [...points, [selected]];
  }
  console.log(votes);

  const mostVoted = Math.max(...votes);
  console.log(votes.indexOf(mostVoted));

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <br />
      <button onClick={randomAnecdote}>Next Anecdote</button>
      <button onClick={vote}>Vote</button>
      <h2>Anecdote with the most votes ({mostVoted})</h2>
      <p>{anecdotes[votes.indexOf(mostVoted)]}</p>
    </>
  );
};

export default App;
