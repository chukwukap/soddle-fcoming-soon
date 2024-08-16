'use client';

import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProviders } from '@/components/providers/solana-providers';
import { Provider as JotaiProvider } from 'jotai';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ReactQueryProvider>
        <ClusterProvider>
          <SolanaProviders>{children}</SolanaProviders>
        </ClusterProvider>
      </ReactQueryProvider>
    </JotaiProvider>
  );
}
