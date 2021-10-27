/*
Полином.
Эта задача часто дается на отборочных, на первичном этапе
Полином - слово которое считается туда и обратно одинаково
Пример:
Ага
Ада
Заказ

Задачка сделана с использованием JS подхода
*/
let originalStr = 'Ага'

// Клонируем строку и переводим все в нижний регистр
let originalStrLower = `${originalStr}`.toLowerCase()
// Клонируем строку и переводим все в нижний регистр=>делаем переворачивание через конвертации в массив и выполняя revert, потом склеиваем
let strToCompare= `${originalStr}`.toLowerCase().split('').reverse().join('')

console.warn(originalStrLower===strToCompare)
console.warn({originalStr, originalStrLower, strToCompare})
