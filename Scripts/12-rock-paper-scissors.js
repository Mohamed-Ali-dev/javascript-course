

//************************************************
//Rock Paper Scissors Game with Objects and fuctions
// score constant to keep track of wins, losses and ties
let score = 
JSON.parse(localStorage.getItem('score')) || {
wins:0,
losses:0,
ties:0
};

updateScoreElement();
//************************************************
/*
// initialize score if it is null
//if !score means if score is null or undefined
if(!score ){
  score = {
    wins:0,
    losses:0,
    ties:0
  };
}
  */

  function updateScoreElement(){
  document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
      localStorage.setItem('score', JSON.stringify(score));

  }
function pickComputerMove(){
      const randomNumber = Math.random();
      let computerMove = '' ;
      
      if(randomNumber > 0 && randomNumber < 1 / 3){
                  computerMove = 'rock' ;
              }
              else if(randomNumber >= 1/3 && randomNumber < 2/3){
                  computerMove = 'paper' ;
              }
              else{
                  computerMove = 'scissors' ;
              }
              console.log(`Computer Move :${computerMove}`);
              return computerMove;
}
let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
  intervalId = setInterval(() =>{
    const userMove = pickComputerMove();
  PlayGame(userMove);
  }, 1000)
  isAutoPlaying = true;
}
else{
  clearInterval(intervalId);
  isAutoPlaying = false; 
}
}
document.querySelector('.js-rock-button').addEventListener('click', 
  () => {
    PlayGame('Rock');
  }
)
document.querySelector('.js-paper-button').addEventListener('click', 
  () => {
    PlayGame('Paper');
  }
)
document.querySelector('.js-scissors-button').addEventListener('click', 
  () => {
    PlayGame('Scissors');
  }
)
document.querySelector('.reset-score-bottom').addEventListener('click', () =>{
  score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
});
document.body.addEventListener('keydown', (event) =>{
  if(event.key === 'r'){
    PlayGame('rock');
  }
  else if(event.key === 'p'){
    PlayGame('paper');
  }
  else if(event.key === 's'){
    PlayGame('scissors');
  }
})
function PlayGame(userMove){
let computerMove = pickComputerMove();  
        let result = '';
        if(userMove === 'Scissors'){
            if(computerMove === 'rock'){
                    result = 'You lost!';
                }
                else if(computerMove === 'paper'){
                        result = 'You won!';
                }
                else{
                    result = 'You tied!';
                }
        }
        else if(userMove === 'Paper'){
            if(computerMove === 'rock'){
                    result = 'You won!';
                }
                else if(computerMove === 'paper'){
                        result = 'You tied!';
                }
                else{
                    result = 'You lost!';
                }
        }
        else{
            if(computerMove === 'rock'){
                    result = 'You tied!';
                }
                else if(computerMove === 'paper'){
                        result = 'You lost!';
                }
                else{
                    result = 'You won!';
                }
        }
        // update the score object based on the result
        if(result === 'You won!'){
          score.wins += 1;
        }
        else if(result === 'You lost!'){
          score.losses += 1;
        }
        else{
          score.ties += 1;
        }

        updateScoreElement();
        document.querySelector('.js-moves').innerHTML = `  You <img class="move-icon" src="Images/${userMove}-emoji.png"> <img class="move-icon" src="Images/${computerMove}-emoji.png"> Computer`;

        document.querySelector('.js-result').innerHTML = result;
    
        }

