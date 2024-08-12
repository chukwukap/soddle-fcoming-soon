// app/games/tweets-game/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Game2 from './_components/game';

const kols = [
  {
    name: 'KOL1',
    tweets: [
      { content: 'Tweet 1 from KOL1', author: 'KOL1' },
      { content: 'Tweet 2 from KOL1', author: 'KOL1' },
      // ... more tweets
    ],
  },
  // ... more KOLs
];

const GameWrapper: React.FC = () => {
  const [gameStartTime, setGameStartTime] = useState<Date | null>(null);
  const [gameCompleted, setGameCompleted] = useState<boolean>(false);

  useEffect(() => {
    // Set up game start time - this should be synchronized with your backend
    setGameStartTime(new Date());
  }, []);

  const handleGameComplete = (score: number) => {
    setGameCompleted(true);
    // Here you would typically send the score to your backend
    console.log(`Game completed with score: ${score}`);
  };

  if (!gameStartTime) return <div className="text-white">Loading...</div>;

  const timeRemaining =
    24 * 60 * 60 * 1000 - (new Date().getTime() - gameStartTime.getTime());

  if (timeRemaining <= 0 || gameCompleted) {
    return (
      <div className="text-white text-center text-2xl">Game has ended</div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-5">
      <Game2 kols={kols} onGameComplete={handleGameComplete} />
    </div>
  );
};

export default GameWrapper;
