/*Дана строка, состоящая из букв A-Z:
AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
Нужно написать функцию RLE, которая на выходе даст строку вида:
A4B3C2XYZD4E3F3A6B28
И сгенерирует ошибку, если на вход пришла невалидная строка.
Пояснения:
Если символ встречается 1 раз, он остается без изменений;
Если символ повторяется более 1 раза, к нему добавляется количество повторений.
*/

// Regex: https://regex101.com/r/r4mIkh/1
// Solution: https://jsfiddle.net/galek/k6hfvdjq/2/

function check(inputStr) {
  inputStr = inputStr.replace(/(.)\1*/g, function(r) {

    let symbolOne = ''

    for (let i = 0; i < r.length; i++) {
      if (i === 0) {
        symbolOne = r[0]
      }
    }

    if (r.length !== 1)
      symbolOne += r.length

    //console.warn(symbolOne)

    return symbolOne
  })

  return inputStr
}

console.warn(check("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"))
