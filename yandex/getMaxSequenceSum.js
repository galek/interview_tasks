/*
найти максимально возможную сумму из подпоследовательности
getMaxSequenceSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //  6 потому что [4, -1, 2, 1] дает максимальную последовательность
*/

function getMaxSequenceSum(arr) {
  let sum = 0
  let maxSum = 0
  
  for (let el of arr) {
    sum += el
    if (sum > maxSum) {
      maxSum = sum
    }
    if (sum < 0) sum = 0
  }

  return maxSum
}

console.warn(getMaxSequenceSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
