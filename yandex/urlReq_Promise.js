/*
Необходимо написать функцию, которая на вход принимает урл,
асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
Для получении данных можно использовать $.get или fetch.
Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".

https://jsfiddle.net/Lhe4r7gj/
*/


function getResource(url, iter) {
  console.warn(`started function with it: ${iter}`)
  if (iter <= 0) return Promise.reject(`Заданный URL недоступен: ${iter}`);

  return fetch('https://galek.free.beeceptor.com')
    .then((response) => {
      return response.json();
    })
    .catch(err => {
      console.warn(`Can't fetch: ${err.message}`);
      iter--;
      return getResource(url, iter);
    })
}


getResource('', 5)
  .then((data) => {
    console.log(data);
  })
  .catch(err => console.warn(`Can't parse: ${err}`))
