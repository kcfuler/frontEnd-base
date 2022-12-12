// 单例模式的核心就是在逻辑中的任何地方获取到的都是一个实体
// vue 和 react 的中心状态管理工具 pinia 、 redux 等就是这个模式的一个应用

class Bouns{
    salay = null;
    strategy = null;
    strategies = null;
    
    constructor( )
    {
        this.strategies = new Strategy();
    }

    setSalary( salay ){
        this.salay = salay;
    }

    chooseStrategy( name ){
        this.strategy = strategies[name];
    }

    getSalary(){
        return this.strategy.caculate( this.salay );
    }
}

class Strategy{
    strategies = null;

    constructor(){
        this.strategies =new Map();
    }

    setStrategy(strategy ,name){
        this.strategies.set(name, strategy);     
    }

    getStrategy( name ){
        return this.strategies.get(name);
    }

    caculate()
}