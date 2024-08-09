import AccountDetails from './_components/account-details';
import SoddleLogo from './_components/soddle-logo';
import TimeSection from './_components/time-section';

export default function Home() {
  return (
    <div className="max-w-4x min-h-screen mx-auto  py-10 flex flex-col gap-10">
      <SoddleLogo />

      <AccountDetails />
      <TimeSection />
      <Card
        description="Find the daily KOL through clues on every try"
        title="Tweets Game"
      />
      <Card
        description="Match an infamous tweet to its publisher"
        title="Attributes Game"
      />
      <div className="h-[70px] bg-[#111411] border border-[#03B500]  p-4 text-white  text-2xl">
        <div className="flex gap-2 items-center justify-center mb-3">
          <h1>Emoji&apos;s Game</h1>
          <img
            src="/path-to-your-image.png"
            alt="Account icon"
            className="w-[22px] h-[22px] opacity-80"
          />
        </div>
        <p className="text-center text-white/70">
          Guess the right KOL using emojis{' '}
        </p>
      </div>
    </div>
  );
}

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" bg-[#111411] border border-[#03B500] border-opacity-50d  p-4 text-white  text-2xl">
      <div className="flex gap-2 items-center justify-center mb-3">
        <h1>{title}</h1>
        <img
          src="/path-to-your-image.png"
          alt="Account icon"
          className="w-[22px] h-[22px] opacity-80"
        />
      </div>
      <p className="text-center text-white/70">{description} </p>
    </div>
  );
};
