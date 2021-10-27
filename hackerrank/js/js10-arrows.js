/*
Objective

In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

Task

Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

If the element is even, multiply the element by .
If the element is odd, multiply the element by .
The function must then return the modified array.
*/

function modifyArray(nums) {
  let result = []
  let fun = () => {
    for (let i = 0; i < nums.length; i++) {
      let el = nums[i]
      if (el % 2) {
        result.push(el*3)
      } else {
        result.push(el*2)
      }
    }
  }

  fun()
  return result
}
