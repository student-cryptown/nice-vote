
import { ethers } from "hardhat";


describe("Vote", function () {
  it("Just Vote", async function () {
    const OfferManager = await ethers.getContractFactory("OfferManager");
    const offerManager = await OfferManager.deploy();

    const Vote = await ethers.getContractFactory("SimpleVote");
    const vote = await Vote.deploy(offerManager.address, '0x00000000000000000000000000000000000000000000000061a3f48fbedfb754');

    const timestamp = await ethers.provider.getBlock('latest').then(block => block.timestamp)

    await vote.propose(
      timestamp + 100000,
      "YEAH",
      ["YES", "OR", "NO"]
    )

    const [hash] = await vote.getProposalHashes(0, 1)

    console.log(await vote.getProposal(hash))

    await vote.vote(hash, '0x00000000000000000000000000000000000000000000000061a3f48fbedfb754', 1000, 0)

    console.log(await vote.getProposal(hash))
  });
});
