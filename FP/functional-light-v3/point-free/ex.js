"use strict";

function when(fn) {
  return function (predict) {
    return function (...args) {
      if (predict(...args)) {
        return fn(...args);
      }
    };
  };
}

function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

// function output(txt) {
//   console.log(txt);
// }

var output = console.log.bind(console);

// function printIf(shouldPrintIt) {
//   return function (msg) {
//     if (shouldPrintIt(msg)) {
//       output(msg);
//     }
//   };
// }

var printIf = when(output);

function isShortEnough(str) {
  return str.length <= 5;
}

var isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
