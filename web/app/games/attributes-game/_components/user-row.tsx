'use client';
import Avatar from './avatar';

type RowProps = {
  age: number;
  country: string;
  type: string;
  year: number;
  hasBitcoin: boolean;
};

const UserRow = ({ age, country, type, year, hasBitcoin }: RowProps) => {
  const getColor = (condition: boolean) =>
    condition ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="flex gap-2 h-16  justify-between">
      <Avatar />
      <InfoBox content={age.toString()} color={getColor(age < 18)} />
      <InfoBox content={country} color={getColor(country === 'USA')} />
      <InfoBox
        content={type}
        color={type === 'Human' ? 'bg-orange-500' : 'bg-red-500'}
      />
      <InfoBox
        content={year.toString()}
        color={year > 2010 ? 'bg-red-500' : 'bg-orange-500'}
      />
      <InfoBox content="" color="bg-orange-500" />
      <InfoBox content="Bitcoin" color="bg-green-500" />
    </div>
  );
};

const InfoBox = ({ content, color }: { content: string; color: string }) => (
  <div
    className={`  text-white text-lg font-bold text-center flex-1 flex items-center justify-center ${color}`}
  >
    {content}
  </div>
);

export default UserRow;
