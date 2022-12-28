"use strict";

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, nums) {
  if (!nums.includes(num)) {
    nums = [...nums, num]; // maintain the immutability
    nums.sort(function asd(a, b) {
      return a - b;
    });
  }
  return nums;
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
  // replace , not modify
  luckyLotteryNumbers = pickNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers) // a hint
  );
}

console.log(luckyLotteryNumbers);
