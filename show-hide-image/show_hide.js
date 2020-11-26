var backgrounds= document.getElementsByClassName("backImage");
var imgs= document.getElementById('gameGrid');

window.onload=function(){
    console.log(backgrounds[0])
    setTimeout(hideAllImages, 3000);
}

imgs.addEventListener('click', imageClick)

function hideAllImages(){
    for(let i=0; i<backgrounds.length; i++){
         hideImage(backgrounds[i]);
    }
}

function hideImage(back){
    back.classList.add("showBackground");
}

function showImage(back){
    back.classList.remove("showBackground");
}

function imageClick(event){
    if(!event.target.classList.contains('buttonImage')){
        toggleImage(event.target);
    }
    else{
        back=event.target.getElementsByClassName('backImage')[0];
        toggleImage(back);
    }

    function toggleImage(b){
        console.log(b);
        if(b.classList.contains('showBackground')){
            showImage(b);
        }else{
            hideImage(b);
        }
    }

}
