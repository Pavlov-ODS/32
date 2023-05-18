let oneFunction = function () {
  
};
// 2

function oneFunction() { };
// 3
let oneFunction = () => { };
// 4
(function () { });

// ******2

function arguments(...arg) {
  console.log(arg.length);
}
arguments(1, 2, 3, 4, 5);

// ******3
function twoNumbers(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
console.log(twoNumbers(3, 6));
console.log(twoNumbers(6, 3));
consolr.log(twoNumbers(6, 6));

// ********4
function factorial(n) {
  let result = 1;
  let i = 2;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

console.log(factorial(3)); 
// *********5

function combineDigits(digit1, digit2, digit3) {
  return digit1 * 100 + digit2 * 10 + digit3;
}

const result = combineDigits(1, 4, 9);
console.log(result); 

// **********6
function sArea(length, width) {
  if (width === undefined) {
    return length * length;
  } else {
    return length * width;
  }
}
const rectangleArea = calculateArea(5, 8);
console.log(rectangleArea); 

const squareArea = calculateArea(4);
console.log(squareArea); 