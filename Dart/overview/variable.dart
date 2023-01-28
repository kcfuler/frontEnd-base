var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune', 123];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};

void main(){
  print(name);
  print(image);

  if( year >= 10 )
    {
      print(year);
    }
  else
    {
      print("123");
    }

  final fn1 = 123;
  int test1 = 456;

  for(final object in flybyObjects){
    print(object);
  }
}
