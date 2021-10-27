/*
Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Function Description

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

int nums[n]: an array of integers
*/
function getSecondLargest(nums) {
  // Complete the function
  //let nums = [1,2,3]
  let maxElm = 0
  let maxElmPrev = 0;

  
  nums.sort((a, b) => {
    if (a > b) return 1
    return -1
  })

 // console.warn(nums)

  for (let el of nums) {
   // console.warn(el)
    if (el > maxElm) {
      maxElmPrev = maxElm
      maxElm = el
    }
  }

  let result = Math.min(maxElm, maxElmPrev)

 // console.warn({
 //   maxElm,
//    maxElmPrev,
//    result
//  })
  return result;
}
