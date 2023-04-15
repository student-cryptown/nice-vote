import SimpleVoteABI from "./abis/SimpleVote.ABI";

export const CONTRACTS = {
  534353: {
    VOTE: {
      address: "0x78bcA641439b665753e07A5E1D5b12469e066cC6",
      abi: SimpleVoteABI
    }
  }
} as const

export type CHAINS = keyof typeof CONTRACTS