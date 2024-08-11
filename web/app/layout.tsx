import './global.css';
import { MainLayout } from '@/components/layout/main';
import localFont from 'next/font/local';
import Providers from '@/components/providers';

const wremena = localFont({
  src: [
    {
      path: '../lib/fonts/Wremena-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../lib/fonts/Wremena-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    // Add more variations as needed
  ],
  variable: '--font-wremena', // This creates a CSS variable
});

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
    <html lang="en">
      <body className={`${wremena.variable} bg-[#181716]`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
