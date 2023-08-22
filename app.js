function computerPlay(yourChoice) {
    output = ['stone', 'paper', "scissors"]
    chosenInd = Math.floor(Math.random()*output.length)
    chosen = output[chosenInd]
    if (yourChoice === 'stone'){
        if (chosen === 'stone'){
            alert ("Tie, computer chose " + chosen)
        }
        if (chosen === 'paper'){
            alert ("You lose, computer chose " + chosen )
        }
        if (chosen === 'scissors'){
            alert ("You Win, computer chose " + chosen)
        }
    }

    if (yourChoice === 'scissors'){
        if (chosen === 'stone'){
            alert ("You lose, computer chose " + chosen)
        }
        if (chosen === 'paper'){
            alert ("You Win,computer chose " + chosen)
        }
        if (chosen === 'scissors'){
            alert ("Tie, computer chose " + chosen)
        }
    }
    if (yourChoice === 'paper'){
        if (chosen === 'stone'){
            alert ("You Win, computer chose " + chosen)
        }
        if (chosen === 'paper'){
            alert ("Tie, computer chose " + chosen)
        }
        if (chosen === 'scissors'){
            alert ("You Lose, computer chose " + chosen)
        }
    }

}







