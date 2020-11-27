var backgrounds= document.getElementsByClassName("backImage");
var imgs= document.getElementById('gameGrid');
var pairOfImages=[];
var correctAnswers=0;
var canClick=false;
var isHardMode = document.getElementById("hard").checked;

window.onload=function(){
    setTimeout(hideAllImages, 3000);
}

imgs.addEventListener('click', imageClick)

function hideAllImages(){
    for(let i=0; i<backgrounds.length; i++){
         hideImage(backgrounds[i]);
    }
    canClick=true;
}
function hideImage(back){
    back.classList.add("showBackground");
}
function hidePairOfImg(){
    pairOfImages.forEach(btn=>{
        back=btn.getElementsByClassName('backImage')[0];
        hideImage(back);
        pairOfImages=[];
    })
}


function showImage(back){
    back.classList.remove("showBackground");
}


function hideButton(bttn){
    bttn.classList.add("hiddenButton")
}
function hidePairOfButtons(){
    pairOfImages.forEach(btn=>{
        hideButton(btn);
        pairOfImages=[];
    });
}


function imageClick(event){
    if(pairOfImages.length<2 && canClick){
        if(!event.target.classList.contains('buttonImage')){
            toggleImage(event.target);
        }
        else{
            back=event.target.getElementsByClassName('backImage')[0];
            toggleImage(back);
        }
    }

    function toggleImage(b){
        if(b.classList.contains('showBackground')){
            showImage(b);
            let full=addImageToArray(b.parentNode);
            if(full){
                if(areTheSameImage()){
                    correctAnswers++;
                    setTimeout(hidePairOfButtons, 2000);
                    setTimeout(checkIfWinner, 2000);
                }else{
                    setTimeout(hidePairOfImg, 3000);
                    if(isHardMode){
                        setTimeout(youLose, 3000);
                    }
                }
            }
        }else{
            //hideImage(b);
        }
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

function checkIfWinner(){
    if(correctAnswers==8){
        finishGame();
    }
}
function youLose(){
    alert('you lose');
    //change page
        //to-do

}
function finishGame(){
    alert('you Win');
        //change page
        //to-do
}
function startGame(){
    createGrid();
    backgrounds= document.getElementsByClassName("backImage");
    pairOfImages=[];
    correctAnswers=0;
    canClick=false;
    isHardMode = document.getElementById("hard").checked;
}
