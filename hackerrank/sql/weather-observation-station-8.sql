/*
Enter your query here.
*/

/*
LIKE - простое совпадение
RLIKE - как регулярка
https://oracleplsql.ru/rlike-mariadb.html
*/

SELECT DISTINCT city FROM STATION WHERE city RLIKE '^[aeiouAEIOU].*[aeiouAEIOU]$'
