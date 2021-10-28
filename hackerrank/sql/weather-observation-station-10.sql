/*
Enter your query here.
*/
SELECT DISTINCT city FROM STATION WHERE city NOT RLIKE '^.*[aeiouAEIOU]$'
