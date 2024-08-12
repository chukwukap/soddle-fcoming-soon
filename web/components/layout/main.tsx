'use client';

import * as React from 'react';
import { ReactNode, Suspense, useEffect, useRef } from 'react';

import toast, { Toaster } from 'react-hot-toast';
import Footer from './footer';
import Header from './header';
import Container from './container';

const gridSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>
<rect width='100' height='100' fill='none' stroke-width='1' stroke='#2A342A'/>
</svg>
`;
const encodedGridSvg = encodeURIComponent(gridSvg);

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col font-wremena bg-[#181716] min-h-screen py-4 ">
      {/* Background with grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedGridSvg}")`,
          backgroundSize: '70px 100px',
        }}
      />

      {/* Green glow effect at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[167px] bg-[#2FFF2B] bg-opacity-25 blur-[100px] rounded-full z-10 pointer-events-none" />

      {/* Green glow effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[167px] bg-[#2FFF2B] bg-opacity-25 blur-[100px] rounded-full z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative">
        <Suspense
          fallback={
            <div className="text-center my-32">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          <div className="flex flex-col min-h-full">
            <Header />
            {children}
            <Footer />
          </div>
        </Suspense>
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}

export function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
}: {
  children: ReactNode;
  title: string;
  hide: () => void;
  show: boolean;
  submit?: () => void;
  submitDisabled?: boolean;
  submitLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (show) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [show, dialogRef]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button
                className="btn btn-xs lg:btn-md btn-primary"
                onClick={submit}
                disabled={submitDisabled}
              >
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}