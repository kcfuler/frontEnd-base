let  myImg = (function(){
    let imgNode = document.createElement("img");
    document.body.appendChild(imgNode);

    return {
        setSrc: function( src ){
            imgNode.src = src; 
        }
    }
})();

let proxyImg = ( function () {
    let img = new Image;
    
    img.onload = function(){
        myImg.setSrc = this.src;
    }

    return {
        setSrc : function (src){
            myImg.setSrc("http://loading.gif");

            img.src = src;
        }
    }
})()