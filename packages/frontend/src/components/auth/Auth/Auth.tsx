import { TypographyH1 } from "@/components/ui";
import { useContractAddress } from "@/hooks/useContractAddress";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";

export const Auth = ({ children }: { children: ReactElement }) => {
  const contracts = useContractAddress();
  return <>{
    contracts?.VOTE.address ? children : <div className="w-full py-40">
      <TypographyH1 className="text-center w-full">Please Connect Wallet</TypographyH1>
      <div className="my-12 flex justify-center">
        <ConnectButton />
      </div>
    </div>
  }</>
}