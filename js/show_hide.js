var backgrounds= document.getElementsByClassName("backImage");
var imgs= document.getElementById('gameGrid');
var pairOfImages=[];
var correctAnswers=0;
var canClick=false;
var isHardMode = false;

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
                    setTimeout(checkIfWinner, 1000);
                }else{

                    setTimeout(hidePairOfImg, 3000);
                    if(isHardMode){
                        setTimeout(youLose, 1000);
                    }
                }
            }
        }else{
            hideImage(b);
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
    stopTime();
    ranking.pop();
    showRanking();
    document.getElementById('result').innerHTML='You lose :(';
    document.getElementById('finalScore').innerHTML='';
    document.getElementById("start").style.display = "none";
    document.getElementById('final').style.display='block';
    document.getElementById('gameSection').style.display='none';
    grid.innerHTML='';

}
function finishGame(){
    alert('you Win');
    stopTime();
    let fScore=getTime()
    ranking[0].score=fScore;
    showRanking();
    document.getElementById('result').innerHTML='Well done!';
    document.getElementById('finalScore').innerHTML='You won in '+fScore+' seconds';
    document.getElementById("start").style.display = "none";
    document.getElementById('final').style.display='block';
    document.getElementById('gameSection').style.display='none';
    grid.innerHTML='';
}
const startBtn = document.getElementById("startBtn");
//const currentPlayer = document.getElementById("currentPlayer");
//const username = document.getElementById("username");
//const score = document.getElementById("score");

//currentPlayer.innerHTML = "";
//score.innerHTML = "";


startBtn.addEventListener("click", startGame);
document.getElementById("final").style.display = "none";

function startGame(){
    let haveUsername=getUsername();
    if(haveUsername){
        cronometer();
        document.getElementById("start").style.display = "none";
        document.getElementById('final').style.display='none';
        document.getElementById('gameSection').style.display='block';
        //currentPlayer.innerHTML = username.value;
        //score.innerHTML = "Currently playing..."
        createGrid();
        backgrounds= document.getElementsByClassName("backImage");
        pairOfImages=[];
        correctAnswers=0;
        canClick=false;
        isHardMode = document.getElementById("hard").checked;
        setTimeout(hideAllImages, 3000);
        showRanking();
    }
}
