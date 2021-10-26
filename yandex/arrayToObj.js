/* На входе массив
var arr = [
{name: 'width', value: 10},
{name: 'height', value: 20}
];
//На выходе объект {width: 10, height: 20}
*/
// Solution: https://jsfiddle.net/galek/L09o4e2r/

const arr = [{
    name: 'width',
    value: 10
  },
  {
    name: 'height',
    value: 20
  }
];

//{width: 10, height: 20}

const saveObj = {}
for (let tmp of arr) {
  console.warn({
    tmp
  })

  saveObj[tmp.name] = tmp.value
}

console.warn(saveObj)
