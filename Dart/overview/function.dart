int fib(int n ){
  if( n == 0 || n == 1 ) return n;
  else return fib( n - 1 ) + fib(n - 2);
}

var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];

void main(){
  print(fib(20));
  flybyObjects.where((name) => name.contains('turn')).forEach(print);
}
