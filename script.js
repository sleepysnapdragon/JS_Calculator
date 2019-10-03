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
var decimal = document.getElementById("decimal");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");

var calculation = [];
var displayValue = [];

zero.addEventListener("click", () => {
  pressDigit(0);
});
one.addEventListener("click", () => {
  pressDigit(1);
});
two.addEventListener("click", () => {
  pressDigit(2);
});
three.addEventListener("click", () => {
  pressDigit(3);
});
four.addEventListener("click", () => {
  pressDigit(4);
});
five.addEventListener("click", () => {
  pressDigit(5);
});
six.addEventListener("click", () => {
  pressDigit(6);
});
seven.addEventListener("click", () => {
  pressDigit(7);
});
eight.addEventListener("click", () => {
  pressDigit(8);
});
nine.addEventListener("click", () => {
  pressDigit(9);
});

decimal.addEventListener("click", pressDecimal);

add.addEventListener("click", () => {
  pressOperator("+");
});
subtract.addEventListener("click", () => {
  pressOperator("-");
});
multiply.addEventListener("click", () => {
  pressOperator("*");
});
divide.addEventListener("click", () => {
  pressOperator("/");
});

equals.addEventListener("click", pressEquals);

clear.addEventListener("click", reset);

//this value indicates whether to also add a decimal before the next number: pressing decimal button makes it true
var decimalToggle = false;

function pressDigit(num) {
  if (
    calculation.length !== 0 &&
    typeof calculation[calculation.length - 1] == "number"
  ) {
    displayValue.push(num);
    if (!decimalToggle) {
      calculation[calculation.length - 1] =
        calculation[calculation.length - 1] * 10 + num;
    } else {
      calculation[calculation.length - 1] =
        calculation[calculation.length - 1] + num / 10;
      decimalToggle = false;
    }
  } else {
    //may need to add something here for decimal?
    displayValue = [num];
    calculation.push(num);
  }
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressOperator(op) {
  displayValue = [op];
  display.innerHTML = displayValue.join("");
  calculation.push(op);
  console.log(calculation);
}

function pressDecimal() {
  if (
    calculation.length !== 0 &&
    typeof calculation[calculation.length - 1] == "number"
  ) {
    displayValue.push(".");
    decimalToggle = true;
  } else {
    //fix this: either make it an error or get it to push a leading 0
    displayValue = ["."];
    calculation.push(".");
  }
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressEquals() {
  var result = eval(calculation.join(""));
  displayValue = result;
  display.innerHTML = displayValue;
  calculation = [];
}

function reset() {
  displayValue = ["0"];
  display.innerHTML = displayValue.join("");
  calculation = [];
}
