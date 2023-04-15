import { TypographyH2, VoteCard } from "@/components";

export default function Home() {
  return (
    <>
      <div className="text-center my-6">
        <TypographyH2>
          Voting is Open
        </TypographyH2>
      </div>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </>
  )
}
