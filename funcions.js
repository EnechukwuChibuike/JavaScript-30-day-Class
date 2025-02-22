// Function Declaration

// function functionName(parameters) {

// }

function increase() {
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

// Function Expression
// let sum = function () {};

// sum();

// Arrow Function

// let sum = () => {

// }

// return

// function sum() {
//   console.log("hello");
// }

// Anonymous Function
// .map(()=>{})

// IIFE - Immediately Invoked Function Expression

// (function() {

// })();

// (() => {
//   console.log("hell");
// })();

function log(text) {
  console.log(text);
}

log("hello");
log("Hi");
log("Okay");

function sum(one, two) {
  return one + two;
}

console.log(sum(6, 2));
