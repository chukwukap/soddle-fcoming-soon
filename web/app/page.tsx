import ConnectWalletButton from '@/components/connect-wallet-button';
import { WalletButton } from '@/components/providers/solana-provider';

function page() {
  return (
    <div className="min-h-[80vh]  grid place-content-center">
      <ConnectWalletButton />
    </div>
  );
}

export default page;
