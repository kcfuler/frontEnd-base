const N = 100010, M = 100010;
let h = new Array<number>(N).fill(-1), e = new Array<number>(M), ne = new Array<number>(M), w = new Array<number>(M), idx;
let d = new Array<number>(N).fill(Infinity);
let st = new Array<boolean>(N);

let n, m;
function add(a:number, b:number, c:number)
{
	e[idx] = b;
	ne[idx] = h[a];
	w[idx] = c;
	h[a] = idx++;
}
function spfa(){
	d[1] = 0;

	let q = new Array<number>();
	q.push(1);
	st[1] = true;

	while( q.length )
	{
		let t = q.shift();
		st[t] = false
		for(let i = h[t]; i != -1; i = ne[i])
		{
			let j = e[i];

			if( d[j] > d[t] + w[i])
			{
				d[j] = d[t] + w[i];
				if( !st[j] )
				{
					q.push(j);
					st[j] = true;
				}
			}
		}
	}

	return d[n];
}
