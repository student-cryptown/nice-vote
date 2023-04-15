import { TypographyH2, TypographyH4, TypographyP } from "@/components";
import type { Vote } from "@/types/vote.type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Vote() {
  const router = useRouter()
  const { voteId } = router.query;
  const [vote, setVote] = useState<Vote | null>(null)

  useEffect(() => {
    setVote({
      title: "Do you like Apex Legends?",
      description: "Summer is here and nothing beats the heat like a delicious scoop of ice cream. We want to know what's your all-time favorite flavor. Is it classic chocolate or something more adventurous like mint chocolate chip? Let your taste buds do the talking and choose the best flavor that satisfies your sweet tooth.",
      options: ["YES!", "NO!", "Wooo!!"],
      votesCast: 120,
      author: {
        name: "moons14",
        avatar: "https://moons14.com/icon.png"
      },
    })
  }, [voteId])

  return (<>
    {
      vote ? <>
        <TypographyH2 className="my-8 text-center">
          {vote.title}
        </TypographyH2>
        <TypographyP className="text-center px-8 ">
          {vote.description}
        </TypographyP>
        <TypographyP className="text-right my-3">
          Voting Period:1920/12/23 ~ 2046/03/20 12:04
        </TypographyP>
        {vote.options.length == 2 ? <>
          <div className="md:flex gap-4 my-6">
            {vote.options.map((option, index) => {
              return (<button key={index} className="flex-1 h-36 font-bold bg-gray-200 border-4 border-gray-400 rounded-md md:flex max-md:w-full my-2 items-center justify-center text-2xl hover:bg-gray-700 hover:text-white">{option}</button>)
            })}
          </div>
        </> : <>
          <div className="my-6">
            {vote.options.map((option, index) => {
              return (<button key={index} className="flex-1 h-24 font-bold bg-gray-200 border-4 border-gray-400 rounded-md w-full my-2 items-center justify-center text-xl hover:bg-gray-700 hover:text-white">{option}</button>)
            })}
          </div>
        </>}
        <TypographyH4 className="mt-6 text-center">
          Your balance is{" "}<strong>120</strong>{" "}tokens
        </TypographyH4>
      </> : <></>
    }
  </>)
}