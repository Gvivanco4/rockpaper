function getRivalChoice() {
let number = Math.random();
let hand;

if (number <= .25)
    return hand ='scissors';

else if(number >.25 && number <= .5)
    return hand= 'paper';

else
    return hand= 'rock';

}

function getYourChoice() {
    let user_choice = prompt('What hand do you choose?: ');
    return user_choice.toLowerCase();
}

function playGame () {

    let userScore = 0;
let computerScore = 0;
    for(let i = 0; i < 5; i++) {

 const user = getYourChoice();
const computer = getRivalChoice();

if (user === computer) {
      alert('It’s a tie!');
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
    ) {
      alert('User wins!');
      userScore++;
    } else {
      alert('Computer wins!');
      computerScore++;
    }

console.log("User: ", "Score: ", user, userScore);
console.log("Computer:", "Score", computer, computerScore);

}

}

playGame();


