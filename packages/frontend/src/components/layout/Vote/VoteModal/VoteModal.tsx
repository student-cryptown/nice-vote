import { Input, Label } from "@/components/ui";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/Modal";
import { useContractAddress } from "@/hooks/useContractAddress";
import { useVote } from "@/hooks/useVote";
import { Hex } from "@/types";
import { BigNumber } from "ethers";
import React, { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export const VoteModal: React.FC<{
  open: boolean;
  onClose: () => void;
  voteHash: string;
  voteOption?: number;
}> = ({ open, onClose, voteHash, voteOption }) => {
  const contracts = useContractAddress();
  const vote = useVote(voteHash);
  const [intmaxAddress, setIntmaxAddress] = useState("");
  const [castVotes, setCastVotes] = useState(0);

  const isValid =
    !!intmaxAddress &&
    !!castVotes &&
    typeof voteOption === "number" &&
    typeof castVotes === "number";

  const { config } = usePrepareContractWrite({
    address: contracts?.VOTE.address,
    abi: contracts?.VOTE.abi,
    functionName: "vote",
    args: [
      voteHash as Hex,
      intmaxAddress as Hex,
      BigNumber.from(castVotes),
      BigNumber.from(voteOption || 0),
    ],
    enabled: isValid,
  });
  console.log(isValid);
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  console.log({ intmaxAddress, castVotes, voteOption, isValid });
  return (
    <AlertDialog open={open} onOpenChange={() => onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`Do you want to vote for "${
            vote?.voteOptions[voteOption || 0]
          }"?`}</AlertDialogTitle>

          <div className="grid w-full items-center gap-1.5 pt-4">
            <Label>IntmaxAddressForVote</Label>
            <Input
              placeholder="0x00"
              type="text"
              onChange={(e) => {
                setIntmaxAddress(e.target.value);
              }}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 py-4">
            <Label>Cast Votes</Label>
            <Input
              placeholder="1"
              type="number"
              onChange={(e) => {
                setCastVotes(parseInt(e.target.value));
              }}
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={!isValid}
            onClick={() => {
              return write && write();
            }}
          >
            Vote 👍️
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
