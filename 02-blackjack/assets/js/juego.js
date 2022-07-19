//Ctrl + g :numero de lin codigo para buscar tip

//patron Módulo para resguardar el código
 const miModulo = (() => {//funcion anonima autoimbocada
    'use strict'//para restringir el codigo


    let deck         = [];// variable donde se guardan todas las cartas
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosComputadora = 0;
    //puntosComputador = 0;
    let puntosJugadores = [];
       

    //referencias del HTML
    const  btnPedir    = document.querySelector('#btnPedir'),
           btnDetener  = document.querySelector('#btnDetener'),
           btnNuevo    = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

        //esta funcion inicializa el juego  
        const inicializarJuego = ( numJugadores = 2 ) => {
           deck = crearDeck();

           puntosJugadores = [];
           for( let i = 0; i< numJugadores; i++ ){
                puntosJugadores.push(0);
           }

           puntosHTML.forEach( elem => elem.innerText = 0 );// callback para inicializar
           divCartasJugadores.forEach( elem => elem.innerHTML = '');
        // deck = []; // para limpiar el deck
        // deck = crearDeck();//para 

        // puntosJugador     = 0;//reiniciamos ambos
        // puntosComputadora = 0;
        
        // puntosHTML[0].innerText = 0;//reiniciamos los puntos 
        // puntosHTML[1].innerText = 0;

        // divCartasComputadora.innerHTML = '';//para borrar las cartas en pantalla
        // divCartasJugador.innerHTML     = '';//de la computadora y del jugador


        btnDetener.disabled  = false; //para habilitar los botones en un nuevo juego
        btnPedir.disabled    = false;//para habilitar el boton
        }

    //esta funcion crea una nueva carta
    const crearDeck = () => {
            
        deck = []; //reinicializa el deck 
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        //console.log(deck);
        return _.shuffle(deck);//para mezclar de manera aleatoria las cartas
        //console.log(deck);//muestra cartas en consola
     
    }
     
    //esta funcion me permite tomar una carta

    const pedirCarta = () => {

        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }
    // deck = [];
    // pedirCarta();

    const valorCarta = (carta) => {//esta funcion sirve para obtener el valor de, 
                                   //carta
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ? //si no es un numero se pregunta por el valor
            (valor === 'A') ? 11 : 10 //
            : valor * 1;//si es un numero se multiplica por uno para pasar el valor a numerico


        //let puntos  = 0;
        //2=2, 3=3, 10=10
        /* if(isNaN(valor) ) { //para saber si es un numero o letra

            puntos = ( valor ==='A') ? 11: 10;//condicion ternaria si vale A es 11 si no vale 10

        }else{
            puntos = valor * 1;//convierte el valor a numerico 
        }

        console.log(puntos); */
    }
    
    //turno 0 = primer jugador y el ultimo la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta); //puntos del jugador
        puntosHTML[turno].innerText = puntosJugadores[turno]; //para agregar los puntos al html
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta,turno ) =>{

        const imgCarta = document.createElement('img');//para mostrar las barajas
        imgCarta.src = `assets/cartas/${carta}.png`; //para cambiar cartas
        imgCarta.classList.add('carta');//para darle estilo a la imagen carta
        divCartasJugadores[turno].append(imgCarta);
        //divCartasComputadora.append(imgCarta);// insertar la carta al HTML
    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;//desestructuracion de arrays

        setTimeout(() => { //para mostrar mensaje en 10 segundos
            if( puntosComputadora === puntosMinimos){//si ambos puntajes son iguales
                alert('Nadie Gana Empate :(');
            }else if (puntosMinimos > 21 ) {//si el jugador supera los 21 pierde
                alert('Computadora Gana..');
            }else if (puntosComputadora > 21) {//si la computadora supera 21 pierde
                alert('Jugador Gana...');
            }else{
                alert('Computadora Gana!')//en cualquier otro caso la computadora gana
            }
        }, 100 );
    }
    
    //Turno de la Computadora

    const turnoComputadora = (puntosMinimos) => {
         
        let puntosComputadora = 0;

        do {

            const carta = pedirCarta(); //para tomar una carta se llama a la funcion
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length -1 );

            crearCarta(carta, puntosJugadores.length -1 );
            // puntosComputadora = puntosComputadora + valorCarta(carta); //puntos del computador
            // puntosHTML[1].innerText = puntosComputadora; //para agregar los puntos al html
            
            // const imgCarta = document.createElement('img');//para mostrar las barajas
            // imgCarta.src = `assets/cartas/${carta}.png`; //para cambiar cartas
            // imgCarta.classList.add('carta');//para darle estilo a la imagen carta
            // divCartasComputadora.append(imgCarta);// insertar la carta al HTML

            // if( puntosMinimos > 21){//si los puntosMinimos son mayores corta el ciclo
            //     break;
            // }

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
               
    }

    //Eventos
    btnPedir.addEventListener('click', () => { //para escuchar el evento click

        const carta = pedirCarta(); //para tomar una carta se llama a la funcion
        const puntosJugador = acumularPuntos( carta, 0);

        crearCarta( carta, 0);
        // puntosJugador = puntosJugador + valorCarta(carta); //puntos del jugador
        // puntosHTML[0].innerText = puntosJugador; //para agregar los puntos al html
        //console.log(puntosJugador);

        // const imgCarta = document.createElement('img');//para mostrar las barajas
        // imgCarta.src = `assets/cartas/${carta}.png`; //para cambiar cartas
        // imgCarta.classList.add('carta');//para darle estilo a la imagen carta
        // divCartasJugador.append(imgCarta);// insertar la carta al HTML
        

        if (puntosJugador > 21) {
            console.warn(' Lo siento Perdiste');
            btnPedir.disabled   = true; // desabilita el boton pedir
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);// si el jugador supera 21 llama a la funcion turnoComputadora

        } else if (puntosJugador === 21) {
            console.warn('21 Felicidades Ganaste...!!');
            btnDetener.disabled = true;
            btnPedir.disabled = true;//si ganas desabilita el boton
            turnoComputadora( puntosJugador);//llama al turno de la computadora envia como argumento ptsjugador  
        }
            
    });

    btnDetener.addEventListener('click', () =>{

        btnPedir.disabled   = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugadores[0] );

    });


    btnNuevo.addEventListener('click', () => {// para iniciar un nuevo juego

        //console.clear (); // para limpiar la consola
        inicializarJuego();
        // deck = []; // para limpiar el deck
        // deck = crearDeck();//para 

        // puntosJugador     = 0;//reiniciamos ambos
        // puntosComputadora = 0;
        
        // puntosHTML[0].innerText = 0;//reiniciamos los puntos 
        // puntosHTML[1].innerText = 0;

        // divCartasComputadora.innerHTML = '';//para borrar las cartas en pantalla
        // divCartasJugador.innerHTML     = '';//de la computadora y del jugador


        // btnDetener.disabled  = false; //para habilitar los botones en un nuevo juego
        // btnPedir.disabled    = false;//para habilitar el boton
    });


    return {//funcion donde solo es publico, se puede acceder mediante el Modulo
    
        nuevoJuego: inicializarJuego//le paso por referencia
    };
})();



