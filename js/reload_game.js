const playAgain = document.getElementById("finalBtn");

playAgain.addEventListener("click", restart);

function restart (){
    var finalPage = document.getElementById("final");
    var startPage = document.getElementById("start");
    finalPage.style.display = "none";
    startPage.style.display = "block";

}