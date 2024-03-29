import { Button, TypographyH2 } from "@/components/ui";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export const AppHeader = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:flex items-center justify-between">
      <Link href="/">
        <div className="w-full text-center sm:w-auto sm:text-light">
          <TypographyH2>Nice Votes</TypographyH2>
        </div>
      </Link>
      <div className="mt-2 md:mt-0 sm:flex justify-center gap-6 items-center ">
        <Link href="/create" className="flex justify-center">
          <Button size="sm" shadow="lg" className="max-sm:mb-2">
            Create Vote
          </Button>
        </Link>
        <div className="flex justify-center">
          <ConnectButton accountStatus="avatar" />
        </div>
      </div>
    </div>
  );
};
