import "bootstrap";
import "./style.css";


let startingBoard = ["","","","","","","","",""]
let actualPlayer = "X"

document.querySelectorAll(".grid").forEach(element => {
  element.addEventListener("click", ()=>{
    let index = element.getAttribute("data-index")
    if(startingBoard[index] != "") return
    startingBoard[index] = actualPlayer
    element.innerHTML = actualPlayer
    if (actualPlayer == "X"){
      actualPlayer = "O"
    } else {
      actualPlayer = "X"
    }
  })
})

