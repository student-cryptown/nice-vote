
import { BigNumber } from 'ethers'
import { useContractRead } from 'wagmi'
import { useContractAddress } from './useContractAddress'

export const useVoteHashes = () => {
  const contracts = useContractAddress()
  const hashes = useContractRead({
    abi: contracts?.VOTE?.abi,
    address: contracts?.VOTE?.address,
    functionName: 'getProposalHashes',
    args: [BigNumber.from(0), BigNumber.from(1000)],
    enabled: !!contracts?.VOTE?.abi && !!contracts?.VOTE?.address
  })

  return hashes.data
}