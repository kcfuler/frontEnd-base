var obj1 = {
    name: 'seven'
}

var obj2 = {
    name: 'anne'
}

let getName = function (){
    console.log(this.name);
}

getName();
getName.call(obj1);
getName.call(obj2);
