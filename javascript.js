var display = document.getElementById("inputbox");
var btn = document.querySelectorAll("button");
var str = "";

var array  = Array.from(btn);

array.forEach(function(e){

e.addEventListener( "click",function(dets){

if(dets.target.innerHTML === "Del"){

    str = str.substring(0, str.length-1)
    display.value = str;
}

else if(dets.target.innerHTML === "Clar"){
    str = "";
    display.value = str;
}

else if(dets.target.innerHTML === "="){
    str = eval(str);
    display.value = str;
}

else{
    str += dets.target.innerHTML
    display.value = str;
}
})
})





