export type Vote = {
  title: string,
  description: string,
  votesCast: number,
  author: {
    name: string,
    avatar: string
  },
  options: string[],
  finalized?: boolean
  rate?: number
}