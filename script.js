
function juegoCachipun(){
    //Solicitamos al usuario cuantas veces quiere jugar
    var numJuegos = parseInt(prompt("¿Cuantas veces desea jugar?"))

    //Verificamos si el usuario ingresó un numero valido
    if(isNaN(numJuegos) || numJuegos <= 0){
        alert("Por favor ingresa un numero valido mayor que cero")
    }

    //Contadores para los resultados
    var ganaUser = 0;
    var ganaMaqui = 0;
    var empates = 0;

    //Se establece un ciclo para la cantidad de veces que el usuario jugara
    for(i=1;i <= numJuegos;i++){
        alert("Juego n°" + i)
        //Solicita al usuario ingresar una opcion
        var eleccionUser = prompt("Elija piedra, papel o tijera").toLowerCase();
        //Verifica si lo ingresado es valido
        if(eleccionUser == "piedra" || eleccionUser == "papel" || eleccionUser == "tijera"){
            alert("elegiste " + eleccionUser)
        }else{
            alert("Por favor elige una opción válida: piedra, papel o tijera.")
            return juegoCachipun();
        }

        //Se genera un numero aleatorio para la maquina
        var eleccionRandom = Math.floor(Math.random()*3)
        var eleccionMaquina;

        //Se establece condicion para asignarle piedra papel o tijera al valor de numero aleatorio
        switch(eleccionRandom){
            case 0:
                eleccionMaquina = "piedra";
                break;
            case 1:
                eleccionMaquina = "papel";
            case 2:
                eleccionMaquina = "tijera";
            default:
                alert("Ups... algo ha salido mal")
        }

    }

}

//Se llama a la funcion para iniciar el juego
juegoCachipun()