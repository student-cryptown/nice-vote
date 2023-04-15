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
      shortDescription: ""
    })
  }, [voteId])

  return (<>
    <TypographyH2>
      { }
    </TypographyH2>
  </TypographyH2 >)
}