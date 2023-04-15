import { Button, Tabs, TabsContent, TabsList, TabsTrigger, TypographyH2, VoteCard } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex"></div>
        <div className="w-full">
          <Tabs defaultValue="open" className="max-w-full mb-6">
            <TabsContent value="open" className="p-0 rounded-none border-none">
              <div className="text-center my-6">
                <TypographyH2>
                  Open Votes
                </TypographyH2>
              </div>
            </TabsContent>
            <TabsContent value="your" className="p-0 rounded-none border-none">
              <div className="text-center my-6">
                <TypographyH2>
                  Vote for you
                </TypographyH2>
              </div>
            </TabsContent>
            <TabsContent value="finalized" className="p-0 rounded-none border-none">
              <div className="text-center my-6">
                <TypographyH2>
                  Finalized Votes
                </TypographyH2>
              </div>
            </TabsContent>
            <div className="flex justify-end w-full mb-4">
              <TabsList>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="your">Your</TabsTrigger>
                <TabsTrigger value="finalized">Finalized</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="open" className="p-0 rounded-none border-none">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
            </TabsContent>
            <TabsContent value="your" className="p-0 rounded-none border-none">
            </TabsContent>
            <TabsContent value="finalized" className="p-0 rounded-none border-none">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
                  finalized
                  rate={45}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button size="lg" className="my-8">Search from all votes</Button>
      </div>
    </>
  )
}
