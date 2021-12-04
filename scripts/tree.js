let health = document.getElementById("health")

function hit(){
    let health = document.getElementById("health")
    health.value -= Math.random() * 5;
}

function dead(){
    let health = document.getElementById("health")
    if (health <= 0); {
        console.log('corno')
    }
}