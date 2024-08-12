import type { Metadata } from 'next';
import { TimeProvider } from '@/contexts/Time';

export const metadata: Metadata = {
  title: 'Games',
  description: 'Explore our collection of games',
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TimeProvider>
      <div className="max-h-full">{children}</div>
    </TimeProvider>
  );
}
