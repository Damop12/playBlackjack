//  let miLibroA = { //creando Objeto
//      titulo : 'Libro de JS',
//      autor :'Grover',
//      páginas :433,
//      publicado : false

//  }

//  let miLibroB = { //objeto 2 
//      titulo:'Programación PHP',
//      autor:'Ramon Vásquez',
//      páginas:700,
//      publicado:true
//  }

//  console.log(miLibroA);
//  console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);//con template string
//  miLibroA.páginas = 555;
//  console.log(miLibroA.páginas);//cambiando el valor al objeto

 

// let getResumen = (libro) => {    ///Creando un Método que recibe como parámetro un libro///
//     return{
//         resumen: `${libro.titulo} creado por ${libro.autor}`,//propiedad del objeto que va a devolver este método 
//         resumenPáginas: `${libro.titulo} tiene ${libro.páginas} páginas`
//     }
// }
//     let libroAResumen = getResumen(miLibroA);
//     let libroBResumen = getResumen(miLibroB);

//     console.log(libroBResumen.resumen);
//     console.log(libroBResumen.resumenPáginas);

//     console.log(libroAResumen.resumen);
//     console.log(libroAResumen.resumenPáginas);

///Ejercicios Crear un Objeto persona que tengo las siguientes propiedades
    //nombre, edad, ciudad, //cambiar la edad, Mostrar datos de la persona
    
    // let persona = {
    //     nombre : 'Juan',
    //     edad: 36,
    //     cuidad: 'Asunción'
    // }
    // console.log(persona);
    // persona.edad = 37;
    // console.log(`${persona.nombre} tiene ${persona.edad} y vive en la ciudad de ${persona.cuidad}`);

        ///Referencias de Objetos///

    // let persona = { //creamos el objeto
    //     nombre : 'Julio',
    //     edad : 33,
    //     sueldo : 2700
    // }

    // let otraPersona = persona;
    // otraPersona.sueldo = 1500; 
    // console.log(otraPersona);

    // let cambiaSueldo = (person, monto) => { //creamos un metodo, q recibe como parámetro persona y monto
    //         person.sueldo = person.sueldo + monto;
    //         //console.log(person);
    // }       
    // cambiaSueldo(persona, 300); // se llama al metodo cambiar sueldo
    // console.log(otraPersona);
    // console.log(persona);


        ///Metodos///

        // let persona = { //creamos el objeto
        //     nombre : 'Julio',
        //     edad : 33,
        //     sueldo : 2700,
        //     metodoPrueba: function(){ // agrega un metodo al objeto persona
        //        // console.log('Estoy escribiendo desde el metodo Prueba');
        //        return 'Resultado desde prueba';
        //     },
        //     cambiarEdad: function(e){ //Método cambiarEdad
        //         this.edad = this.edad + e;


        //         }        
        // }
        // let result = persona.metodoPrueba();
        // console.log(result);
        // persona.cambiarEdad(3);
        // //persona.metodoPrueba();
        // console.log(persona.edad);

        // ///8 Objeto String///
  
        // let nombre = 'Paul Vásquez';
        // let clave = '222333clave12.e';
        // console.log(nombre.length);// length es una propiedad
        // console.log(nombre.toLocaleUpperCase());//UpperCase es un método por eso tiene 2 ())
        // console.log(nombre.toLocaleLowerCase());
        // console.log(nombre.trim());
        // console.log(clave.includes('clave',6)); //busca los caracteres y devuelve true si los encuentra


        