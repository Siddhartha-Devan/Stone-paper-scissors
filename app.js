const Points = {
    'Wins': 0,
    'Loses': 0,
    'Ties': 0
}


function computerPlay(yourChoice, points) {
    output = ['stone', 'paper', "scissors"]
    chosenInd = Math.floor(Math.random()*output.length)
    chosen = output[chosenInd]
    if (yourChoice === 'stone'){
        if (chosen === 'stone'){
            alert ("Tie, computer chose " + chosen)
            points['Ties'] += 1
        }
        if (chosen === 'paper'){
            alert ("You lose, computer chose " + chosen )
            points['Loses'] += 1
        }
        if (chosen === 'scissors'){
            alert ("You Win, computer chose " + chosen)
            points['Wins'] += 1 
        }
    }

    if (yourChoice === 'scissors'){
        if (chosen === 'stone'){
            alert ("You lose, computer chose " + chosen)
            points['Loses'] += 1
        }
        if (chosen === 'paper'){
            alert ("You Win,computer chose " + chosen)
            points['Wins'] += 1 
        }
        if (chosen === 'scissors'){
            alert ("Tie, computer chose " + chosen)
            points['Ties'] += 1
        }
    }
    if (yourChoice === 'paper'){
        if (chosen === 'stone'){
            alert ("You Win, computer chose " + chosen)
            points['Wins'] += 1 
        }
        if (chosen === 'paper'){
            alert ("Tie, computer chose " + chosen)
            points['Ties'] += 1
        }
        if (chosen === 'scissors'){
            alert ("You Lose, computer chose " + chosen)
            points['Loses'] += 1
        }
    }

    console.log(points)

}








