/*
Enter your query here.
https://www.hackerrank.com/challenges/weather-observation-station-7/problem?isFullScreen=true
*/
SELECT DISTINCT city FROM STATION WHERE city RLIKE '^.*[aeiouAEIOU]$'
