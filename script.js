var display = document.getElementById("display");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var plus = document.getElementById("+");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var minus = document.getElementById("-");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var mult = document.getElementById("x");
var clear = document.getElementById("clearButton");
var zero = document.getElementById("0");
var equal = document.getElementById("=");
var divide = document.getElementById("/");
seven.addEventListener("click", function () {
  display.value += "7";
});
eight.addEventListener("click", function () {
  display.value += "8";
});
nine.addEventListener("click", function () {
  display.value += "9";
});
four.addEventListener("click", function () {
  display.value += "4";
});
five.addEventListener("click", function () {
  display.value += "5";
});
six.addEventListener("click", function () {
  display.value += "6";
});
one.addEventListener("click", function () {
  display.value += "1";
});
two.addEventListener("click", function () {
  display.value += "2";
});
three.addEventListener("click", function () {
  display.value += "3";
});
plus.addEventListener("click", function () {
  display.value += "+";
});
minus.addEventListener("click", function () {
  display.value += "-";
});
mult.addEventListener("click", function () {
  display.value += "*";
});
divide.addEventListener("click", function () {
  display.value += "/";
});
zero.addEventListener("click", function () {
  display.value += "0";
});
equal.addEventListener("click", function () {
  display.value = eval(display.value);
});
clear.addEventListener("click", function () {
  display.value = "";
});
