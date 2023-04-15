export type Vote = {
  title: string,
  shortDescription: string,
  description: string,
  votesCast: number,
  author: {
    name: string,
    avatar: string
  },
  finalized?: boolean
  rate?: number
}