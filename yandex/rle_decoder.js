const tmp = 'A4B55'

function isNumeric(value) {
  return /^\d+$/.test(value);
}

let decode = ''

let counter = '';
let lastSym = ''

for (let i = 0; i < tmp.length; i++) {
  if (!isNumeric(tmp[i])) {
    lastSym = tmp[i]
    console.warn('Saved: ' + lastSym);
    counter = ''
  } else {
    counter += tmp[i]
    console.warn('Counter: ' + counter);
  }

  for (let j = 0; j < parseInt(counter); j++) {
    console.warn(`lastSym: ${lastSym} j: ${j}`)
    decode += lastSym
  }
}


console.warn(decode)
