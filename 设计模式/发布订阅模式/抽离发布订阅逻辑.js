// 发布-订阅 对象
const myEvent = {
  clientList: [],

  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },

  trigger() {
    let key = Array.prototype.shift.call(arguments);
    let fns = this.clientList[key];

    if (!fns || !fns.length) {
      return false;
    }

    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, arguments);
    }
  },

  remove(key, fn) {
    // 取消订阅消息
    let fns = this.clientList[key];

    if (!fns) {
      // 如果 key 对应的消息没有被人订阅，则直接返回
      return false;
    }

    if (!fn) {
      // 如果没有传入具体的回调函数， 表示需要取消key 对应消息的所有订阅
      fns && (fns.length = 0);
    } else {
      for (let l = fns.length - 1; l >= 0; l--) {
        let _fn = fns[l];

        if (_fn === fn) {
          fns.splice(l, 1);
        }
      }
    }
  },
};

let installEvent = function (obj) {
  for (let item in myEvent) {
    obj[item] = myEvent[item];
  }
};

let salesOffice = {};

installEvent(salesOffice);

salesOffice.listen("squareMeter88", (arguments) => {
  console.log("squareMeter88", arguments);
});

salesOffice.trigger("squareMeter88", 2000);
