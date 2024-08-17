import * as React from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';

import Footer from './footer';
import Header from './header';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col  font-wremena min-h-screen">
      <Image
        src="/backgrounds/background_darkened_2.png"
        alt="Background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />
      <div className="relative z-10 flex flex-col justify-between min-h-screen py-4">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
