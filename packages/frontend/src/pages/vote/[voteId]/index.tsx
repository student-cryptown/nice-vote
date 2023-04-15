import { TypographyH2, TypographyP } from "@/components";
import { useVote } from "@/hooks/useVote";
import { dataTimeToText, extractTextBeforeNewline, sumArray } from "@/utils";
import { useRouter } from "next/router";

export default function Vote() {
  const router = useRouter()
  const { voteId } = router.query as { voteId: string };
  const vote = useVote(voteId);

  return (<>
    {
      vote ? <>
        <TypographyH2 className="my-8 pt-8 text-center">
          {extractTextBeforeNewline(vote.description)}
        </TypographyH2>
        <TypographyP className="text-center px-8 whitespace-pre-line">
          {vote.description}
        </TypographyP>
        <TypographyP className="text-right my-3">
          <>
            {"Voting Period : " + dataTimeToText(vote.voteStart)[0] + " ~ " + dataTimeToText(vote.voteEnd)[1]}<br></br>
            {"Total votes cast : " + sumArray(vote.voteCount.map(v => v.toNumber()))}
          </>
        </TypographyP>
        {vote.voteOptions.length == 2 ? <>
          <div className="md:flex gap-4 my-6">
            {vote.voteOptions.map((option, index) => {
              return (<button key={index} className="flex-1 h-36 font-bold bg-gray-200 border-4 border-gray-200 rounded-md md:flex max-md:w-full my-2 items-center justify-center text-2xl hover:bg-gray-100">{option}</button>)
            })}
          </div>
        </> : <>
          <div className="my-6">
            {vote.voteOptions.map((option, index) => {
              return (<button key={index} className="flex-1 h-24 font-bold bg-gray-200 border-4 border-gray-200 rounded-md w-full my-2 items-center justify-center text-xl hover:bg-gray-100">{option}</button>)
            })}
          </div>
        </>}
      </> : <></>
    }
  </>)
}