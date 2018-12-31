// Exercise 1
console.log("Print all numbers between -10 and 19");
var n = -10;
while(n <= 19) {
  console.log(n);
  n++;
}
// Exercise 2
console.log("Print all even numbers between 10 and 40");
n = 10;
while(n <= 40) {
  console.log(n);
  n += 2;
}
// Exercise 3
console.log("Print all odd numbers between 300 and 333");
n = 301;
while(n <= 333) {
  console.log(n);
  n += 2;
}
// Exercise 4
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
n = 5;
while(n <= 50) {
  if(n % 5 === 0 && n % 3 === 0) {
    console.log(n);
  }
  n++;
}