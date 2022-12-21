
var list = document.getElementsByClassName("animated_text");
setInterval(function(){
    for(let i=0;i<list.length;++i){
        if(list[i].style.borderColor=="black"){
            list[i].style.borderColor = "transparent";
        }else{
            list[i].style.borderColor = "black";
        }
    }
}, 300);

const greet1 = "Hello, World! :)";
const greet2 = "Visitor ;)";
var i = 0;
const tostop = setInterval(function(){
    list[0].innerHTML += greet1.charAt(i);
    ++i;
    if(i>=greet1.length){
        document.getElementById("oops_div").style.animationPlayState = "running";
        clearInterval(tostop);
        var j = 12;
        setTimeout(function(){
            const another = setInterval(function(){
                var insert = list[0].innerHTML.slice(0, j);
                --j;
                list[0].innerHTML = insert;
                if(j<=6){
                    clearInterval(another);
                    setTimeout(function(){
                        var k = 0;
                        const last = setInterval(function(){
                            list[0].innerHTML += greet2.charAt(k);
                            ++k;
                            if(k>=greet2.length){
                                clearInterval(last);
                                setTimeout(function(){
                                    document.getElementById("sidebar").style.display = "flex"; // flex
                                    document.getElementById("background_div").style.display = "block"; // block
                                    document.getElementById("visitor_page").style.animationPlayState = "running";
                                }, 1000);
                            }
                        }, 200);
                    }, 900);
                }
            }, 200);
        }, 1000);
    }
}, 200);

