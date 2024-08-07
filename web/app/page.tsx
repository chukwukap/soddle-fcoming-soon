import UtilityButton from "@/components/ui/button";
import AccountDetails from "./_components/account-details";
import SoddleLogo from "./_components/soddle-logo";

export default function Home() {
  return <div className="max-w-screen-sm min-h-screen mx-auto borderr py-10 flex flex-col gap-10">
    <SoddleLogo />

    <AccountDetails />
  </div>;
}