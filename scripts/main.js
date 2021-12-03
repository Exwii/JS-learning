let playerChoice 
let computerChoice
let scorePlayer = 0
let scoreComputer = 0
let draw = false


function rock() {
    const rock = 'Pedra'
    playerChoice = rock
    computerChoice = Math.random()
    pcChoice()
    comparison(playerChoice, computerChoice)
    reload()
}

function paper() {
    const paper = 'Papel'
    playerChoice = paper
    computerChoice = Math.random()
    pcChoice()
    comparison(playerChoice, computerChoice)
    reload()
}

function scissors() {
    const scissors = 'Tesoura'
    playerChoice = scissors
    computerChoice = Math.random()
    pcChoice()
    comparison(playerChoice, computerChoice)
    reload()
}

function pcChoice() {
    if(computerChoice < 0.34){
        computerChoice = 'Pedra'
    }
    else if(computerChoice <= 0.68 ){
        computerChoice = 'Papel'
    }
    else{
        computerChoice = 'Tesoura'
    }
}

function comparison(choice1, choice2) {
    if(choice1 === choice2){
        draw = true
        console.log(draw)
        
    }
    if(choice1 === 'Pedra')
        if(choice2 === 'Papel'){
            scoreComputer++
            
        }
        else{
            scorePlayer++
            
        }
    if(choice1 === 'Papel'){
        if(choice2 === 'Tesoura'){
            scoreComputer++
            
        }
        else{
            scorePlayer++
            
        }
    }
    if(choice1 === 'Tesoura'){
        if(choice2 === 'Pedra'){
            scoreComputer++
            
        }
        else{
            scorePlayer++
            
        }
    }
        
}

function reload() {
    document.getElementById("empate").style.display = 'none';
    scorePlayer = document.getElementById('scorePlayer').innerHTML = scorePlayer
    scoreComputer = document.getElementById('scoreComputer').innerHTML = scoreComputer
    playerChoice = document.getElementById('playerChoice').innerHTML = playerChoice
    computerChoice = document.getElementById('computerChoice').innerHTML = computerChoice
    if(draw === true){
        document.getElementById("empate").style.display = 'block';
        
    }

} 