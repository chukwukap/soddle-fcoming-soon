import ConnectWalletButton from '@/components/connect-wallet-button';
import { WalletButton } from '@/components/providers/solana-provider';
import Button from '@/components/ui/button2';

function page() {
  return (
    <div className="min-h-[80vh]  grid place-content-center">
      <Button className="w-36">Connect wallet</Button>
    </div>
  );
}

export default page;
