
//Funcion que ejecutara el juego de cachipun
function juegoCachipun() {
    //Solicitamos al usuario cuantas veces quiere jugar.
    var numJuegos = parseInt(prompt("¿Cuantas veces desea jugar?"))

    //Verificamos si el usuario ingresó un numero valido
    if (isNaN(numJuegos) || numJuegos <= 0) {
        alert("Por favor ingresa un numero valido mayor que cero")
    }

    //Contadores para los resultados.
    var ganaUser = 0;
    var ganaMaqui = 0;
    var empates = 0;

    //Se establece un ciclo para la cantidad de veces que el usuario jugara.
    for (i = 1; i <= numJuegos; i++) {
        alert("Juego n°" + i)
        //Solicita al usuario ingresar una opcion
        var eleccionUser = prompt("Elija piedra, papel o tijera").toLowerCase();
        //Verifica si lo ingresado es valido
        if (eleccionUser == "piedra" || eleccionUser == "papel" || eleccionUser == "tijera") {
            alert("elegiste " + eleccionUser)
        } else {
            alert("Por favor elige una opción válida: piedra, papel o tijera.")
            return juegoCachipun();
        }

        //Se genera un numero aleatorio para la maquina
        var eleccionRandom = Math.floor(Math.random() * 3)
        var eleccionMaquina;

        //Se establece condicion para asignarle piedra papel o tijera al valor de numero aleatorio.
        switch (eleccionRandom) {
            case 0:
                eleccionMaquina = "piedra";
                break;
            case 1:
                eleccionMaquina = "papel";
                break;
            case 2:
                eleccionMaquina = "tijera";
                break;
        }
        //Se compara la eleccion del usuario con la eleccion de la maquina y se da a conocer si se gano, perdio o es un empate.
        if (eleccionUser === eleccionMaquina) {
            alert(`"Has elegido" ${eleccionUser} "y la maquina" ${eleccionMaquina} "¡ES UN EMPATE!"`)
            empates++;
        } else if ((eleccionUser === 'piedra' && eleccionMaquina === 'tijera') ||
            (eleccionUser === 'papel' && eleccionMaquina === 'piedra') ||
            (eleccionUser === 'tijera' && eleccionMaquina === 'papel')) {
            alert(`"Has elegido" ${eleccionUser} "y la maquina" ${eleccionMaquina} "¡HAS GANADO!"`)
            ganaUser++;
        } else {
            alert(`"Has elegido" ${eleccionUser} "y la maquina" ${eleccionMaquina} "¡HAS PERDIDO!"`)
            ganaMaqui++;
        }
    }
    // Mostrar el resultado final de la cantidad de juegos, si perdio, gano o empato el total de veces que jugó.
    if (ganaUser > ganaMaqui) {
        alert("¡Felicidades! Has ganado " + ganaUser + " de " + numJuegos + " partidas.");
    } else if (ganaUser < ganaMaqui) {
        alert("¡Lo siento! Has perdido " + ganaMaqui + " de " + numJuegos + " partidas.");
    } else {
        alert("¡El juego ha terminado en un empate!");
    }
}

//Se llama a la funcion para iniciar el juego
juegoCachipun()