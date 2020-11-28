window.onload = init;
let id;
let h = 0;
let m = 0;
let s = 0;

function init() {
    document.getElementById("displayClock").innerHMTL ="00:00:00";
    //document.getElementById("startBtn").addEventListener("click", cronometer);
    document.getElementById("finalBtn").addEventListener("click", restartTime);
};

function writeTime(){
    let hAux = 0; 
    let mAux = 0; 
    let sAux = 0;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("displayClock").innerHTML = hAux + ":" + mAux + ":" + sAux;
};

function cronometer(){
    id = setInterval(writeTime, 1000);
    //document.getElementById("startBtn").removeEventListener("click", cronometer);   
};

function stopTime(){
    //const id = setInterval(writeTime, 1000);
    clearInterval(id);
    //document.getElementById("startBtn").addEventListener("click", cronometer);
}

function restartTime(){
    //const id = setInterval(writeTime, 1000);
    clearInterval(id);
    document.getElementById("displayClock").innerHTML="00:00:00";
    h=0;m=0;s=0;
    //document.querySelector("startBtn").addEventListener("click",cronometer);
};

function getTime(){
    let seconds=(h*60+m)*60+s;
    return seconds;
}
