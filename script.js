let playerScore = 0, computerScore = 0, round = 0
const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(computerSelection, playerSelection) {
    if(computerSelection === playerSelection) {
        console.log('Its a draw')
        playerScore++
        computerScore++
        
    } else if(computerSelection === 'Rock'.toLowerCase() && playerSelection === 'Scissors' || 
    computerSelection === 'Paper' && playerSelection === 'Rock' ||
    computerSelection === 'Scissors' && playerSelection === 'Paper') {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        computerScore++
        
    } else {
        console.log(`You win, ${playerSelection} beat ${computerSelection}`)
        playerScore++
    }
    console.log(`Player Score: ${playerScore}`)
    console.log(`computer Score: ${computerScore}`)
}

function game() {
    for(i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice')
        playRound(getComputerChoice(), playerSelection)
    }
    if(playerScore === computerScore) {
        console.log('You tied with the computer')
    } else if (playerScore > computerScore) {
        console.log('You won, you beat the computer') 
    } else {
        console.log('You lost, the computer beat you')
    }
}

game()