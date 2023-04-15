import { TypographyH2, TypographyP } from "@/components";
import { useVote } from "@/hooks/useVote";
import { cn, dataTimeToText, extractTextBeforeNewline, isLargestValue, sumArray } from "@/utils";
import { useRouter } from "next/router";

export default function Vote() {
  const router = useRouter()
  const { voteId } = router.query as { voteId: string };
  const vote = useVote(voteId);
  if (!!!vote || vote[0] == "0x0000000000000000000000000000000000000000") return <div className="text-3xl text-center my-20">404 no found</div>
  const isFinalized = vote.voteEnd.toNumber() * 1000 < new Date().getTime();
  return (<>
    <TypographyH2 className="my-8 pt-8 text-center">
      {extractTextBeforeNewline(vote.description)}
    </TypographyH2>
    <TypographyP className="text-center px-8 whitespace-pre-line">
      {vote.description}
    </TypographyP>
    <TypographyP className="text-right my-3">
      <>
        {"Voting Period : " + dataTimeToText(vote.voteStart)[0] + " ~ " + dataTimeToText(vote.voteEnd)[1]}<br></br>
        {"Total votes cast : " + sumArray(vote.voteCounts.map(v => v.toNumber()))}
      </>
    </TypographyP>
    {vote.voteOptions.length == 2 ? <>
      <div className="md:flex gap-4 my-6">
        {vote.voteOptions.map((option, index) => {
          const isLargest = isLargestValue(index, vote.voteCounts.map(v => v.toNumber()));
          return (<button key={index}
            className={cn(["flex-1 h-36 font-bold relative rounded-md flex max-md:w-full my-2 items-center text-2xl", isFinalized ? isLargest && vote.voteCounts.map(v => v.toNumber())[index] != 0 ? "bg-purple-400" : "bg-gray-100" : "bg-gray-200 hover:bg-gray-100 border-4 border-gray-200"])}
          >
            <span className="z-20 w-full text-center">{option}{isFinalized ? " : " + vote.voteCounts[index] : ""}</span>
            <div className={"h-36 w-[" + Math.floor(vote.voteCounts.map(v => v.toNumber())[index] / sumArray(vote.voteCounts.map(v => v.toNumber()))) + "%] bg-red-200 absolute rounded-md"}></div>
          </button>)
        })}
      </div>
    </> : <>
      <div className="my-6">
        {vote.voteOptions.map((option, index) => {
          const isLargest = isLargestValue(index, vote.voteCounts.map(v => v.toNumber()));
          return (<button key={index}
            className={cn(["flex-1 h-24 font-bold rounded-md w-full my-2 items-center justify-center text-xl", isFinalized ? isLargest && vote.voteCounts.map(v => v.toNumber())[index] != 0 ? "bg-purple-400" : "bg-gray-100" : "bg-gray-200 hover:bg-gray-100 border-4 border-gray-200"])}
          >
            <span>{option}{isFinalized ? " : " + vote.voteCounts[index] : ""}</span>
          </button>)
        })}
      </div>
    </>}
  </>)
}