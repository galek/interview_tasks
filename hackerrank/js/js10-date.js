/*
Objective
In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

Task
Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.
*/

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  //console.warn(dateString)

  const options = {
    weekday: 'long'
  };
  dayName = new Date(dateString).toLocaleDateString('en-En', options)
  //console.log(dayName);

  return dayName;
}
