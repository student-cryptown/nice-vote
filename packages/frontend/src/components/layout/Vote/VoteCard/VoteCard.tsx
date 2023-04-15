import { TypographyH3, TypographyP } from "@/components/ui";
import { useVote } from "@/hooks/useVote";
import { extractTextBeforeNewline, sumArray } from "@/utils";
import Link from "next/link";

export const VoteCard = ({
  id, showOpenOnly = false, showFinalizedOnly = false
}: { id: string, showOpenOnly?: boolean, showFinalizedOnly?: boolean }) => {

  const vote = useVote(id)

  const nowDatetime = new Date().getTime();

  if (!vote) return <></>;
  if (showOpenOnly && vote.voteEnd.toNumber() * 1000 < nowDatetime) return <></>;
  if (showFinalizedOnly && vote.voteEnd.toNumber() * 1000 > nowDatetime) return <></>;

  return (<Link href={"/vote/" + id}>
    <div className="rounded-md border-2 border-gray-800 pt-4 cursor-pointer hover:-translate-y-1">
      <div className="px-4 pb-3">
        <TypographyH3 className="line-clamp-1">
          {extractTextBeforeNewline(vote.description)}
        </TypographyH3>
        <TypographyP className="mt-2 line-clamp-3">
          {vote.description}
        </TypographyP>
        <div className="flex items-center gap-2 justify-end mt-2">
          <div className="flex-1 flex items-center">
            <TypographyP>
              {"Total votes cast : " + sumArray(vote.voteCount.map((count) => count.toNumber()))}
            </TypographyP>
          </div>
        </div>
      </div>
    </div>
  </Link>)
}