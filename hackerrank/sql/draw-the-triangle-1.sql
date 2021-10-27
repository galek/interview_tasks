/*
P(R) represents a pattern drawn by Julia in R rows. The following pattern represents P(5):

* * * * * 
* * * * 
* * * 
* * 
*
Write a query to print the pattern P(20).

https://nifannn.github.io/2017/10/24/SQL-Notes-Hackerrank-Draw-The-Triangle-2/
*/

    
SET @number = 20+1;
SELECT REPEAT('* ', @number := @number-1) FROM information_schema.tables;
