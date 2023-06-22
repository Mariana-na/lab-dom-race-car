window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let newgame;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    newgame = new Game();
    newgame.start(); 
  }

  window.addEventListener("keydown", function (event){
    if (event.key === "ArrowLeft"){
      directionX = -1;
    } else if (event.key === "ArrowRight"){
      directionX = 1;
    } else if (event.key === "ArrowUp"){
      directionY = -1;
    } else if (event.key === "ArrowDown"){
      directionY = 1;
    }
  })

};
