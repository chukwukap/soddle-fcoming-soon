import './global.css';
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
        <img
          src="/backgrounds/riddle_2_background.png"
          alt="Background"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: -1,
          }}
        />
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
