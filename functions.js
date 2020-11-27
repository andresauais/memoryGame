const imgArray = [
  {
    name: "bottle",
    img:
      "url('https://images.unsplash.com/photo-1592243364766-eb1bd3a71709?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "strawberry",
    img:
      "url('https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1084&q=80')",
  },
  {
    name: "hamburguer",
    img:
      "url('https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "pancake",
    img:
      "url('https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=938&q=80')",
  },
  {
    name: "bread",
    img:
      "url('https://images.unsplash.com/photo-1573333515743-56d57731dd1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "lemon",
    img:
      "url('https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "table",
    img:
      "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "berries",
    img:
      "url('https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "bottle",
    img:
      "url('https://images.unsplash.com/photo-1592243364766-eb1bd3a71709?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "strawberry",
    img:
      "url('https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1084&q=80')",
  },
  {
    name: "hamburguer",
    img:
      "url('https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "pancake",
    img:
      "url('https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&auto=format&fit=crop&w=938&q=80')",
  },
  {
    name: "bread",
    img:
      "url('https://images.unsplash.com/photo-1573333515743-56d57731dd1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "lemon",
    img:
      "url('https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "table",
    img:
      "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
  },
  {
    name: "berries",
    img:
      "url('https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')",
  },
];
const grid = document.querySelector(".grid");
const randomImgArray = randomImageOrder(imgArray);
function createGrid() {
  for (let i = 0; i < imgArray.length * 2; i++) {
    const card = document.createElement("button");
    card.style.backgroundImage = imgArray[i].img;
    card.style.backgroundSize = "cover";
    card.setAttribute("class", "buttonImage");
    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "backImage");
    card.appendChild(btnDiv);
    card.setAttribute("id", "button" + i);
    grid.appendChild(card);
  }
}

function randomImageOrder(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}




