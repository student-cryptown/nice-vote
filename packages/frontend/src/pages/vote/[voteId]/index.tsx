import { TypographyH2 } from "@/components";
import type { Vote } from "@/types/vote.type";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Vote() {
  const router = useRouter()
  const { voteId } = router.query;
  const [vote, setVote] = useState<Vote | null>(null)

  // useEffect(() => {
  //   setVote({
  //     title: "Do you like Apex Legends?",
  //     shortDescription: ""
  //   })
  // }, [voteId])

  return (<>
    <TypographyH2>
      test
    </TypographyH2>
  </>)
}