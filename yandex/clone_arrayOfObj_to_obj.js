const t = [{a: 1}, {b: 2}, {c: 3, d: 4}];
const d = {};
for (const el of t) {
  for (const [key, value] of Object.entries(el)) {
    d[key] = value;
  }
}

// Что выведется?
// {a:1,b:2,c:3,d:4}
console.log(d);

// Как сделать без цикла?
// Ответ
console.warn(Object.assign({}, ...t));
