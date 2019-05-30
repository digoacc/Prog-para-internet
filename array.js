// array.js - TRABALHO DANIEL


//Array Object
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

//Array Propiety

//CONSTRUCTOR
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo").innerHTML = fruits.constructor;
}

//LENGHT
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango", "Limao"];
  document.getElementById("demo").innerHTML = fruits.length;
}

//PROTOTYPE
Array.prototype.myUcase = function() {
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango", "Limao"];
  fruits.myUcase();
  document.getElementById("demo").innerHTML = fruits;
}

//Array Methods

//concat()
<script>
function myFunction() {
  var hege = ["Cecilie", "Lone"];
  var stale = ["Emil", "Tobias", "Linus"];
  var children = hege.concat(stale); 
  document.getElementById("demo").innerHTML = children;
}

//copyWithnin()
var fruits = ["Banana", "Orange", "Apple", "Mango", "Limao"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {  
  document.getElementById("demo").innerHTML = fruits.copyWithin(2,0);
}

//entries()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.entries();

document.getElementById("demo").innerHTML = x.next().value;

//every()
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

//fill()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {  
  document.getElementById("demo").innerHTML = fruits.fill("Kiwi");
}


//filter()
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
//find()
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}


//findIndex()
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
}


//forEach()
demoP = document.getElementById("demo");
var numbers = [4, 9, 16, 25];

function myFunction(item, index) {
  demoP.innerHTML = demoP.innerHTML + "index[" + index + "]: " + item + "<br>"; 
}


//from()
var myArr = Array.from("ABCDEFG");

document.getElementById("demo").innerHTML = myArr;


//includes()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");

document.getElementById("demo").innerHTML = n;


//indexOf()
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var a = fruits.indexOf("Apple");
  document.getElementById("demo").innerHTML = a;
}
<p><b>Note:</b> The indexOf method was introduced in JavaScript 1.6, and does not work in Internet Explorer 8 and earlier versions.</p>

//isArray()
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}

//join()
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = fruits.join();
}

//KEYS()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.keys();

document.getElementById("demo").innerHTML = x.next().value;

//lastIndexOf()
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var a = fruits.lastIndexOf("Apple");
  var x = document.getElementById("demo");
  x.innerHTML = a;
}

//map()
var numbers = [4, 9, 16, 25];

function myFunction() {
  x = document.getElementById("demo")
  x.innerHTML = numbers.map(Math.sqrt);
}

//pop()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.pop();
  document.getElementById("demo").innerHTML = fruits;
}

//push()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Kiwi");
  document.getElementById("demo").innerHTML = fruits;
}

//reduce()
var numbers = [65, 44, 12, 4];

function getSum(total, num) {
  return total + num;
}
function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}

//reduceRight()
var numbers = [65, 44, 12, 67];

function getSum(total, num) {
  return total + num;
}
function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduceRight(getSum);
}

//reverse()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.reverse();
  document.getElementById("demo").innerHTML = fruits;
}
//shift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.shift();
  document.getElementById("demo").innerHTML = fruits;
}
//slice()
function myFunction() {
  var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  var citrus = fruits.slice(1, 3);
  document.getElementById("demo").innerHTML = citrus;
}

//some()
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}

//sort()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort();
  document.getElementById("demo").innerHTML = fruits;
}

//splice
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  document.getElementById("demo").innerHTML = fruits;
}

//toString()
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.toString();
  document.getElementById("demo").innerHTML = fruits;
}

//unshift()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.unshift("Lemon", "Pineapple");
  document.getElementById("demo").innerHTML = fruits;
}

//valueOf()

function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo").innerHTML = fruits.valueOf();
}
