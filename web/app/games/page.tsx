import Link from 'next/link';
import AccountDetails from './_components/account-details';
import TimeSection from './_components/time-section';
import BeveledRectangle from '@/components/ui/beveled-rectangle';
import Container from '@/components/layout/container';

const linkStyle =
  'bg-[#111411] border border-[#03B500] border-opacity-50 p-4 text-white text-lg transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_10px_rgba(47,255,43,1)] hover:shadow-[0_0_20px_rgba(47,255,43,0.5)]';

export default function MainPage() {
  return (
    <div className=" ">
      <Container className="flex flex-col gap-10">
        <AccountDetails />
        <TimeSection />
        {/* attributes game */}
        <Link href={'/games/attributes-game'} className={linkStyle}>
          <div className="flex gap-2 items-center justify-center mb-3">
            <h1>{'Attributes Game'}</h1>
            <img
              src="/path-to-your-image.png"
              alt="Account icon"
              className="w-[22px] h-[22px] opacity-80"
            />
          </div>
          <p className="text-center text-white/70">
            {'Match an infamous tweet to its publisher'}{' '}
          </p>
        </Link>
        {/* tweets game */}
        <Link href={'/games/tweets-game'} className={linkStyle}>
          <div className="flex gap-2 items-center justify-center mb-3">
            <h1>{'Tweets Game'}</h1>
            <img
              src="/path-to-your-image.png"
              alt="Account icon"
              className="w-[22px] h-[22px] opacity-80"
            />
          </div>
          <p className="text-center text-white/70">
            {'Find the daily KOL through clues on every try'}{' '}
          </p>
        </Link>
        {/* emojies game */}
        <Link href={'/games/emojis-game'} className={linkStyle}>
          <BeveledRectangle>
            <div className="flex gap-2 items-center justify-center mb-3">
              <h1>Emoji&apos;s Game</h1>
              <span className="text-2xl">😂</span>
            </div>
            <p className="text-center text-white/70">
              Guess the right KOL using emojis{' '}
            </p>
          </BeveledRectangle>
        </Link>
      </Container>
    </div>
  );
}
