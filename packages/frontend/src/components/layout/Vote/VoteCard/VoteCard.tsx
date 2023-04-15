import { Avatar, AvatarImage, TypographyH3, TypographyP } from "@/components/ui";
import { useVote } from "@/hooks/useVote";
import { extractTextBeforeNewline, sumArray } from "@/utils";
import Link from "next/link";
import { useENSName } from 'use-ens-name';

export const VoteCard = ({
  id,
  showOpenOnly = false,
  showFinalizedOnly = false,
}: {
  id: string;
  showOpenOnly?: boolean;
  showFinalizedOnly?: boolean;
}) => {
  const vote = useVote(id);

  const nowDatetime = new Date().getTime();
  const proposerName = useENSName(vote ? vote.proposer : "");

  if (!vote) return <></>;
  if (showOpenOnly && vote.voteEnd.toNumber() * 1000 < nowDatetime)
    return <></>;
  if (showFinalizedOnly && vote.voteEnd.toNumber() * 1000 > nowDatetime)
    return <></>;

  return (
    <Link href={"/vote/" + id}>
      <div className="rounded-md border-2 h-full border-gray-800 pt-4 cursor-pointer hover:-translate-y-1">
        <div className="px-4 pb-3 flex flex-col h-full">
          <div className="flex-1">
            <TypographyH3 className="line-clamp-1">
              {extractTextBeforeNewline(vote.description)}
            </TypographyH3>
            <TypographyP className="mt-2 line-clamp-3">
              {vote.description}
            </TypographyP>
          </div>
          <div className="flex items-center gap-2 justify-end mt-4">
            <div className="flex-1 flex items-center">
              <TypographyP>
                {"Total votes cast : " + sumArray(vote.voteCounts.map((count) => count.toNumber()))}
              </TypographyP>
            </div>

            <div>
              <Avatar className="w-10 h-10">
                <AvatarImage src={"https://source.boringavatars.com/beam/120/" + (proposerName || vote.proposer)} />
              </Avatar>
            </div>
            <div className="max-w-[33%] flex items-center line-clamp-1">
              <TypographyP>
                {proposerName || vote.proposer}
              </TypographyP>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
