let count= 0;
let count2=0;
function piedraPapelTijeras(randomNumber, xs) {
    /** el codigo juega a piedra papel y tijeras */
    switch (randomNumber) {
        case 1:
            console.log("la maquina tiro papel y el jugador tiro " + xs)
            if (xs == "papel") {
                console.log("empate");
            }
            else if (xs == "piedra") {
                console.log("perdiste");
                count2++;
            }
            else if (xs == "tijeras") {
                count++;
                console.log("ganaste");
            }
            break;

        case 2:
            console.log("la maquina tiro piedra y el jugador tiro " + xs)
            if (xs == "piedra") {
                console.log("empate");
            }
            else if (xs == "tijeras") {
                console.log("perdiste");
                count2++;
            }
            else if (xs == "papel") {
                count++;
                console.log("ganaste");
            }
            break;

        case 3:
            console.log("la maquina tiro tijeras y el jugador tiro " + xs)
            if (xs == "tijeras") {
                console.log("empate");
            }
            else if (xs == "papel") {
                console.log("perdiste");
                count2++;
            }
            else if (xs == "piedra") {
                console.log("ganaste");
                count++;
            }
            break;

        default:
            break;
    }
}
function game(){

    for (let i = 0; i < 5; i++) {
        
        let randomNumber = Math.floor(Math.random() * 3) + 1; 
        let xs = prompt("Piedra, papel o tijeras")
    piedraPapelTijeras(randomNumber, xs)
    console.log(count);
    }
    if (count<count2){
        console.log("gana la maquina");
    }
    else if (count>count2){
        console.log("ganaste a la maquina");
    }
    else{
        console.log("empataste con la maquina");
    }
}

game()