function merge( segs:number[][] ){
    segs.sort( (a ,b ) =>  a[0] - b[0] );

    let res = [];

    let st = -2e9, ed = -2e9;
    for(let seg of segs ){
       let left = seg[0] , right = seg[1];

       if( left > ed ){
           if( ed != -2e9){
               res.push([st, ed]);
           }
           st = left;
           ed = right;
       }
       else {
           ed = Math.max(ed , right);
       }
    }

    if( st != -Infinity ) res.push([st, ed]);

    return res;
}

console.log(merge([[1,2], [2,3], [3,4],[3,5], [10, 12]]))