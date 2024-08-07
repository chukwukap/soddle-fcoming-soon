import './global.css';
import { UiLayout } from '@/components/ui/ui-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import { ReactQueryProvider } from './react-query-provider';
import localFont from 'next/font/local';


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

const links: { label: string; path: string }[] = [
  { label: 'Account', path: '/account' },
  { label: 'Clusters', path: '/clusters' },
];




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${wremena.variable}  font-wremena bg-[#181716] overflow-hidden `}>

        {/* Green glow effect at the top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[167px] bg-[#2FFF2B] bg-opacity-25 blur-[100px] rounded-full" />

        {/* Green glow effect at the bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[167px] bg-[#2FFF2B] bg-opacity-25 blur-[100px] rounded-full" />


        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout links={links}>{children}</UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}