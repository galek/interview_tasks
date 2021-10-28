// https://www.hackerrank.com/challenges/asian-population/problem?isFullScreen=true
SELECT SUM(i.population) from city as i inner join country as o ON (i.COUNTRYCODE=o.CODE) WHERE o.CONTINENT="Asia"
