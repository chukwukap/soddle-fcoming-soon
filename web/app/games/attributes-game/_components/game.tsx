'use client';

import React, { useState, useEffect } from 'react';
import UserList from './user-list';
import TimerDisplay from '@/components/ui/time-display';
import BeveledRectangle from '@/components/ui/beveled-rectangle';
import Trapezoid from '@/components/ui/trapezoid';
import Input from '@/components/ui/input';
import App from './legends';
import Legend from './legends';
import Container from '@/components/layout/container';

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
  const [isLegendVisible, setIsLegendVisible] = useState<boolean>(true);

  const handleCloseLegend = (): void => {
    setIsLegendVisible(true);
  };

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
    <div className="  text-white flex flex-col gap-8 z-50">
      <Container className=" flex justify-center">
        <TimerDisplay />
      </Container>

      <Container className="">
        <Trapezoid className="text-center text-2xl">
          Guess today&apos;s personality!
        </Trapezoid>
      </Container>
      <Container className="">
        <Input placeholder="Enter a personality" className="bg-[#181716] " />
      </Container>

      <Container className="sm:max-w-[600px]  ">
        <UserList />
      </Container>
      <Container className="">
        {isLegendVisible && (
          <Trapezoid className="text-center">
            <Legend onClose={handleCloseLegend} />
          </Trapezoid>
        )}
      </Container>
    </div>
  );
};

export default Game1;
