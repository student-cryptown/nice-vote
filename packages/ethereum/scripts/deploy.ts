import { ethers } from "hardhat";

const offerManagers = {}


async function main() {
  const Factory = await ethers.getContractFactory("SimpleVote");
  const contract = await Factory.deploy(
    ethers.constants.AddressZero, ethers.constants.AddressZero
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
