
/******************
 * Array en JS
 */

 var nombres = ['David','Francisco','Carmen','Lucia'];
 var telefonias = new Array('Tigo','Claro','Personal');//otra manera de declarar un array
 console.log(nombres[2]);
 console.log(telefonias[0]);

 nombres [3] = 'Juan';
 console.log(nombres[3]);
 
 console.log(nombres.length);

 /***********
  * Op con Arreglos
  */
var frutas = ['manzana','pera','piña','frutilla'];
console.log(frutas);
/* una manera  de recorrer que casi no se utiliza
for(var i=0; i<=frutas.length-1;i++){
    console.log(frutas[i]);
}*/

// la manera de rrecorre y mostrar elementos de un array en JS.
/*
frutas.forEach(function(elemento,indice,array){

console.log(elemento, indice)
});
*/
frutas.push('sandia');//push agrega un elemento al final del array
console.log(frutas);
frutas.unshift("naranja");//unshift agrega un elemento al principio del array
console.log(frutas);

frutas.pop();//elimina el último elemento del array 
console.log(frutas);

frutas.shift();//elimina el primer elemento del array
console.log(frutas);

var pos = frutas.indexOf('pera');//imprime la posición del elemento
console.log(pos);

frutas.splice(1,2);//elimina elementos del array
console.log(frutas);

//arreglo que soporta diferentes tipos de datos

var persona = new Array('josé','1.76',021-222-333,'perez');
console.log(persona);
persona.push('Gonz');
console.log(persona);


/*******************
 * Objetos Literales
 */
/*
 var personal = {
     nombre : 'Miguel',
     apellido: 'Portillo',
     gustos: ['Futbol','Pesas','Ingles'],
     trabajo: 'nuevo',
     casado: true
 };
 console.log(personal);

 /********
  * Objetos con la sintaxis Objet
  */
/*
  var persona2 = new Object();//objeto creado
  persona2.nombre = 'DAv' ;//agregando datos al objeto
  persona2.apellido = 'OzP';
  persona2['trabajo'] = 'new wepDeveloper';
  console.log(persona2);

  /***********
   * Objetos y Métodos
   */
  var personal = {
      //propiedades
    nombre : 'Miguel',
    apellido: 'Portillo',
    gustos: ['Futbol','Pesas','Ingles'],
    trabajo: 'nuevo',
    casado: true,
    yearNacimiento: 1984,
    //Métodos
    calcularEdad: function(){
        this.edad = 2021 - this.yearNacimiento;

    }
};
personal.calcularEdad();
console.log(personal);