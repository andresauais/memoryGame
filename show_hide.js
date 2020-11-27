var backgrounds= document.getElementsByClassName("backImage");
var imgs= document.getElementById('gameGrid');
var pairOfImages=[];

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
function hidePairOfImg(){
    pairOfImages.forEach(btn=>{
        back=btn.getElementsByClassName('backImage')[0];
        hideImage(back);
    })
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
        if(b.classList.contains('showBackground')){
            showImage(b);
            let full=addImageToArray(b.parentNode);
            if(full){
                if(areTheSameImage()){
                    
                }else{
                    setTimeout(hidePairOfImg, 3000);
                }
            }
        }else{
            //hideImage(b);
        }
        console.log(pairOfImages);
    }
}

function areTheSameImage(){
    if(pairOfImages[0].style.backgroundImage==pairOfImages[1].style.backgroundImage){
        return true;
    }else{
        return false;
    }
}

//returns false if has 1 object after adding and true if has 2;
function addImageToArray(bttn){
    pairOfImages.push(bttn);
    return pairOfImages.length==2;
}
