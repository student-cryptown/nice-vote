import { BigNumber } from "ethers";

export const dataTimeToText = (datetime: BigNumber) => {
  let date = new Date(datetime.toNumber() * 1000);
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  return [dateString, `${dateString} ${timeString}`];
}