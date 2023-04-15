import { ethers, network } from "hardhat";

const settings = {
  534353: {
    offerManager: "0x007c969728eE4f068ceCF3405D65a037dB5BeEa1",
    intmaxAsset: "0x61a3f48fbedfb754"
  },
  1442: {
    offerManager: "0x161a72Bc1b76586a36A9014Dd58d401eE2B24094",
    intmaxAsset: "0x61a3f48fbedfb754"
  }
} as { [chainId: number]: { offerManager: string; intmaxAsset: string } }


async function main() {
  const setting = settings[network.config.chainId || 1];
  console.log(setting)
  const Factory = await ethers.getContractFactory("SimpleVote");
  const contract = await Factory.deploy(
    setting.offerManager,
    "0x" + setting.intmaxAsset.slice(2).padStart(64, "0")
  );
  await contract.deployed();
  console.log("SimpleVote deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
