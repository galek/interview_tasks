/*
In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

Task

First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
*/
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"]
  for (let el of s) {
    if (vowels.includes(el))
      console.log(el)
  }
  for (let el of s) {
    if (vowels.includes(el)) {
      continue
    }
    console.log(el)
  }
}
