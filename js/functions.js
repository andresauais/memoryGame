
const grid = document.querySelector(".grid");
const randomImgArray = randomImageOrder(imgArray);


function createGrid() {
  for (let i = 0; i < randomImgArray.length; i++) {
    const card = document.createElement("button");
    card.style.backgroundImage = randomImgArray[i].img;
    card.style.backgroundSize = "cover";
    card.setAttribute("class", "buttonImage");
    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "backImage");
    card.appendChild(btnDiv);
    card.setAttribute("id", "button" + i);
    grid.appendChild(card);
  }
}
showRanking();
function randomImageOrder(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

