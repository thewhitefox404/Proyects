var player = "X";
var cont = 0;
var game = false;
var playerWinner = false;
var playerTurn = "Turn player: ";
var alertMessage1 = "Please start a new game";
var alertMessage2 = "Game already started";
var alertMessage3 = "There are no games started";
var banner = document.getElementById("playerTurn");
var board = [
  [[], [], []],
  [[], [], []],
  [[], [], []],
];

function onclic(boxId) {
  if (game && !playerWinner) {
    var box = document.getElementById(boxId);
    if (box.innerHTML == "") {
      box.innerHTML = player;
      winner();
      if (player == "X" && !playerWinner && cont != 9) {
        player = "O";
        banner.innerHTML = playerTurn + player;
      } else if (player == "O" && !playerWinner && cont != 9) {
        player = "X";
        banner.innerHTML = playerTurn + player;
      }
    }
  } else if (playerWinner) {
    // If vacio que captura cuando el juego ya termino y quieren seguir pulsando el tablero
  } else {
    alert(alertMessage1);
  }
}

function start() {
  if (!game) {
    game = true;
    banner.innerHTML = playerTurn + player;
  } else if (game) {
    alert(alertMessage2);
  }
}

function resetGame() {
  if (game) {
    for (let i = 1; i <= 9; i++) {
      var box = "box" + i.toString();
      var reset = document.getElementById(box);
      reset.innerHTML = "";
    }
    cont = 0;
    player = "X";
    playerWinner = false;
    banner.innerHTML = playerTurn + player;
  } else if (!game) {
    alert(alertMessage3);
  }
}

function winner() {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      var box = "box" + (i * 3 + j + 1).toString();
      board[i][j] = document.getElementById(box).innerHTML;
    }
  }
  if (
    (board[0][0] === player &&
      board[0][1] === player &&
      board[0][2] === player) || // Horizontal
    (board[1][0] === player &&
      board[1][1] === player &&
      board[1][2] === player) || // Horizontal
    (board[2][0] === player &&
      board[2][1] === player &&
      board[2][2] === player) || // Horizontal
    (board[0][0] === player &&
      board[1][0] === player &&
      board[2][0] === player) || // Vertical
    (board[0][1] === player &&
      board[1][1] === player &&
      board[2][1] === player) || // Vertical
    (board[0][2] === player &&
      board[1][2] === player &&
      board[2][2] === player) || // Vertical
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) || // Diagonal 1
    (board[0][2] === player && board[1][1] === player && board[2][0] === player) // Diagonal 2
  ) {
    banner.innerHTML = "Ganador: " + player;
    playerWinner = true;
    console.log("Ganador: " + player);
    console.log(board);
  }
  cont++;
  if (cont == 9 && !playerWinner) {
    banner.innerHTML = "Tie";
  }
}
