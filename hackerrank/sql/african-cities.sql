/*
Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.

Note: CITY.CountryCode and COUNTRY.Code are matching key columns.
*/

SELECT i.name from CITY as i INNER JOIN COUNTRY as o
ON (i.COUNTRYCODE = o.CODE) where o.CONTINENT = 'Africa'
