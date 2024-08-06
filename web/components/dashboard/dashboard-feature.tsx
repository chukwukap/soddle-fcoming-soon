import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full h-screen bg-[#181716] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-16 grid-rows-7">
        {[...Array(16)].map((_, i) => (
          <div key={`col-${i}`} className="border-l border-white border-opacity-5" />
        ))}
        {[...Array(7)].map((_, i) => (
          <div key={`row-${i}`} className="border-t border-white border-opacity-5" />
        ))}
      </div>

      {/* Green glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1157px] h-[207px] bg-[#2FFF2B] bg-opacity-25 blur-[100px] rounded-full" />

      {/* Top logo */}
      <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[403px] h-[52px]">
        <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
      </div>

      {/* Main content box */}
      <div className="absolute top-[142px] left-1/2 transform -translate-x-1/2 w-[436px] h-[107px] bg-gradient-to-br from-[#002D00] to-[#009300] bg-opacity-50 border border-[#2A342A] rounded-t-lg rounded-br-lg">
        {/* Content goes here */}
      </div>

      {/* Bottom icons */}
      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-5 opacity-50">
        <Image src="/icon1.png" alt="Icon 1" width={30} height={30} />
        <Image src="/icon2.png" alt="Icon 2" width={30} height={30} />
      </div>

      {/* Other elements can be added here */}
    </main>
  );
}