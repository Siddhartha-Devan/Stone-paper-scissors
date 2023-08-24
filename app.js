
// const Points = {
//     'Wins': 0,
//     'Loses': 0,
//     'Ties': 0
// }

console.log(localStorage.getItem("points"))
let Points = JSON.parse(localStorage.getItem('points'))

if (Points === null) {
    Points = {
        'Wins': 0,
        'Loses': 0,
        'Ties': 0
    }
}


function resetScore(points) {

    displayDivRef = document.querySelector(".displaydiv")
    resultDivRef = document.querySelector(".resultDiv")
    points.Wins = 0
    points.Loses = 0
    points.Ties = 0
    localStorage.removeItem('points')
    resultDivRef.innerHTML = `You have reset the score` 
    displayDivRef.innerHTML = `Wins: ${points.Wins} <br> Loses: ${points.Loses} <br> Ties: ${points.Ties}`
}

function computerPlay(yourChoice, points) {

    displayDivRef = document.querySelector(".displaydiv")
    resultDivRef = document.querySelector(".resultDiv")


    output = ['stone', 'paper', "scissors"]
    chosenInd = Math.floor(Math.random()*output.length)
    chosen = output[chosenInd]
    if (yourChoice === 'stone'){
        if (chosen === 'stone'){
            // alert ("Tie, computer chose " + chosen)
            resultDivRef.innerHTML = `Tie, computer chose ${chosen}` 
            points['Ties'] += 1
        }
        if (chosen === 'paper'){
            // alert ("You lose, computer chose " + chosen )
            resultDivRef.innerHTML = `You lose, computer chose ${chosen}` 
            points['Loses'] += 1
        }
        if (chosen === 'scissors'){
            // alert ("You Win, computer chose " + chosen)
            resultDivRef.innerHTML = `You Win, computer chose ${chosen}` 
            points['Wins'] += 1 
        }
    }

    if (yourChoice === 'scissors'){
        if (chosen === 'stone'){
            // alert ("You lose, computer chose " + chosen)
            resultDivRef.innerHTML = `You lose, computer chose ${chosen}` 
            points['Loses'] += 1
        }
        if (chosen === 'paper'){
            // alert ("You Win,computer chose " + chosen)
            resultDivRef.innerHTML = `You Win, computer chose ${chosen}` 
            points['Wins'] += 1 
        }
        if (chosen === 'scissors'){
            // alert ("Tie, computer chose " + chosen)
            resultDivRef.innerHTML = `Tie, computer chose ${chosen}` 
            points['Ties'] += 1
        }
    }
    if (yourChoice === 'paper'){
        if (chosen === 'stone'){
            // alert ("You Win, computer chose " + chosen)
            resultDivRef.innerHTML = `You Win, computer chose ${chosen}` 
            points['Wins'] += 1 
        }
        if (chosen === 'paper'){
            // alert ("Tie, computer chose " + chosen)
            resultDivRef.innerHTML = `Tie, computer chose ${chosen}` 
            points['Ties'] += 1
        }
        if (chosen === 'scissors'){
            // alert ("You Lose, computer chose " + chosen)
            resultDivRef.innerHTML = `You Lose, computer chose ${chosen}` 
            points['Loses'] += 1
        }

    }

    localStorage.setItem('points', JSON.stringify(points));
    console.log(points)
    displayDivRef.innerHTML = `Wins: ${Points.Wins} <br> Loses: ${Points.Loses} <br> Ties: ${Points.Ties}`
    
}


