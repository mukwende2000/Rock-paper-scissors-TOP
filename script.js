// p1 stands for player one
// Therefore p1Score is player one score
const textResult = document.querySelector('.text-result')
const p1Score = document.querySelector('.p1 .score')
const p2Score = document.querySelector('.p2 .score')
const gestures = document.querySelectorAll('.gameplay img')
const round = document.querySelector('.round')

gestures.forEach(gesture => {
    gesture.addEventListener('click', playRound)
})

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(e) {
    const playerSelection = e.target.getAttribute('src').slice(0, e.target.getAttribute('src').indexOf('.'))
    const computerSelection = getComputerChoice()
    if(computerSelection === playerSelection) {
        textResult.textContent = 'Its a draw'
        round.textContent++
        game()
        
    } else if(computerSelection === 'rock' && playerSelection === 'scissors' || 
    computerSelection === 'paper' && playerSelection === 'rock' ||
    computerSelection === 'scissors' && playerSelection === 'paper') {
        textResult.textContent =`You lose, ${computerSelection} beats ${playerSelection}`
        p2Score.textContent++
        round.textContent++
        game()
        
    } else {
        textResult.textContent = `You win, ${playerSelection} beat ${computerSelection}`
        p1Score.textContent++
        round.textContent++
        game()
    }
}

function game() {
    if(round.textContent < 6) return
    if(p1Score.textContent === p2Score.textContent) {
        textResult.textContent = 'You tied with the computer'
        round.textContent = 5
    } else if (p1Score.textContent > p2Score.textContent) {
        textResult.textContent = 'You won, you beat the computer' 
        round.textContent = 5
    } else {
        textResult.textContent = 'You lost, the computer beat you'
        round.textContent = 5
    }
    setTimeout(() => {
        p2Score.textContent = 0
        p1Score.textContent = 0
        textResult.textContent = 'Try and beat the computer'
        round.textContent = 1
    }, 2000);
}