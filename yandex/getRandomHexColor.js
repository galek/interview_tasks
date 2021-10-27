// getRandomHexColor() => #0f19ab;

console.warn("#"+Math.floor(Math.random()*16777215).toString(16))

/*
Equal code:
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
*/
