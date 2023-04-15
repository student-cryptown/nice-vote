import { Avatar, AvatarImage, Progress, TypographyH3, TypographyP } from "@/components/ui"
import { Vote } from "@/types/vote.type"

export const VoteCard = ({
  rate,
  title,
  shortDescription,
  description,
  votesCast,
  author,
  finalized = false
}: Vote) => {
  return (<div>
    <div className="rounded-md border-2 border-gray-800 pt-4 cursor-pointer hover:-translate-y-1">
      <div className="px-4 pb-3">
        <TypographyH3>
          {title}
        </TypographyH3>
        <TypographyP className="mt-2 line-clamp-3">
          {shortDescription}
        </TypographyP>
        <div className="flex items-center gap-2 justify-end mt-2">
          <div className="flex-1 flex items-center">
            <TypographyP>
              {"Total votes cast : " + votesCast}
            </TypographyP>
          </div>
          <div>
            <Avatar className="w-10 h-10">
              <AvatarImage src={author.avatar} />
            </Avatar>
          </div>
          <div className="max-w-[33%] flex items-center line-clamp-1">
            <TypographyP>
              {author.name}
            </TypographyP>
          </div>
        </div>
      </div>
      {rate ?
        <Progress value={rate} className="rounded-none rounded-b h-1.5" />
        : ""}
    </div>
  </div>)
}