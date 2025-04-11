import React, { useState } from "react";
import { supabase } from "../supabaseClient"; // Assuming Supabase is set up

const ShuffleGame = () => {
  const [bet, setBet] = useState(0);
  const [result, setResult] = useState(null);

  const startShuffle = () => {
    // Shuffle the cups (simple logic for demo)
    const correctCup = Math.floor(Math.random() * 3);
    const playerChoice = prompt("Pick a cup (1, 2, or 3):");

    if (parseInt(playerChoice) === correctCup + 1) {
      setResult("You won! Your bet is doubled.");
    } else {
      setResult("You lost! Better luck next time.");
    }
  };

  return (
    <div className="game">
      <h2>Shuffle Game</h2>
      <input
        type="number"
        placeholder="Enter your bet"
        value={bet}
        onChange={(e) => setBet(e.target.value)}
      />
      <button onClick={startShuffle}>Start Shuffle</button>
      <p>{result}</p>
    </div>
  );
};

export default ShuffleGame;

