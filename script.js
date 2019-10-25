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
  pressZero();
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
//this is to understand how many decimal places a new number is at
var decimalPlaces = 0;

//to help understand what to do if multiple operators are entered
var enteringOperators = false;

function pressZero() {
  if (calculation[calculation.length - 1] == 0) {
    return;
  } else {
    pressDigit(0);
  }
}

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
      decimalPlaces++;
      calculation[calculation.length - 1] =
        calculation[calculation.length - 1] + num / Math.pow(10, decimalPlaces);
    }
  } else {
    if (enteringOperators == false) {
      //do nothing and continue to lines after if block ?how to write this better
    } else {
      enteringOperators = false;
      selectOperator();
    }
    displayValue = [num];
    calculation.push(num);
  }
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function selectOperator() {
  var currentOperators = calculation[calculation.length - 1].split("");
  if (currentOperators.length == 1) {
    //does this cause unintended sideeffects? don't think so
    console.log("only one operator anyway");
    return;
  } else {
    if (currentOperators[currentOperators.length - 1] == "-") {
      //this probably doesn't make any sense
      console.log("keep minus and preceding op");
      calculation[calculation.length - 1] = [
        currentOperators[currentOperators.length - 2],
        currentOperators[currentOperators.length - 1]
      ].join("");
    } else {
      console.log("just keep last op");
      calculation[calculation.length - 1] =
        currentOperators[currentOperators.length - 1];
    }
  }
}

function pressOperator(op) {
  decimalToggle = false;
  decimalPlaces = 0;
  displayValue = [op];
  display.innerHTML = displayValue.join("");
  //push it to array if prev there was a number, concat it to last element if that was an operator

  if (enteringOperators == false) {
    //ie this is the first operator to be entered after some numbers
    calculation.push(op);
  } else {
    calculation[calculation.length - 1] = [
      calculation[calculation.length - 1],
      op
    ].join("");
  }
  enteringOperators = true;
  console.log(calculation);
}

function pressDecimal() {
  enteringOperators = false;
  if (
    calculation.length !== 0 &&
    typeof calculation[calculation.length - 1] == "number" &&
    decimalToggle == false
  ) {
    displayValue.push(".");
    decimalToggle = true;
  } else {
    decimalToggle = false;
    //fix this: either make it an error or get it to push a leading 0
  }
  display.innerHTML = displayValue.join("");
  console.log(calculation);
}

function pressEquals() {
  enteringOperators = false;
  decimalToggle = false;
  decimalPlaces = 0;
  var result = eval(calculation.join(""));
  displayValue = result;
  display.innerHTML = displayValue;
  calculation = [result];
}

function reset() {
  enteringOperators = false;
  displayValue = ["0"];
  display.innerHTML = displayValue.join("");
  decimalToggle = false;
  decimalPlaces = 0;
  calculation = [];
}
