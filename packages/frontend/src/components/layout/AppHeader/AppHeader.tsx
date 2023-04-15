import { TypographyH2, TypographyP } from "@/components/ui"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"

export const AppHeader = () => {
  return (<div className="container mx-auto px-4 py-4 md:flex items-center justify-between">
    <Link href="/">
      <div className="w-full text-center sm:w-auto sm:text-light">
        <TypographyH2>
          Nice Votes
        </TypographyH2>
      </div>
    </Link>
    <div className="mt-2 md:mt-0 sm:flex justify-end gap-6 items-center">
      <div className="flex justify-end">
        <TypographyP>
          balance :{" "}
          <strong>120</strong>
          {" "}tokens
        </TypographyP>
      </div>
      <div className="mt-3 sm:mt-0 flex justify-end">
        <ConnectButton accountStatus="avatar" />
      </div>
    </div>
  </div>)
}