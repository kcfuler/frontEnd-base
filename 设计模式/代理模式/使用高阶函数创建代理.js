//这里实现的是 cache proxy


const muti = (...arguments) =>{
    return arguments.reduce( (pre, cur) => pre * cur);
}

const plus = (...arguments) => {
    return arguments.reduce( ( pre, cur) => pre + cur) ;
}

/**
 * 
 * @param  computionalFunction
 * 
 * @returns a proxy for computional function with cache
 * 
 * */
const createCacheProxy = function ( fn ) {
    let cache = {};

    return function (){
        let args = Array.prototype.join.call( arguments, ','); // same as hash

        if( args in cache )
        {
            return cache[args];
        }

        return cache[ args ] = fn.apply(this, arguments);
    }
}

let cachedMuti = new createCacheProxy(muti);
console.log(cachedMuti(1,2,3,4));