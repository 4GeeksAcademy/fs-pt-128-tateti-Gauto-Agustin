import "bootstrap";
import "./style.css";


let startingBoard = ["", "", "", "", "", "", "", "", ""]
let actualPlayer = "X"


let gameContinue = true;
const winningOptions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

function resultWinner() {
  let roundWon = false;
  for (let i = 0; i < winningOptions.length; i++) {
    const [a, b, c] = winningOptions[i];
    if (startingBoard[a] === "" || startingBoard[b] === "" || startingBoard[c] === "") continue;
    if (startingBoard[a] === startingBoard[b] && startingBoard[b] === startingBoard[c]) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    document.getElementById("status-game").innerHTML = `¡Ganó ${actualPlayer}!`
    gameContinue = false;
    return;
  }
  if (!startingBoard.includes("")) {
    document.getElementById("status-game").innerHTML = "¡Empate!"
    gameContinue = false;
  }
}




document.querySelectorAll(".grid").forEach(element => {
  element.addEventListener("click", () => {
    let index = element.getAttribute("data-index")
    if (startingBoard[index] !== "" || !gameContinue) return;
    if (startingBoard[index] != "") return
    startingBoard[index] = actualPlayer
    element.innerHTML = actualPlayer
    resultWinner();
    if (actualPlayer == "X") {
      actualPlayer = "O"
    } else {
      actualPlayer = "X"
    }
    const textoTurno = document.querySelector(".texto")
    textoTurno.innerHTML = actualPlayer
  })
})




   function resetGame() {
    startingBoard = ["", "", "", "", "", "", "", "", ""];
    actualPlayer = "X";
    gameContinue = true;

    document.querySelectorAll(".grid").forEach(grid => {
        grid.innerHTML = "";
    });

    document.getElementById("status-game").innerHTML = "";
}


document.getElementById("reset-button").addEventListener("click", resetGame);


