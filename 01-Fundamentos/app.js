//console.log('Hola a Todos');
/*conversión de tipos
var primerNombre, edad, sexo, esSoltero;
primerNombre ='Damop';
edad = 36;
sexo = 'M';
esSoltero = false;
console.log('El primer nombre es: '+ primerNombre + ' y su edad es:'+ edad
+ ' es Solter?'+ esSoltero );

edad ='treinta';
console.log(edad);*/
/************
 * Operadores
 * Matemátic
 ************/
/*
var edadMiguel, edadAngel, diferenciaEdad, sumaEdades,yearActual,yearMiguel,yearAngel;
edadMiguel = 35;
edadAngel = 27;
yearActual= 2021;

 diferenciaEdad = edadMiguel - edadAngel;
 sumaEdades = edadMiguel+ edadAngel;
yearAngel = yearActual - edadAngel;
yearMiguel = yearActual - edadMiguel;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log( " Año en que nació Miguel: "  +  yearMiguel);
console.log( " Año en que nació Angel: "   +  yearAngel);

//Operadores Lógicos
var mayorMiguel = edadMiguel > edadAngel;
console.log(mayorMiguel);

//Operador Typeof
console.log(typeof edadMiguel);
*/
//Operadores Unarios Aritmetic

/*edadCarmen = 19;
edadFrancis = 29;
console.log(edadCarmen++);
console.log(--edadFrancis);*/

//IMC ejercicio
/*
var pesoLuis = 72;
var alturaLuis = 1.75;

var pesoSamuel = 89;
var alturaSamuel = 1.79;
var IMCLuis = pesoLuis/(alturaLuis*alturaLuis);
var IMCSamuel = pesoSamuel/(alturaSamuel*alturaSamuel);
var comparación = IMCLuis > IMCSamuel;

console.log("El indice de Luis es mayor: " + comparación);



//otra solución
 var imcLuis =  pesoLuis/(alturaLuis**2);
console.log(imcLuis);

var imcSamuel = pesoSamuel/(alturaSamuel**2);
console.log(imcSamuel);
if (imcLuis > imcSamuel) 
console.log('El imc de LUis es mayor' + imcLuis);
else
console.log("El indice de Samuel es mayor" + imcSamuel);

var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
//                                ^
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);*/

  // Sentencia if/else
  
  /*var nombre = 'Pablo';
  var estadoCivil = 'soltero';

  if(estadoCivil==='casado'){
      console.log(nombre+ 'Esta Casado');
  }else{
      console.log(nombre+'Es soltero...:');
  }

var nombre ='Pablo';
var edad = 12;

if (edad < 12){
    console.log(nombre + " Es un niño!");
}else if((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolescente');
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto');
}else{
    console.log(nombre + ' Es un anciano');
}

//Operador Ternario

var nombre = 'Paul';
var edad = 18;
edad >= 18 ? console.log( nombre + ' es mayor de edad') : console.log(nombre + ' es menor');
*/
//switch
/*
var ms= 2;
switch(ms){
case 1:
    console.log("Enero");
break;
case 2:
    console.log("Febrero");
    break;
case 3:
    console.log("Marzo");
    break;
case 4:
    console.log("Abril");
    break;
    default:
        console.log("Mes invalido");    

} */
//for
/*
for (var i = 10; i >=1;i--) {
    console.log('el numero es ' +i);
}*/
//while
/*var i = 10;
while(i>=1){
    console.log('el valor es :' +i);
    i--;
}*/

//do while

/*var i=12;
do{
    console.log('es:' + i);
    i++;
}while(i<=10)*/

//valores falsos: undefined, null, 0, ''
//valores verdaderos NOt falses
/*
var edad;
edad ='10';

if(edad){
    console.log("variable esta definida");
    
}else{
    console.log("variable no esta definida");
}
//operadores de igualdad

if(edad ===10){
    console.log('Variable con coersión');
}else{
    console.log('Variable sin coersión');
} */


var promNotaPablo = (14+8+16)/3;

var promNotaMaria = (12+18+16)/3;

if(promNotaPablo > promNotaMaria){
    console.log('el promedio de Pablo  es Superior');
}else if(promNotaMaria > promNotaPablo){
    console.log('el promedio de Maria es Superior');
}else{
    console.log("El promedio de Pablo  y María son iguales:..");
}
// si esta aprobado
for(var i=1; i<=2; i++){
  if(i===1){
      console.log("promedio de Pablo."+promNotaPablo);
    if(promNotaPablo>13){
       console.log("Pablo esta aprobado."); 
    }else{
        console.log("Pablo esta desaprobado.");
    } 
  }else{
      console.log("promedio de María."+promNotaMaria);
     if(promNotaMaria>13){
       console.log("María esta aprobada.");  
     }else{
        console.log("María esta desaprobada."); 
     } 
  }  
}