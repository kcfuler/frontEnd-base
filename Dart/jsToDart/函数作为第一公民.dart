void main() {
  // returns [4, 5, 6]
  [1, 2, 3].map((e) => e + 3).toList();

// returns [5, 7, 9]
  var list2 = [1, 2, 3].map((e) {
    e *= 2;
    return e + 3;
  }).toList();

  print(list2);
  print(list2 is String);
}
