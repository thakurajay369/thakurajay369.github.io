var X = window.pageXOffset;
var Y = window.pageYOffset;
console.log(X, Y);
if(X<100||Y<100){
    document.getElementsByClassName("icons")[0].src = "unProcessed/user.png";
}else{
    document.getElementsByClassName("icons")[0].src = "unProcessed/user_unfilled.png";
}
window.onscroll = function(){
    console.log(X, Y);
    if(X<100||Y<100){
        document.getElementsByClassName("icons")[0].src = "unProcessed/user.png";
    }else{
        document.getElementsByClassName("icons")[0].src = "unProcessed/user_unfilled.png";
    }
}

setInterval(function(){
    var list1 = document.getElementsByClassName("red-blue");
    var w = window.innerWidth;
    var h = window.innerHeight;

    for(let i=0;i<list1.length;++i){
        list1[i].style.left = Math.floor(Math.random()*10000)%(w-20) + "px";
        list1[i].style.top = Math.floor(Math.random()*10000)%(h-20) + "px";
        list1[i].style.animationDuration = Math.random()*1.5 + "s";
    }

}, 3600);

setInterval(function(){
    var list1 = document.getElementsByClassName("orange-purple");
    var w = window.innerWidth;
    var h = window.innerHeight;

    for(let i=0;i<list1.length;++i){
        list1[i].style.left = Math.floor(Math.random()*10000)%(w-20) + "px";
        list1[i].style.top = Math.floor(Math.random()*10000)%(h-20) + "px";
        list1[i].style.animationDuration = Math.random()*0.5 + "s";
    }
    
}, 2500);
setInterval(function(){
    var list1 = document.getElementsByClassName("purple-red");
    
    var w = window.innerWidth;
    var h = window.innerHeight;

    for(let i=0;i<list1.length;++i){
        list1[i].style.left = Math.floor(Math.random()*10000)%(w-50) + "px";
        list1[i].style.top = Math.floor(Math.random()*10000)%(h-50) + "px";
        list1[i].style.animationDuration = Math.random()*2 + "s";
    }
    
}, 2000);
setInterval(function(){
    var list2 = document.getElementsByClassName("orange-red");
    var w = window.innerWidth;
    var h = window.innerHeight;

    for(let i=0;i<list2.length;++i){
        list2[i].style.left = Math.floor(Math.random()*10000)%(w-50) + "px";
        list2[i].style.top = Math.floor(Math.random()*10000)%(h-50) + "px";
        list2[i].style.animationDuration = Math.random()*2 + "s";
    }
}, 3000);
setInterval(function(){
    var list2 = document.getElementsByClassName("blue-purple");
    var w = window.innerWidth;
    var h = window.innerHeight;

    for(let i=0;i<list2.length;++i){
        list2[i].style.left = Math.floor(Math.random()*10000)%(w-50) + "px";
        list2[i].style.top = Math.floor(Math.random()*10000)%(h-50) + "px";
        list2[i].style.animationDuration = Math.random()*2 + "s";
    }
}, 2500);