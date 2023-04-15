import { TypographyH2, TypographyH3, TypographyP } from "@/components";
import { VoteModal } from "@/components/layout/Vote/VoteModal/VoteModal";
import { useVote } from "@/hooks/useVote";
import {
  cn,
  dataTimeToText,
  extractTextBeforeNewline,
  findLargestIndexes,
  isLargestValue,
  sumArray,
} from "@/utils";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Vote() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { voteId } = router.query as { voteId: string };
  const vote = useVote(voteId);
  const [voteOption, setVoteOption] = useState<number | null>(null);

  const handleVote = (voteOption: number) => {
    setVoteOption(voteOption);
    setOpen(true);
  };

  if (!vote || vote?.proposer === "0x0000000000000000000000000000000000000000")
    return <div className="text-3xl text-center my-20">404 no found</div>;

  const isFinalized = vote.voteEnd.toNumber() * 1000 < new Date().getTime();
  return (
    <>
      <VoteModal
        open={open}
        onClose={() => setOpen(false)}
        voteHash={voteId}
        voteOption={voteOption as number}
      />

      <TypographyH2 className="my-8 pt-8 text-center">
        {extractTextBeforeNewline(vote.description)}
      </TypographyH2>
      <TypographyP className="text-center px-8 whitespace-pre-line">
        {vote.description}
      </TypographyP>
      <TypographyP className="text-right my-3">
        <>
          {"Voting Period : " +
            dataTimeToText(vote.voteStart)[0] +
            " ~ " +
            dataTimeToText(vote.voteEnd)[1]}
          <br></br>
          {"Total votes cast : " +
            sumArray(vote.voteCounts.map((v) => v.toNumber()))}
        </>
      </TypographyP>
      {isFinalized ?
        <TypographyH3 className="text-center">
          {"Result : " + findLargestIndexes(vote.voteCounts.map(v => v.toNumber())).map(_i => vote.voteOptions[_i]).join(",")}
        </TypographyH3>
        : <></>}
      {vote.voteOptions.length == 2 ? (
        <>
          <div className="md:flex gap-4 my-6">
            {vote.voteOptions.map((option, index) => {
              const isLargest = isLargestValue(
                index,
                vote.voteCounts.map((v) => v.toNumber())
              );
              return (
                <button
                  key={index}
                  onClick={() => { !isFinalized ? handleVote(index) : () => void 0 }}
                  className={cn([
                    "flex-1 h-36 font-bold relative rounded-md flex max-md:w-full my-2 items-center text-2xl p-0",
                    isFinalized
                      ? "bg-gray-100"
                      : "bg-gray-200",
                  ])}
                >
                  <span className="z-20 w-full text-center relative">
                    {option}
                    {isFinalized ? " : " + vote.voteCounts[index] : ""}
                  </span>
                  <div
                    className={"h-36 z-0 bg-red-200 absolute rounded-md"}
                    style={{
                      width: `${Math.floor(
                        vote.voteCounts.map((v) => v.toNumber())[index] /
                        sumArray(vote.voteCounts.map((v) => v.toNumber())) * 100
                      )}%`,
                    }}
                  ></div>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="my-6">
            {vote.voteOptions.map((option, index) => {
              const isLargest = isLargestValue(
                index,
                vote.voteCounts.map((v) => v.toNumber())
              );
              return (
                <button
                  key={index}
                  onClick={() => { !isFinalized ? handleVote(index) : () => void 0 }}
                  className={cn([
                    "flex-1 h-24 font-bold relative rounded-md w-full my-2 items-center justify-center text-xl",
                    isFinalized
                      ? "bg-gray-100"
                      : "bg-gray-200",
                  ])}
                >
                  <span className="z-20 w-full text-center relative">
                    {option}
                    {isFinalized ? " : " + vote.voteCounts[index] : ""}
                  </span>
                  <div
                    className={"h-24 z-0 bg-red-200 absolute top-0 left-0 rounded-md"}
                    style={{
                      width: `${Math.floor(
                        vote.voteCounts.map((v) => v.toNumber())[index] /
                        sumArray(vote.voteCounts.map((v) => v.toNumber())) * 100
                      )}%`,
                    }}
                  ></div>
                </button>
              );
            })}
          </div>
        </>
      )
      }
    </>
  );
}
