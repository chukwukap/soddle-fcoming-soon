'use client';
import ConnectWalletButton from '@/components/connect-wallet-button';
import Button from '@/components/ui/button2';
// import Button from '@/components/ui/button2';
import { Wallet } from '@/components/wallet';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function page() {
  return (
    <div className="min-h-[70vh]  grid place-content-center">
      <Button className="w-40" disabled>
        COMING SOON...
      </Button>
      {/* <WalletMultiButton /> */}
    </div>
  );
}

export default page;
