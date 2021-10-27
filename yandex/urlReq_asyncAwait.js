/*
Необходимо написать функцию, которая на вход принимает урл,
асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
Для получении данных можно использовать $.get или fetch.
Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".

Решение: https://jsfiddle.net/galek/ym83vxbt/

Мок создается на beeceptor.com 

Список моков:
1) galek.free.beeceptor.com/   => { "status": "Awesome!"}
2) galek.free.beeceptor.com/ => "erorr"
*/

async function getResource(url, iter) {
  const pr = fetch(url);

  let resultTmp; // undefined
  try {
    resultTmp = await pr;
  } catch (err) {
    console.warn('"Заданный URL недоступен: ' + err)
    return undefined
  }


  if (!resultTmp) {
    console.warn('111')
    return undefined
  }

  let result; // undefined

  try {
    result = await resultTmp.json()
  } catch (e) {
    console.warn(`Error parse response: ${e}. Trying ${iter}`);
    iter--;

    if (iter > 0)
      return getResource(url, iter)
  }

  return result;
}


getResource('https://galek.free.beeceptor.com', 5)
  .then((res) => console.warn(res))
  .catch(error => {
    console.warn("Error is present")
  })

getResource('https://galek.free.beeceptor.com/error', 5)
  .then((res) => console.warn(res))
  .catch(error => {
    console.warn("Error is present")
  })

