function computerPlay(yourChoice) {
    output = ['stone', 'paper', "scissors"]
    chosenInd = Math.floor(Math.random()*output.length)
    chosen = output[chosenInd]
    if (yourChoice === 'stone'){
        if (chosen === 'stone'){
            alert ("Tie")
        }
        if (chosen === 'paper'){
            alert ("You lose computer chose ")
        }
        if (chosen === 'scissors'){
            alert ("You Win")
        }
    }

    if (yourChoice === 'scissors'){
        if (chosen === 'stone'){
            alert ("You lose")
        }
        if (chosen === 'paper'){
            alert ("You Win")
        }
        if (chosen === 'scissors'){
            alert ("Tie")
        }
    }
    if (yourChoice === 'paper'){
        if (chosen === 'stone'){
            alert ("You Win")
        }
        if (chosen === 'paper'){
            alert ("Tie")
        }
        if (chosen === 'scissors'){
            alert ("You Lose")
        }
    }

}







