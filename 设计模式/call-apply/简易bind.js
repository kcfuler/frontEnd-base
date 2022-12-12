Function.prototype.bind = function( context ){
    let self = this;

    return function(){
        return self.apply(context, arguments);
    }
}

var obj = {
    name: 'seven'
}

var func = function (){
    console.log( this.name );
}.bind( obj );

func();