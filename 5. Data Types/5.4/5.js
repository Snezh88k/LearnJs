function getMaxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentAmount = 0;

    for (let j = i; j < arr.length; j++) {
      currentAmount += arr[j];
      if (currentAmount > maxSum) {
        maxSum = currentAmount;
      }
    }
  }

  return maxSum;
}
