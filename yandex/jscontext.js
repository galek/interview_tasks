/*
Задача на контексты - что тут будет выведено?
https://jsfiddle.net/galek/wLmnox7e/1/
*/
var age = 10;
var user = {
  age: 20,
  getAge: function() {
    var age = 30;

    return this.age;
  }
};


console.warn("1: " + user.getAge()) // 20, так return this.age, контекст this CORRECT
console.warn("2: " + user.age) // 20

var getAge = user.getAge; // Указатель на функцию с глобальным контекстом
console.warn("3: " + getAge()); // тут 10, так как глобальный контекст

var getRealAge = getAge.bind(user); // присваеваем контекст - теперь контекст user
console.warn("4: " + getRealAge()); // 20 - запрашиваем с user контекста
console.warn("5: " + getAge()); // 10 - запрашиваем с глобального

getRealAge = getAge.bind(); // создаем указатель вызова функции с глобальным контекстом
console.warn("6: " + getRealAge()); // 10
