let health = document.getElementById("health")
let qntfolha = 8
let folhas = ["folha1","folha2","folha3","folha4","folha5","folha6","folha7","folha8"]
let folha






function hit(){
    health = document.getElementById("health")
    health.value -= Math.random() * 5;
    random()
    death()
}


function random() {
        const random = Math.floor(Math.random() * folhas.length)
        return folha = folhas[random]
        
    }




 function death(){
    if(health.value <= 90) {
        document.getElementById(folha).style.display = "none"
        document.getElementById(folha).style.display = "none"
    }

    if(health.value <= 60) {
        document.getElementById(folha).style.display = "none"
        document.getElementById(folha).style.display = "none"
    }

    if(health.value <= 40) {
        document.getElementById(folha).style.display = "none"
        document.getElementById(folha).style.display = "none"
    }

    if(health.value <= 20) {
        document.getElementById(folha).style.display = "none"
        document.getElementById(folha).style.display = "none"
    }

    if(health.value <= 0) {
        document.getElementById("tronco").style.display = "none"
    }
} 

