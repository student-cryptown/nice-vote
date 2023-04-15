import { CHAINS, CONTRACTS } from '@/constants/contract';
import { useNetwork } from 'wagmi';

export const useContractAddress = () => {
  const { chain } = useNetwork()
  const contracts = chain?.id && CONTRACTS[chain.id as CHAINS]
  return contracts || null
}