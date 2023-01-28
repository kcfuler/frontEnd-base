class Point {
  final double x;
  final double y;

  Point(double x, double y) : this.x = x, this.y = y;
}

// Create a new instance of the Point class
void main(){

  Point p = Point(3, 5);
  print(p.toString());
}
