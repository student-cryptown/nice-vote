import { useContractRead } from 'wagmi';
import { useContractAddress } from "./useContractAddress";

export const useVote = (voteId: string) => {
  const contracts = useContractAddress();
  const { data, isError, isLoading } = useContractRead({
    address: contracts?.VOTE.address,
    abi: contracts?.VOTE.abi,
    functionName: 'getProposal',
    args: [voteId as `0x${string}`],
    enabled: !!contracts?.VOTE?.abi && !!contracts?.VOTE?.address
  })

  return data;
}