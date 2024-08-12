import Image from 'next/image';

export default function SoddleLogo() {
  return (
    <Image
      src={'/soddle-logo.svg'}
      alt="Soddle Logo"
      width={503}
      height={2}
      className="w-full"
      priority
    />
  );
}
