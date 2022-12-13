let salesOffice = {}; // 定义发布者

salesOffice.clientList = {}; // 缓存列表

/**
 * @param key 表示订阅的事件类型，每一个事件类型会对应一个缓存列表，在发生事件时触发事件对应缓存列表中的函数
 * @param fn 表示在订阅的事件发生时触发的函数，它会接受到和事件有关的参数，并执行自己的处理
*/
salesOffice.listen = function ( key , fn ){ // 订阅函数
    if( !this.clientList[key] )
    {
        this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
}

/**
 * @param key  传入需要触发的事件的key
 * @param [...message] 事件对应的信息
*/
salesOffice.trigger = function (){
    let key = Array.prototype.shift.call(arguments); // 取出消息类型
    let fns = this.clientList[key]; 

    if( !fns || !fns.length ) 
    {
        return ;
    }

    for( let i = 0 ; i < fns.length ; i++) 
    {
        fns[i].apply(this, arguments); // 第二个参数就是事件对应的信息 
    }
}

salesOffice.listen("squard88",(arguments) =>{
    console.log("squard88", arguments);
})

salesOffice.listen("squard100", (arguments) =>{ 
    console.log("squard100", arguments);
})

salesOffice.trigger("squard88", 2000);
salesOffice.trigger("squard100",1000);
