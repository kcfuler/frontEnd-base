#include <iostream>
using namespace std;

int exgcd(int a, int b, int &x, int &y)
{
  if (!b)
  {
    x = 1, y = 0;
    return a;
  }

  int d = exgcd(b, a, y, x);
  y = y - a / b * x;

  return d;
}

int main()
{

  return 0;
}