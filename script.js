var display = document.getElementById("display");
var clear = document.getElementById("clear");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");

var calculation = [];
var displayValue = [];

//add a number button class in the html and create vars with a loop?

//var numberButtons = [zero, one, two, three, four, five, six, seven, eight, nine];

var numberButtons = [
  {
    element: zero,
    value: 0
  },
  {
    element: one,
    value: 1
  },
  {
    element: two,
    value: 2
  }
];

/* can't pass value of each object into function (or need to do something complicated to do so (this/bind?))
for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].element.addEventListener("click", FUNCTION
  );
}
*/

function calc(val) {
  display.innerHTML = val;
}

clear.addEventListener("click", reset);

function pressZero() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(0);
  } else {
    displayValue = [0];
  }
  calculation.push(0);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressOne() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(1);
  } else {
    displayValue = [1];
  }
  calculation.push(1);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressTwo() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(2);
  } else {
    displayValue = [2];
  }
  calculation.push(2);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressThree() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(3);
  } else {
    displayValue = [3];
  }
  calculation.push(3);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressFour() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(4);
  } else {
    displayValue = [4];
  }
  calculation.push(4);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressFive() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(5);
  } else {
    displayValue = [5];
  }
  calculation.push(5);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressSix() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(6);
  } else {
    displayValue = [6];
  }
  calculation.push(6);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressSeven() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(7);
  } else {
    displayValue = [7];
  }
  calculation.push(7);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressEight() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(8);
  } else {
    displayValue = [8];
  }
  calculation.push(8);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressNine() {
  if (typeof calculation[calculation.length - 1] == "number") {
    displayValue.push(9);
  } else {
    displayValue = [9];
  }
  calculation.push(9);
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

zero.addEventListener("click", pressZero);
one.addEventListener("click", pressOne);
two.addEventListener("click", pressTwo);
three.addEventListener("click", pressThree);
four.addEventListener("click", pressFour);
five.addEventListener("click", pressFive);
six.addEventListener("click", pressSix);
seven.addEventListener("click", pressSeven);
eight.addEventListener("click", pressEight);
nine.addEventListener("click", pressNine);

add.addEventListener("click", pressAdd);
subtract.addEventListener("click", pressSubtract);
multiply.addEventListener("click", pressMultiply);
divide.addEventListener("click", pressDivide);
equals.addEventListener("click", pressEquals);

function pressAdd() {
  displayValue = ["+"];
  display.innerHTML = displayValue.join("");
  calculation.push("+");
  console.log(calculation);
}

function pressSubtract() {
  displayValue = ["-"];
  display.innerHTML = displayValue.join("");
  calculation.push("-");
  console.log(calculation);
}

function pressMultiply() {
  displayValue = ["*"];
  display.innerHTML = displayValue.join("");
  calculation.push("*");
  console.log(calculation);
}

function pressDivide() {
  displayValue = ["/"];
  display.innerHTML = displayValue.join("");
  calculation.push("/");
  console.log(calculation);
}

function pressEquals() {
  for (var i = 0; i < calculation.length; i++) {}
  console.log(calculation);
}

function reset() {
  displayValue = ["0"];
  display.innerHTML = displayValue.join("");
  calculation = [];
}
