function lowbit( x : number) : number{
    return x & -x;
}

function countOne(n :number) : number{
    let cnt = 0;

    while( n > 0 ) {
        n -= lowbit(n);
        cnt++;
    }

    return cnt ;
}

[1,2,3,4,5].forEach( n => console.log(countOne(n)));