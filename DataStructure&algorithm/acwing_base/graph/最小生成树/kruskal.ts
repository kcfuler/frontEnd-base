const N = 100010, M = 200020;

// @ts-ignore
let edges = new Array<number[]>(N).fill([0, 0, 0]);
let p = new Array(N);
let n , m;

function find( x : number ){
    if( x === p[x] ) return p[x];
    else return p[x] = find(p[x]);
}

function kruskal(): number{
    edges.sort((a, b) => a[2] - b[2]);
    for(let i = 1; i <= n ; i ++ ) p[i] = i;

    let res = 0 , cnt = 0;
    for(let i = 0; i < m ; i++){
        let s = edges[i][0], t = edges[i][1], w = edges[i][2];

        let a = find(s), b = find(t);

        if( a != b )
        {
            p[a] = b;
            res += w;
            cnt++;
        }
    }
    if( cnt < n - 1 ) return Infinity;
    else return res;
}
