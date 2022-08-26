//ES5 - Variables viejas
// var nombre5 ='Juan';
// console.log(nombre5);
// edad = 36;
// nombre5 = 'Antonio';//Mutación
// console.log(nombre5);

//ES6 - Variables nuevas 
// const nombre6 = 'Angel';
//  let edad6 = 29;
 
//  edad6 = 33;
//  console.log(edad6);

//Bloques y alcances de una variable
// let test;
// test = 7;
// function prueba(){
//     let test;
//    test = 15; 
// }
// prueba();
// console.log(test);

//Template String o Plantilla de cadenas
// let nombre = 'Tyson';
// let apellido = 'Vásquez';
// const nacimiento = 1984;
// const ciudad = 'Asun';
// function calculaEdad(year){//año enviado como parametro
//     return 2021-year;
// }

// //ES5
// console.log(nombre +' ' + apellido +', nació en  '+ ciudad +',su edad es: ' + calculaEdad(nacimiento));

// //ES6   //Template string
// console.log (`${nombre} ${apellido}, nacio en ${ciudad}, su edad es: ${calculaEdad(nacimiento)}`);

//*Función cadena ES6

// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);
//console.log('nombre'.repeat(5));
// console.log(`${nombre} `.repeat(6));
// console.log(nombreCompleto.includes('yso'));// función que devuelve verdadero o falso, si es que un valor existe dentro de una cadena  
// console.log(nombreCompleto.startsWith('t'));//hace lo mismo que includes compara y devuelve falso o verdadero
// console.log(nombreCompleto.endsWith('uez'));// compara con el final de la cadena y devuelve f o v 

//Funciones Flecha para crear funciones más dinámicas y ahorra la cantidad de códigos
// const years = [2000,2003,2009];

// //ES5 Función Flecha
//  var edad5 = years.map(function(el){
//      return 2021 - el;
//  });
// console.log(edad5);

// //ES6
//  let edad6 = years.map(el => 2021 -el); //función flecha con un solo parámetro
//   console.log(edad6);

//  edad6 = years.map((el, index) => `Edad ${index + 1}; ${2021 - el}`);//template string con la función flecha=> con 2 parámetros
// console.log(edad6);

// endad6 = years.map(//función flecha con 2 parámetros
//     (el, index) => {
//         const yearActual = new Date().getFullYear();
//         const edad = yearActual - el;
//         return `Edad ${index +1}: ${edad}`;

//     }
// );
//     console.log(edad6);

// //func ES5 eje

// //     function cuadrado(num){
// //         return num*num;
// //     }
// //    console.log(cuadrado(7));

// //func flecha ES6 eje 1

// const cuadrado = (num) =>{
//     return num*num;
// }
// console.log(cuadrado(4));

// //func flecha ES6 eje 2

// const cuad = (nume) => nume*nume;
// console.log(cuad(8));

// //func flecha ES6 eje 3 con tipos JSON
// const personas = [
//     {
//         nombre:'Paul',
//         edad:34

//     },
//     {
//         nombre:'Jorge',
//         edad:35
//     },
//     {
//         nombre:'David',
//         edad: 36

//     },
//     {
//         nombre: 'Angel',
//         edad: 37
//     }
// ];

// // const menores37 = personas.filter(function(persona){
// //     return persona.edad < 37;

//     const menores36 = personas.filter((persona) => persona.edad < 36);

// console.log(menores36);


/// Destructuración o Destructuring///
//ES5
//  var datos = ['Pablo',35];
//  var nombre = datos [0];
//  var edad = datos [1];
// console.log(nombre);
// console.log(edad);

//  //ES6

// var [Nombre,Edad] = ['Paul',25];
// console.log(Nombre);
// console.log(Edad);


// const persona = { //objeto creado 
//     Name : 'Carmen',
//     edadd : 38
// }

// const {Name, edadd} = persona; // desestructuración
// console.log(Name);
// console.log(edadd);

// const {Name:n, edadd:e} = persona; //creaciṕn de alias n, e
// console.log(n);
// console.log(e);// llamamos a los alias 


// //uso real de desestructuración ejemplo

// const calcMayoriaEdad = (year) => {
//     const edad = new Date().getFullYear() - year;
//     const mayoria = edad >= 18? true:false;
//     return[edad,mayoria];
// }
// const [edad2,mayoria] = calcMayoriaEdad(2007);
// console.log(`su edad es: ${edad2} es mayor de edad:${mayoria}`);

                //////Maps////
/// se le puede asignar cualquier tipo de valor 
  const datos = new Map();
  datos.set('nombre','Damop');  //set asigna  
  datos.set('edad',33);        
  datos.set (1,'damop12@hotmail.com');
  datos.set(2,'david@hotmail.com');
  datos.set('movil',0994555777);

//  console.log(datos.get('nombre'));
//  console.log(datos.get(2));
//  console.log(datos.size);//para ver el tamaño

 //datos.delete(2);//elimina los datos 
 //datos.clear();//elimina todos los datos del mapa
datos.forEach((value,key) => {
    console.log(`${key}: ${value}`);
});//forEach realiza un recorrido

///// Spread Operator ...////

var suma = function (a,b,c,d){
    return a+b+c+d;
}
var ope1 = suma(10,20,30,40);
console.log(ope1);


var valores = [10,20,30,50];
const ope2 = suma(...valores);
console.log(ope2);

///unión de dos arreglos con spread Operator...

const rrhh = ['Pedro','Paula','María'];
const contabilidad = ['Carmen','Julio','Hector'];

const empresa = [...rrhh, ...contabilidad ];
console.log(empresa);