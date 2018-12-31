// Exercise 1
console.log("Print all numbers between -10 and 19");
for(var n = -10; n <= 19; n++){
  console.log(n);
}
// Exercise 2
console.log("Print all even numbers between 10 and 40");
for(var n = 10; n <= 40; n += 2){
  console.log(n);
}
// Exercise 3
console.log("Print all odd numbers between 300 and 333");
for(var n = 301; n <= 333; n += 2){
  console.log(n);
}
// Exercise 4
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for(var n = 5; n <= 50; n++){
  if(n % 5 === 0 && n % 3 === 0){
    console.log(n);
  }
}