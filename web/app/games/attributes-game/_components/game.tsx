'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface KOL {
  name: string;
  age: number;
  country: string;
  pfp: string;
  accountCreation: string;
  followers: number;
  ecosystem: string;
}

const Game1: React.FC = () => {
  const [selectedKOL, setSelectedKOL] = useState<string>('');
  const [correctKOL, setCorrectKOL] = useState<KOL | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won'>('playing');

  // Mock KOL data (replace with actual data from your backend)
  const kols: KOL[] = [
    // Add your KOL data here
  ];

  useEffect(() => {
    // Randomly select a correct KOL when the game starts
    const randomKOL = kols[Math.floor(Math.random() * kols.length)];
    setCorrectKOL(randomKOL);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedKOL && !guesses.includes(selectedKOL)) {
      setGuesses([...guesses, selectedKOL]);
      if (selectedKOL === correctKOL?.name) {
        setGameStatus('won');
      }
      setSelectedKOL('');
    }
  };

  return (
    <main className="bg-[#181716] min-h-screen text-white p-8">
      <section className="max-w-4xl mx-auto">
        <div className="bg-[#111411] border border-[#2A342A] rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Game 1: Guess the KOL</h2>
          <p className="mb-4">Submit KOLs until you find the correct one.</p>

          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={selectedKOL}
              onChange={(e) => setSelectedKOL(e.target.value)}
              placeholder="Enter a personality..."
              className="bg-[#111411] border border-[#2FFF2B80] text-white p-2 rounded w-full mb-2"
            />
            <button
              type="submit"
              className="bg-[#2FFF2B] text-black font-bold py-2 px-4 rounded"
            >
              Submit Guess
            </button>
          </form>

          {gameStatus === 'won' && (
            <div className="text-[#2FFF2B] font-bold">
              Congratulations! You guessed correctly!
            </div>
          )}

          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Your Guesses:</h3>
            <ul>
              {guesses.map((guess, index) => (
                <li key={index} className="mb-1">
                  {guess}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Add the color-coded result boxes here */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="bg-[#0DBF2E] border border-white/50 p-4 text-center">
            Correct
          </div>
          <div className="bg-[#FFA500] border border-white/50 p-4 text-center">
            Partially correct
          </div>
          <div className="bg-[#D21210] border border-white/50 p-4 text-center">
            Wrong
          </div>
          <div className="bg-[#D21210] border border-white/50 p-4 text-center">
            Higher
          </div>
          <div className="bg-[#D21210] border border-white/50 p-4 text-center">
            Lower
          </div>
        </div>
      </section>
    </main>
  );
};

export default Game1;
