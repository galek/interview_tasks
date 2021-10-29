//https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
function simpleArraySum(ar) {
  // Write your code here
  let sum = 0;
  for (let el of ar) {
    sum += el
  }

  return sum
}

console.warn(simpleArraySum([1,2,3,4,10,11]))
