import './global.css';
import Image from 'next/image';
import { MainLayout } from '@/components/layout/main';
import Providers from '@/components/providers';
import { satoshi } from '@/lib/fonts';

export const metadata = {
  title: 'Soddle',
  description: 'Soddle game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} font-satoshi`}>
      <body className="bg-[#181716] relative min-h-screen">
        <Image
          src="/backgrounds/riddle_2_background.png"
          alt="Background"
          fill
          priority
          quality={100}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: -1,
          }}
          unoptimized
        />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
