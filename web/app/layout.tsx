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
      <body className="bg-[url(/backgrounds/riddle_2_background.png)] relative min-h-screen">
        
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
