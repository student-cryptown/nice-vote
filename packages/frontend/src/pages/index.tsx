import { VoteCard } from "@/components";

export default function Home() {
  return (
    <>
      <div className="text-center">
        Voting is Open
      </div>
      <VoteCard
        title="Best Ice Cream Flavor"
        shortDescription="Choose your favorite ice cream flavor from the list below."
        description="Summer is here and nothing beats the heat like a delicious scoop of ice cream. We want to know what's your all-time favorite flavor. Is it classic chocolate or something more adventurous like mint chocolate chip? Let your taste buds do the talking and choose the best flavor that satisfies your sweet tooth."
        options={[
          "Chocolate",
          "Mint Chocolate Chip"
        ]}
        votesCast={1420}
        author={{
          name: "moons14",
          avatar: "https://moons14.com/icon.png"
        }}
      />
    </>
  )
}
