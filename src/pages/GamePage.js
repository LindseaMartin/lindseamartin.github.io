import React from 'react';

function GamePage() {
  return (
    <div>
      <h1>Play a game!</h1>
      <p>Here's a simple game to get you started:</p>
      <ol>
        <li>Choose a number between 1 and 10.</li>
        <li>Click the "Roll" button to generate a random number.</li>
        <li>If the generated number matches your number, you win!</li>
      </ol>
      <button onClick={() => alert(`You rolled a ${Math.ceil(Math.random() * 10)}!`)}>
        Roll
      </button>
    </div>
  );
}

export default GamePage;