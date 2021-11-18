var age = prompt("What is your age");
console.log(age);
var todayDate = new Date();
var today_year = todayDate.getFullYear();
var both_year = today_year -age;
document.write(both_year);
