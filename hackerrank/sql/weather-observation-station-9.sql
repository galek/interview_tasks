/*
Enter your query here.
Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.

Просто отрицание и регулярку подпиливаем
*/

SELECT DISTINCT city FROM STATION WHERE city NOT RLIKE '^[aeiouAEIOU].*$'
