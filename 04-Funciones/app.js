//funciones de una forma
/*function bienvenido(){
    console.log("Bien venidos a la sección de Funciones..");
}
bienvenido(); call

function bienvenido(){
    return 'Bien venido a la sección Funciones'
}
var mensaje = bienvenido();
console.log(mensaje);
//
function cuadradoNumer(num){
    var resultado = num*num;
    return resultado;
}
var num= 7;
var valor= cuadradoNumer(num);
console.log(valor);
console.log(cuadradoNumer(6));

//convertir grados Farenheit a Celsius
//creación de la función
function convertirFahaCelsius(gradoFah){
    var Celsius = (gradoFah-32)*5/9;
    return Celsius;
} 
//llamada de la función donde se invoca
var tempUno = convertirFahaCelsius(32);
var tempDos =convertirFahaCelsius(68);
console.log(tempUno);
console.log(tempDos);

//calc_ edad

function calcularEdad(yearNacimiento){
return 2021-yearNacimiento;
}
var edad1 = calcularEdad(1984);
var edad2 = calcularEdad(1982);
var edad3 =calcularEdad(1990);
console.log("Su edad es:."+edad1);
console.log("Su edad es:."+edad2);
console.log("Su edad es:."+edad3);

//cal_jubilación

function calcularJubilación(yearNacimiento,nombre){
    var edad = calcularEdad (yearNacimiento);
    var yearJubilación = 65-edad;
    console.log(nombre + ' le faltan:.' + yearJubilación + ' años para su jubilación.');
}

calcularJubilación(1970,'Juan');
calcularJubilación(1967,'Javier');
*/
//función como expresión eje 1

var prueba = function(){
    console.log('Pureba de la Func');
}
prueba();

//función como expresión eje 2
/*
var prueba2 = function(nombre){
 return ' Hola ' + nombre;

}
console.log(prueba2('JUan'));

//argumentos Nulos

var a;
a = null;
var valorNulo = function(a){
    return a;
}
console.log(valorNulo(a));
*/

//Argumentos por default
/*
var sumar = function(a,b,c=null){// multiples argumentos de una función
    return a + b + c;

}
console.log(sumar(12,4));

// plantillas de cadenas (template string)

var nombre = 'Paulo';
console.log(`El nombre es: ${nombre}`);

var nu =5;
var num = 15;
console.log('la suma es ' + (nu+num)); //concatenación normal
console.log(`La suma es: ${nu+num}`);// plantilla de cadena o templata string
*/


/* implementar una función que nos permita evaluar el porcentaje de respuestas positivas y
 * negativas de un examen, la función debe recibir el nombre y la cantidad de respuestas
 * positivas y negativas
 * la función debe calcular el % que representa cada tipo de respuesta, en una base de 100 preguntas
 * 
 * de las respuestas positivas se define el score de la persona en
 * A(>90%),B(70-89%), C(45-69%), D(<45%)           */
/*
var calcularScore = function (nombre,resPos,resNeg){

    var porPos = (resPos/100)*100;
    var porNeg =(resNeg/100)*100;
    if(porPos>=90){
        return nombre + ' tiene score A';
        
    }else if(porPos>=70){
        return nombre + ' tiene score B';

    }else if(porPos >=45){
        return nombre + ' tiene score C';
    }else{
        return nombre + ' tiene score D';
    }
}
var resultado = calcularScore('Juan',29, 19);
console.log(resultado);
*/
// solución más optima

var calcularScore = function (nombre, resPos, resNeg){
    var porPos = (resPos/100)*100;
    var porNeg = (resNeg/100)*100;
    var score = '';

    if(porPos >= 90){
        score = 'A';

    }else if(porPos >= 70){
        score = 'B';
    }
    else if(porPos >= 45){
        score = 'C';
    }else{
        score = 'D';
    }

    return `${nombre} tiene el score ${score},Positivas:${porPos}%, Negativas:${porNeg}%`;
}    
var resultado = calcularScore('Angel',65,40);
console.log(resultado);


