//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Game from './Game';

// STAR MATCH

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}

//ReactDOM.render(<StarMatch />, mountNode);

export function App() {
  return (
    <StarMatch />
  );
}
