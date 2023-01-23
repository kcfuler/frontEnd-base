/**
 * find the shortest path in a graph
 * @params g , d , st , n is required data , this style is for convenient
 * @returns Infinity ,can't reach the destination
 */
function main(){
    const N = 510;
    let g = new Array<number>(N).map(() => new Array(N));
    let d = new Array<number>(N);
    let st = new Array<boolean>(N);
    let n ;
    function dijkstra(){
        d.forEach( value => value = Infinity);
        d[1] = 0;

        for(let i = 1; i <= n ; i++ )
        {
            let t = -1;
            for(let j = 1; j <= n ; j++)
            {
                if( !st[j] && (t == -1 || d[t] > d[j] ))
                    t = j;
            }

            for(let j = 1; j <= n ; j++)
                d[j] = Math.min(d[j] , g[t][j] );

            st[t] = true;
        }

        return d[n];
    }
    dijkstra()
}
