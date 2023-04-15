export const isLargestValue = (index: number, arr: number[]) => {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return arr[index] === arr[maxIndex];
}
