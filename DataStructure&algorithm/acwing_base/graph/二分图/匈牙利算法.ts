/*
* 二分图的最大匹配数
* 使用匈牙利算法解决
* */

const N = 510, M = 100010;
let h = new Array<number>(N) , e = new Array<number>(M) , ne = new Array<number>(M), idx = 0;
let match = new Array(N) , st = new Array<boolean>(N);

function init():void{
    for(let i = 0 ; i < N ; i++) {
        h[i] = -1;
    }
}
function add(a:number, b:number) :void{
    e[idx] = b;
    ne[idx] = h[a];
    h[a] = idx++;
}

function find( u : number): boolean{

    for(let i = h[u] ; i != -1; i = ne[i]) {
        let j = e[i];

        if (!st[j])
        {
            st[j] = true;
            if( match[j] === 0 || find(j) )
            {
                match[j] = u;
                return true;
            }
        }
    }

    return false;
}

function main():void{

    init();

    let n1, n2, m;

    let res = 0;
    for(let i = 1; i <= n1; i++ )
    {
        st.forEach(item => item = false);
        if( find(i) ) res ++;
    }
    console.log(res);
}
