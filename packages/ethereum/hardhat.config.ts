import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!PRIVATE_KEY)
  throw new Error("Please set your PRIVATE_KEY in a .env file");

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    scrollalpha: {
      url: `https://alpha-rpc.scroll.io/l2`,
      chainId: 534353,
      accounts: [PRIVATE_KEY],
    },
    polygonzkevmtest: {
      url: `https://rpc.public.zkevm-test.net`,
      chainId: 1442,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
