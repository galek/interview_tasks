/*Простой калькулятор - не закодил с точки зрения логики, просто накидал рыбу алгоритма
Без использования eval()

calc('1 + 3 / (2 * 3)') // 1.5*/

//Черновик калькулятора про работка логики только - тут еще не вся логика сделана, а общая схема для конкретного кейса
// https://jsfiddle.net/galek/6v3zafye/18/
/*
Приоритет операций:
скобки
умножение/деление (слева направо)
сложение/вычитание (слева направо)
*/
function calc(v) {
  /*console.warn(v.split('+'))
  console.warn(v.split('-'))
  console.warn(v.split('*'))
  console.warn(v.split('/'))*/

  v = v.replaceAll(' ', '')
  console.warn(v)

// Можно упростить - через регулярку https://coderoad.ru/32627326/JavaScript-RegEx-%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5-%D0%B8-%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B5%D0%B5-%D0%B2%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%B0
  console.warn(v.indexOf('('))
  console.warn(v.indexOf(')'))
  //4-8
  let sol = v.substr(4 + 1, 8 - (4 + 1))
  console.warn(sol)
  console.warn(sol.split('*'))
  console.warn(multer(sol.split('*')[0], sol.split('*')[1]))
  //3
  console.warn(v.indexOf('/'))
  console.warn(demulter(v[v.indexOf('/') - 1], multer(sol.split('*')[0], sol.split('*')[1]))) // 0.5
  
  }

  function multer(a, b) {
    return a * b
  }

  function demulter(a, b) {
    return a / b
  }

  function sum(a, b) {
    return a + b
  }

  function min(a, b) {
    return a - b
  }

  calc('1 + 3 / (2 * 3)') // 1.5
