'use client';

import React, { useState, useEffect } from 'react';
import ChallengeWrapper from '../../_components/challenge-wrapper';
import TimerDisplay from '@/components/ui/time-display';
import UserInput from '@/components/ui/input';
import Button from '@/components/ui/button2';
import Beveled from '@/components/ui/trapezoid';
import BeveledRectangle from '@/components/ui/beveled-rectangle';
import Container from '@/components/layout/container';
import Image from 'next/image';

interface Tweet {
  content: string;
  author: string;
}

interface KOL {
  name: string;
  tweets: Tweet[];
}

interface TweetsGameProps {
  kols: KOL[];
  onGameComplete: (score: number) => void;
}

const TweetsGame: React.FC<TweetsGameProps> = ({ kols, onGameComplete }) => {
  const [currentTweet, setCurrentTweet] = useState<Tweet | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [personality, setPersonality] = useState<string>('');

  //   useEffect(() => {
  //     selectRandomTweet();
  //   }, []);

  //   const selectRandomTweet = () => {
  //     const randomKOL = kols[Math.floor(Math.random() * kols.length)];
  //     const randomTweet =
  //       randomKOL.tweets[Math.floor(Math.random() * randomKOL.tweets.length)];
  //     setCurrentTweet(randomTweet);

  //     const newOptions = [randomKOL.name];
  //     while (newOptions.length < 4) {
  //       const option = kols[Math.floor(Math.random() * kols.length)].name;
  //       if (!newOptions.includes(option)) {
  //         newOptions.push(option);
  //       }
  //     }
  //     setOptions(newOptions.sort(() => Math.random() - 0.5));
  //   };

  //   const handleGuess = (guess: string) => {
  //     setGuesses(guesses + 1);
  //     if (guess === currentTweet?.author) {
  //       setGameOver(true);
  //       onGameComplete(guesses + 1);
  //     }
  //   };

  //   if (!currentTweet) return <div className="text-white">Loading...</div>;

  return (
    <div className="flex flex-col gap-5 flex-grow">
      <Container className="flex items-center justify-center">
        <TimerDisplay />
      </Container>
      <Container>
        <ChallengeWrapper className="grid">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Who published that tweet?
          </h2>
          <div className="bg-[#181716] p-2 w-full text-xl">
            Caitlyn Jenner building on Base, and following me isn't what I
            expected to see on my bingo card this month.
          </div>
        </ChallengeWrapper>
      </Container>

      <Container>
        <UserInput
          placeholder="Enter a personality..."
          onChange={(e) => console.log(e.target.value)}
          className="bg-[#181716] placeholder-slate-600 "
        />{' '}
      </Container>
      <Container>
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              // onClick={() => handleGuess(option)}
              disabled={gameOver}
              className={`w-full p-4 rounded-md text-white text-lg font-semibold flex items-center justify-center transition-colors ${
                index % 2 === 0
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <span className="mr-2">👤</span> {option}
            </button>
          ))}
        </div>
      </Container>
      <Container className="flex gap-2 flex-col">
        <NameTag name="Vitalik Buterin" isCorrect={true} />
        <NameTag name="Patrick Collins" isCorrect={false} />
      </Container>
    </div>
  );
};

interface NameTagProps {
  name: string;
  isCorrect: boolean;
}

const NameTag: React.FC<NameTagProps> = ({ name, isCorrect }) => {
  return (
    <div
      className={` ${
        isCorrect ? 'bg-green-500' : 'bg-[#D21210]'
      } text-white py-5 px-4  flex items-center justify-center space-x-2`}
    >
      <div className="relative w-7 h-7">
        <Image
          src="/images/default-avatar.png"
          alt="Personality icon"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <span className="font-semibold">{name}</span>
    </div>
  );
};

export default TweetsGame;
