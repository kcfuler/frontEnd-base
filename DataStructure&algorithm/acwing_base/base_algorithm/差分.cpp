#include <iostream>
using namespace std;

const int N = 100010;
int a[N], s[N];
int n, m;

void insert(int begin, int end, int v)
{
  s[begin] += v;
  s[end + 1] -= v;
}

int main()
{
  cin >> n >> m;

  for (int i = 1; i <= n; i++)
    cin >> a[i];

  for (int i = 1; i <= n; i++)
    insert(i, i, a[i]);

  while (m--)
  {
    int l, r, c;
    cin >> l >> r >> c;

    insert(l, r, c);
  }

  for (int i = 1; i <= n; i++)
    s[i] = s[i - 1] + s[i];

  for (int i = 1; i <= n; i++)
    cout << s[i] << " ";

  return 0;
}