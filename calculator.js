const ops = ["+", "-", "*", "/"];
function calculate() {
  let operation = parseInt(document.getElementById("operation").value);

  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  const calc = new Calculator();
  let result = calc.doMath(num1, num2, operation);

  document.getElementById(
    "result"
  ).innerText = `${num1} ${ops[operation]} ${num2} = ${result}`;
}

// const add = (num1, num2) => num1 + num2;
// const subtract = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => {
//   if (num2 == 0) {
//     alert("Cannot divide by 0");
//     return "undefined";
//   }
//   return num1 / num2;
// };

// function doMath(num1, num2, operation) {
//   switch (operation) {
//     case 0:
//       return add(num1, num2);
//     case 1:
//       return subtract(num1, num2);
//     case 2:
//       return multiply(num1, num2);
//     case 3:
//       return divide(num1, num2);
//   }
// }
class Calculator {
  constructor() {}
  add = (num1, num2) => num1 + num2;
  subtract = (num1, num2) => num1 - num2;
  multiply = (num1, num2) => num1 * num2;
  divide = (num1, num2) => {
    if (num2 == 0) {
      alert("Cannot divide by 0");
      return "undefined";
    }
    return num1 / num2;
  };

  doMath(num1, num2, operation) {
    switch (operation) {
      case 0:
        return add(num1, num2);
      case 1:
        return subtract(num1, num2);
      case 2:
        return multiply(num1, num2);
      case 3:
        return divide(num1, num2);
    }
  }
}