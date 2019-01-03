// Exercise 1
function printReverse(arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
// Exercise 2
function isUniform(arr) {
  var element = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] !== element) {
      return false;
    }
  }
  return true;
}
// Exercise 3
// function sumArray(arr) {
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(n) {
    sum += n;
  });
  return sum;
}
// Exercise 4
// function max(arr) {
//   var max = arr[0];
//   for(var i = 1; i < arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
function max(arr) {
  var max = arr[0];
  arr.forEach(function(n) {
    if(n > max) {
      max = n;
    }
  });
  return max;
}