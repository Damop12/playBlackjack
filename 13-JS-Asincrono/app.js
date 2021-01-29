        ///JavaScript Asíncrono Ejemplo///

        const segundo = () =>{

            setTimeout (() =>{

                console.log('Llamada a segundo');
            },2000);
            
        }

        const primero = () =>{
            console.log('Inicio de primero');
            segundo();
            console.log('Fin de primero');

        }
        primero();