import { Button, Input, Label, Textarea, TypographyH2 } from "@/components";
import { useContractAddress } from "@/hooks/useContractAddress";
import { formatDate } from "@/utils";
import { BigNumber } from "ethers";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

export default function CreateVote() {
  const [input, setInput] = useState<{
    title: string;
    description: string;
    votingEnds: Date | null;
    options: string[];
  }>({
    title: "",
    description: "",
    votingEnds: null,
    options: [],
  });
  const contracts = useContractAddress();
  const { config } = usePrepareContractWrite({
    address: contracts?.VOTE.address,
    abi: contracts?.VOTE.abi,
    functionName: "propose",
    args: [
      input.votingEnds
        ? BigNumber.from(Math.floor(input.votingEnds.getTime() / 1000))
        : BigNumber.from(Math.floor(new Date().getTime() / 1000)),
      input.title + (input.description ? "\n" + input.description : ""),
      input.options,
    ],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <TypographyH2 className="text-center mt-3">Create Vote</TypographyH2>
      <div className="grid w-full items-center gap-1.5 my-5">
        <Label htmlFor="email-2">Title</Label>
        <Input
          placeholder="Title"
          value={input.title}
          onChange={(e) => {
            setInput({
              ...input,
              title: e.target.value,
            });
          }}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 my-5">
        <Label htmlFor="email-2">Description</Label>
        <Textarea
          rows={5}
          placeholder="Description"
          value={input.description}
          onChange={(e) => {
            setInput({
              ...input,
              description: e.target.value,
            });
          }}
        />
      </div>
      <div className="grid w-full items-center gap-1.5 my-5">
        <Label htmlFor="email-2">Voting Ends</Label>
        <Input
          type="datetime-local"
          placeholder="Voting Ends"
          value={input.votingEnds ? formatDate(input.votingEnds) : ""}
          onChange={(e) => {
            setInput({
              ...input,
              votingEnds: new Date(e.target.value),
            });
          }}
        />
        <p className="text-sm text-slate-500">
          Voting will end at the specified time
        </p>
      </div>
      <div className="grid w-full items-center gap-1.5 my-5">
        <Label htmlFor="email-2">Options</Label>
        {input.options.map((option, index) => {
          return (
            <Input
              type="text"
              key={"option" + index}
              placeholder="option"
              value={option}
              onChange={(e) => {
                setInput({
                  ...input,
                  options: input.options.map((v, _i) =>
                    _i == index ? e.target.value : v
                  ),
                });
              }}
            />
          );
        })}

        <div className="w-full flex justify-end mt-3">
          <button
            className="py-1 px-4 rounded-full border border-gray-700 flex items-center hover:bg-gray-200"
            onClick={() => {
              setInput({ ...input, options: [...input.options, ""] });
            }}
          >
            <Plus size={20} />
            add options
          </button>
        </div>
        <p className="text-sm text-slate-500">
          Set the options available for voting
        </p>
      </div>
      <Button
        className="w-full mt-2"
        size="lg"
        onClick={() => {
          if (
            write &&
            !isLoading &&
            input.title &&
            input.votingEnds &&
            input.votingEnds.getTime() > new Date().getTime()
          ) {
            write();
          } else {
            alert("Please enter everything correctly.");
          }
        }}
      >
        Publish Vote!
      </Button>
      {isLoading ? (
        <div className="mt-4 w-full h-40 flex items-center justify-center text-3xl animate-pulse bg-gray-200 mb-8">
          Loading...
        </div>
      ) : (
        <></>
      )}
      {isSuccess ? (
        <div className="mt-4 w-full h-40 flex items-center justify-center text-xl bg-gray-100 mb-8">
          <div className="">
            <div className="text-center w-full mb-3">
              Success<br></br>
              It takes time for the process to complete.
            </div>
            <Link href="/" className="flex justify-center">
              <Button>Back home</Button>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
