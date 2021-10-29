/*
https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true
*/

function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  }
}
