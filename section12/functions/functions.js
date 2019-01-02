// Exercise 1
function isEven(n) {
  return n % 2 === 0;
}
// Exercise 2
function factorial(n) {
  fact = 1;
  for(var i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
// Exercise 3
function kebabToSnake(str) {
  return str.replace(/-/g,"_");
}
