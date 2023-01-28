class Bicycle{
  int cadence;
  int _speed = 0;
  int get speed => _speed;
  int gear;

  Bicycle(this.cadence, this.gear);// 构造函数

  void applyBrake(int decrement){
    _speed -= decrement;
  }

  void speedUp(int increment){
    _speed += increment;
  }

@override // @override 注释可以告知分析器您想要替换某个组件。如果未正确执行替换，分析器将会引发错误。
  String toString() => "Bicycle: $_speed mph";
}

void main(List<String> args){
  var bike = new Bicycle(2, 1);
  bike.speedUp(10);
  print(bike);
}
