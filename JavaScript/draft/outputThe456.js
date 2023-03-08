function a(fn) {
  let str = "123";
  fn(str);
  console.log(str); // 要在这里打印出456, 且不能修改 a 函数
}

a(function (str) {
  console.log("a", str);
  str = 456;
  return str;
});
