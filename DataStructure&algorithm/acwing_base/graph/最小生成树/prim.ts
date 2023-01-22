
const N = 510;
// @ts-ignore
let g = new Array(N).fill(Infinity).map( () => new Array(N).fill(Infinity) );
let st = new Array<boolean>(N);
let d = new Array<number>(N);
let n ;
function prim() : number{

    d.forEach(item => item = Infinity);

    let res = 0;

    for(let i = 0 ; i <= n; i++)
    {
        let t = -1;
        // find the minimum
        for(let j = 1; j <= n; j++)
        {
            if( !st[j] && ( t === -1 || d[t] > d[j]))
            {
                t = j ;
            }
        }
        // cant reach
        if( i && d[t] === Infinity) return Infinity;
        if( i ) res += d[t];
        st[t] = true;
        // update the distance between outer and inner
        for(let j = 1; j <= n ; j++ ) d[j] = Math.min( d[j] , g[j][t] ) ;
    }

    return res; // has res and return it
}
