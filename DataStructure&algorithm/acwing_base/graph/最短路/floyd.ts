const N = 210;
let g = new Array<number>(N).map(() => new Array<number>(N));
let n, m, q;
for(let i = 1; i <= n ;i ++)
	for(let j = 1; j <= n ;j ++)
		if( i == j ) g[i][j] = 0;
function floyd(){
	for(let k = 1; k <= n ; k ++)
		for(let i = 1; i <= n ; i ++)
			for(let j = 1; j <= n ;j ++)
				g[i][j] = Math.min(g[i][j] , g[i][k] + g[k][j]);
}

