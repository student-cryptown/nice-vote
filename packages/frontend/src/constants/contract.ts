import SimpleVoteABI from "./abis/SimpleVote.ABI";

export const CONTRACTS = {
  534353: {
    VOTE: {
      address: "0x48b0d3C64b0886FD5F3648F5Ee13c8F05670D681",
      abi: SimpleVoteABI
    }
  }
} as const

export type CHAINS = keyof typeof CONTRACTS