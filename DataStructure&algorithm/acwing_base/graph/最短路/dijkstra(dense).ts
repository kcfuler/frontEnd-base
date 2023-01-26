const N = 510;
let g = new Array(N).map(() => new Array(N).fill(Infinity));
let d = new Array(N).fill(Infinity);
let st = new Array<boolean>(N).fill(false)
let n ;

function dijkstra(){
	d[1] = 0;

	for(let i = 1; i <= n ;  i++ )
	{
		let t = -1;
		for(let j = 1; j <= n ;j ++)
		{
			if( !st[j] && ( t == -1 || d[t] > d[j] ))
				t = j;
		}

		for(let j = 1; j <= n ;j ++)
			d[j] = Math.min(d[j] , d[t] + g[t][j]);

		st[t] = true;
	}

	return d[n];
}
