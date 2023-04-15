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
import { useVote } from "@/hooks/useVote";
import React, { useState } from "react";

export const VoteModal: React.FC<{
  open: boolean;
  onClose: () => void;
  voteHash: string;
  voteOption?: number;
}> = ({ open, onClose, voteHash, voteOption }) => {
  const vote = useVote(voteHash);
  const [intmaxAddress, setIntmaxAddress] = useState("");
  const [castVotes, setCastVotes] = useState(0);
  return (
    <AlertDialog open={open} onOpenChange={() => onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`Do you want to vote for "${
            vote?.voteOptions[voteOption || 0]
          }"?`}</AlertDialogTitle>

          <div className="grid w-full items-center gap-1.5 my-5">
            <Label>IntmaxAddressForVote</Label>
            <Input
              placeholder="0x00"
              type="text"
              value={intmaxAddress}
              onChange={(e) => {
                setIntmaxAddress(e.target.value);
              }}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 my-5">
            <Label>Cast Votes</Label>
            <Input
              placeholder="1"
              type="number"
              value={castVotes}
              onChange={(e) => {
                setCastVotes(parseInt(e.target.value));
              }}
            />
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Vote 👍️</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
