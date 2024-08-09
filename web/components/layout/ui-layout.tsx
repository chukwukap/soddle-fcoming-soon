'use client';

import * as React from 'react';
import { ReactNode, Suspense, useEffect, useRef } from 'react';

import { ExplorerLink } from '../cluster/cluster-ui';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './footer';
import Header from './header';

const gridSvg = `
<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>
<rect width='100' height='100' fill='none' stroke-width='1' stroke='#2A342A'/>
</svg>
`;
const encodedGridSvg = encodeURIComponent(gridSvg);

export function UiLayout({
  children,
}: {
  children: ReactNode;
  links: { label: string; path: string }[];
}) {
  return (
    <div className="relative flex flex-col font-wremena bg-[#181716] min-h-screen py-4 border">
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
      <div className="relative flex-grow mx-4 lg:mx-auto z-20">
        <Header />
        <Suspense
          fallback={
            <div className="text-center my-32">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          <div>{children}</div>
        </Suspense>
        <Footer />
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

export function AppHero({
  children,
  title,
  subtitle,
}: {
  children?: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold">{title}</h1>
          ) : (
            title
          )}
          {typeof subtitle === 'string' ? (
            <p className="py-6">{subtitle}</p>
          ) : (
            subtitle
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export function ellipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + '..' + str.substring(str.length - len, str.length)
    );
  }
  return str;
}

export function useTransactionToast() {
  return (signature: string) => {
    toast.success(
      <div className={'text-center'}>
        <div className="text-lg">Transaction sent</div>
        <ExplorerLink
          path={`tx/${signature}`}
          label={'View Transaction'}
          className="btn btn-xs btn-primary"
        />
      </div>
    );
  };
}
