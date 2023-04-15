import { Avatar, AvatarImage, TypographyH3, TypographyP } from "@/components/ui"

export const VoteCard = ({
  title,
  shortDescription,
  description,
  options,
  votesCast,
  author
}: {
  title: string,
  shortDescription: string,
  description: string,
  options: string[],
  votesCast: number,
  author: {
    name: string,
    avatar: string
  }
}) => {
  return (<div className="rounded-md border-2 border-gray-800 p-4 cursor-pointer">
    <TypographyH3>
      {title}
    </TypographyH3>
    <TypographyP className="mt-2 line-clamp-3">
      {shortDescription}
    </TypographyP>
    <div className="flex items-center gap-2 justify-end mt-2">
      <div className="flex-1">
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
  </div>)
}