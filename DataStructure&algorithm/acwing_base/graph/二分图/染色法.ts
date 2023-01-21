'use strict'
const N = 100010, M = 200020;
let h = new Array(N).fill(-1) , e = new Array(M) , ne = new Array(M), idx = 0;
let color = new Array(N);

const add = (a: number , b :number ) :void =>{
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}
function find( unit: number , color : number): boolean {
    color[unit] = color;
    for(let i = h[unit]; i != -1; i ++){
        let j = e[i] ;
        if( !color[j] ){
            if( !find(j, 3 - color)) return false;
        }
        else if( color[j] == color) return false;
    }
    return true;
}

function main(n:number, edges:number[][]){
    edges.forEach( edge => {
        let a  = edge[0] , b = edge[1];
        add(a, b), add(b, a);
    })

    let flag = true;

    for(let i = 1; i <= n ; i++){
        if( !color[i] )
        {
            if( !find( i , 1) ) {
                flag = false;
                break;
            }
        }
    }
    if( flag ) console.log('Yes');
    else console.log('No');
}
