let $ = {};

$.each = function (obj, callback) {
  let i = 0;
  let length = obj.length;
  let isArray = isArrayLike(obj);

  // 迭代类数组
  if (isArray) {
    for (; i < length; i++) {
      let value = callback.call(obj[i], i, obj[i]);
      if (value == false) {
        break;
      }
    }
  }
  else {
    // 迭代对象
    for( i in obj )
    {
        value = callback.call(obj[i] , i , obj[i]);
        if( value == false ) break;
    }
  }
};
