void main(){
  Iterable<int> naturalsTo(int n) sync* {
    int k = 0;
    while (k < n) {
      yield k++;
    }
  }

// Returns an iterable with [0, 1, 2, 3, 4]
  print(naturalsTo(5).toList());
  print('123');
}
