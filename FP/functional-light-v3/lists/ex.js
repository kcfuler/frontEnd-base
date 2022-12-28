"use strict";

// Put your code here! :)

function add(x, y) {
  return x + y;
}

function addFn(fn1, fn2) {
  return add(fn1(), fn2());
}

function constant(v) {
  return function f() {
    return v;
  };
}

var five = constant(5);
var nine = constant(9);

// itertive

// function addn( ...fns ){
//   if( fns.length > 2 ){
//     let [fn0, fn1 , ...rest] = fns;
//     fns = [
//       function f() {
//         return addFn(fn0, fn1);
//       },
//       ...rest
//     ]
//   }
//   return addFn(fns[0], fns[1]);
// }

// recursive
// function addn( [fn0, fn1, ...rest] ){
//   if( rest.length == 0 ) return addFn( fn0, fn1);
//   if( rest.length > 0 ){
//     return addn([
//       function f(){
//         return addFn(fn0, fn1);
//       },
//       ...rest
//     ])
//   }
// }

// list
// function addn(fns) {
//   return fns.reduce(function reducer(composedFn, fn) {
//     return function f() {
//       return addFn(composedFn, fn);
//     };
//   })();
// }

var numbers = [12, 12, 32, 12, 342, 12, 12, 344, 2];

numbers.reduce(function unique(newList, num) {
  if (!newList.includes(num)) return [...newList, num];
  return newList;
}, []);
