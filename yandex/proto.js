/*
https://jsfiddle.net/w49zcqLv/
Задачка про наследование
Что здесь происходит и почему
*/
var book1, book2;

// 1 - конструктор
function Book(_name) {
  this.name = _name;
}

// 2 - определяем функции
Book.prototype.getName = function() {
  return this.name;
};
Book.prototype.getUpperName = function() {
  return this.getName().toLowerCase();
};

// 3 - создали объект
book1 = new Book('JavaScript with Promises');

// 4 - переопределили функцию
Book.prototype.getUpperName = function() {
  return this.getName().toUpperCase();
};

// 5 - переопределили прототип
Book.prototype = {
  getName: function() {
    return '"' + this.name + '"';
  }
}

// 6
book2 = new Book('JavaScript: The Definitive Guide, 6th Edition');

// 7
console.log(book1);
console.log(book1.getName()); // JavaScript with Promises
console.log(book1.getUpperName()); //

console.log(book2);
console.log(book2.getName());
console.log(book2.getUpperName());


console.log(Book.prototype); // revert { getName: function() {   return '"' + this.name + '"'; } }
console.log(book1.prototype) // undefined
