/*
Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, but exclude duplicates from the answer.
The STATION table is described as follows:

https://s3.amazonaws.com/hr-challenge-images/9336/1449345840-5f0a551030-Station.jpg
*/
/*
    Enter your query here and follow these instructions:
    1. Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
    2. The AS keyword causes errors, so follow this convention: "Select t.Field From table1 t" instead of "select t.Field From table1 AS t"
    3. Type your code immediately after comment. Don't leave any blank line.
*/
/*Запросите список названий ГОРОДОВ у станции для городов с четным идентификационным номером. Распечатайте результаты в любом порядке, но исключите дубликаты из ответа.
Таблица СТАНЦИЙ описывается следующим образом:*/

SELECT DISTINCT CITY from STATION WHERE mod(ID,2) = 0;
