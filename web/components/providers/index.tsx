'use client';

import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/providers/solana-provider';
import { Provider } from 'jotai';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ReactQueryProvider>
        <ClusterProvider>
          <SolanaProvider>{children}</SolanaProvider>
        </ClusterProvider>
      </ReactQueryProvider>
    </Provider>
  );
}
