let randomNumber = Math.floor(Math.random() * 3) + 1;
let xs = prompt("Piedra, papel o tijeras")
function piedraPapelTijeras() {
    /** el codigo juega a piedra papel y tijeras */
    switch (randomNumber) {
        case 1:
            console.log("la maquina tiro papel y el jugador tiro " + xs)
            if (xs == "papel") {
                console.log("empate");
            }
            else if (xs == "piedra") {
                console.log("perdiste");
            }
            else if (xs == "tijeras") {
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
            }
            else if (xs == "papel") {
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
            }
            else if (xs == "piedra") {
                console.log("ganaste");
            }
            break;

        default:
            break;
    }

}
piedraPapelTijeras()