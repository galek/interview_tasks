/*
Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
Надо вернуть [1, 2, 2, 3] (порядок неважен)
*/

var set1 = ([1, 2, 3, 2, 0]),
    set2 = ([5, 1, 2, 7, 3, 2]),
    intersection = [set1, set2].reduce((a, b) => ([...a].filter(x => b.includes(x))));

console.log([...intersection]);
