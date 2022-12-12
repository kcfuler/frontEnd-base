Function.prototype.bind = function ( ){
    let self = this;
    let context = [].shift.call( arguments );
    let args = [].slice.call(arguments);

    return function ( ){
        self.apply( context , [].concat.apply( args , [].slice.apply(arguments)));
    }
}

let obj = {
    name : 'seven'
}

let func = function ( a, b, c, d){
    console.log(this.name);
    console.log([a, b, c, d]);
}.bind(obj, 1, 2, 3, 4);

func();

console.log( [].concat.apply( [1, 3 ,3], undefined));