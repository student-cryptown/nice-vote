export const findLargestIndexes = (arr: number[]) => {
  let maxVal = arr[0];
  let maxIndexes = [0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
      maxIndexes = [i];
    } else if (arr[i] === maxVal) {
      maxIndexes.push(i);
    }
  }

  return maxIndexes;
}
