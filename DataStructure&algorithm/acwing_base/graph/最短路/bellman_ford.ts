interface EdgeType{
	s:number
	t:number
	w:number
}

class Edge implements EdgeType{
	s:number;
	t:number;
	w:number;

	constructor(s:number, t: number, w: number) {
		this.s = s;
		this.t = t;
		this.w = w;
	}
}

const N = 510, M = 100010;

let edges = new Array<EdgeType>(N);
let d = new Array<number>(N).fill(Infinity);
let backup = new Array<number>(N);

let n, m, k;

/**
* @return d[n] , the shortest distance between 1 ~ n node , if it's Infinity, we can't reach n from 1.
* */
function bellman_ford(){
	d[1] = 0;
	for(let i = 0 ; i < k ; i++)
	{
		backup = [...d];

		for(let j = 0; j < m ; j++)
		{
			let e = edges[j];
			d[e.t] = Math.min(d[e.t], backup[e.s] + e.w);
		}
	}

	return d[n];
}
