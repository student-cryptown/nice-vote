import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TypographyH2,
  VoteCard,
} from "@/components";
import { useVoteHashes } from "@/hooks/useVoteHashes";

export default function Home() {
  const voteHashes = useVoteHashes();
  return (
    <>
      <div className="flex">
        <div className="flex"></div>
        <div className="w-full my-0 py-0">
          <Tabs defaultValue="open" className="max-w-full mb-6">
            <TabsContent value="open" className="p-0 rounded-none border-none">
              <div className="text-center my-6">
                <TypographyH2>Open Votes</TypographyH2>
              </div>
            </TabsContent>
            <TabsContent
              value="finalized"
              className="p-0 rounded-none border-none"
            >
              <div className="text-center my-6">
                <TypographyH2>Finalized Votes</TypographyH2>
              </div>
            </TabsContent>
            <div className="flex justify-center md:justify-end w-full mb-4">
              <TabsList>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="finalized">Finalized</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="open" className="p-0 rounded-none border-none">
              <div className="grid gap-5 md:grid-cols-2 content-stretch lg:grid-cols-2 xl:grid-cols-3 grid-rows-1 align-content-stretch">
                {voteHashes && voteHashes.length != 0 ? (
                  <>
                    {voteHashes
                      .slice()
                      .reverse()
                      .map((voteHash, index) => {
                        return (
                          <VoteCard id={voteHash} key={index} showOpenOnly />
                        );
                      })}
                  </>
                ) : (
                  <>
                    {[0, 0, 0, 0].map((_, _v) => {
                      return (
                        <div
                          className="animate-pulse w-full h-40 bg-gray-100"
                          key={_v + "loading"}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </TabsContent>
            <TabsContent
              value="finalized"
              className="p-0 rounded-none border-none"
            >
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {voteHashes && voteHashes.length != 0 ? (
                  <>
                    {voteHashes
                      .slice()
                      .reverse()
                      .map((voteHash, index) => {
                        return (
                          <VoteCard
                            id={voteHash}
                            key={index}
                            showFinalizedOnly
                          />
                        );
                      })}
                  </>
                ) : (
                  <>
                    {[0, 0, 0, 0].map((_, _v) => {
                      return (
                        <div
                          className="animate-pulse w-full h-40 bg-gray-100"
                          key={_v + "loading"}
                        />
                      );
                    })}
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
