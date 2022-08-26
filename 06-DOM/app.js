//examinando el DOM 
//console.dir(document);//muestra toda la info de la página
//console.log(document.URL);
/*console.log(document.title);
document.title = 'prueba';
console.log(document.title);
*/
//get ElementByID

//console.log(document.getElementById('header-title'));
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(header);
headerTitle.textContent = 'Hola';
headerTitle.innerText = 'ADIOS';
headerTitle.innerHTML = '<h3>Prueba<h3>';*/

//getElementsByClassName
/*
var items = document.getElementsByClassName('list-group-item');
console.log(items[0]);
items[2].textContent = 'Prueba1';
*/

//get ElementsByTagName
/*
var items = document.getElementsByTagName('li');
items[0].textContent = 'Cambio';*/

//querySelector seleccióna un solo elemento 
/*
var header = document.querySelector('#main-header');//selecciona elemento
header.style.borderBottom = 'Solid 4px #bbb';
var input = document.querySelector('input');
var submit = document.querySelector('input[type="submit"]');
input.value ='Ingreso';//cambia el valor del elemento
submit.value = 'Enviar';
var item = document.querySelector('.list-group-item');
item.style.color = 'green';
*/

//querySelectorAll
/*
var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'blue';

var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[1].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');//para retocar los valores impares
var par = document.querySelectorAll('li:nth-child(even)');// para recorrer los valores pares
for(var i=0 ; i < impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
}*/

//ParentNode

//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//var main = itemList.parentNode;
//main.style.backgroundColor = '#f4f4f4';
//console.log(main.parentNode.parentNode);

//ParentElement
/*
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
var main = itemList.parentElement;
main.style.backgroundColor = '#f4f4f4';
console.log(main.parentElement);
*/

//var itemList = document.querySelector('#items');
//chilNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);

//firstChild/firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Prueba';

//lastChild/lastElmentChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'activ';

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//createElement  //para crear elementos en html y agregar más elementos a la pág
//tagName 
/*
var nuevoDiv = document.createElement('div');
nuevoDiv.ClassName = 'hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title','pruAgrega');


//createTextNode

var nuevoNodoText = document.createTextNode('alo world');
nuevoDiv.appendChild(nuevoNodoText);

console.log(nuevoDiv);

var contenedor = document.querySelector('.container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);

contenedor.insertBefore(nuevoDiv,h1);
*/
//Agregar Eventos 

//document.getElementById('boton').addEventListener('click',function(){
  //  console.log('presionaste click');
//});


// document.getElementById('boton').addEventListener('click',hacerClick);
    

// function hacerClick(){//función Click
//   //  console.log('Usted hizo click..!');
//   document.getElementById('header-title').textContent ='Texto cambiado..';//cambiando el texto de header-title


// }

//Agregar un elemento a la lista

var form = document.getElementById('formAgregar'); //indentifica y selecciona el elemento
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');
//*Evento submit del formulario
form.addEventListener('submit',agregarItem); //agrega un evento o una escucha
//**Evento click de la lista
lista.addEventListener('click',eliminarItem);//agrega un evento o una escucha
//*Evento del teclado en el campo de filtro
filtro.addEventListener('keyup',filtrarItems);

//Función para agregar un Item a la lista
function agregarItem(e){ //función que recibe un evento
    e.preventDefault();// permite cancelar el evento si es cancelable sin deterner el resto del funcionamien
                         //puede ser llamando nuevamente

    var newItem = document.getElementById('item').value;

    console.log(newItem); 
    var li = document.createElement('li');//crear elemento de la lista
    li.className = "list-group-item" //utilizamos un método
    li.appendChild(document.createTextNode(newItem))  // agregamos un nodo

    var botonDel = document.createElement('button');
    botonDel.className ='btn btn-danger btn-sm float-right eliminar';
     botonDel.appendChild(document.createTextNode('X'));      // agregar al boton el valor y se crea un hijo
    li.appendChild(botonDel);//agregar al elemento li
    
     //console.log(li);
     lista.appendChild(li);


}

    //Función para eliminar un Item de la lista
    function eliminarItem(e){
        if(e.target.classList.contains('eliminar')){
            if(confirm('Seguro que desea eliminar el elemento')){//mensaje de confirmación

                var li = e.target.parentElement; //captura al elemento del padre
                lista.removeChild(li); // para eliminar el elemento de la lista
            }
            
        }
        


    }

    //Función para filtrar elementos de la lista
    function filtrarItems(e){
        var texto = e.target.value.toLowerCase(); //comparar los valores y cambia a minúsculas el txt ingresado
        var items = lista.getElementsByTagName('li'); // capturar los items de la lista
        Array.from(items).forEach(function(item){  //creamos un array para poder comparar y filtrar las palabras
                                                     // hacer el recorrido y que llame a una fución, a esa función //le envie el item que es el elemnto que va ir capturando                                   
            var itemNombre = item.firstChild.textContent;// la func  captura el nombre el texto del item del primer hijo                                       
            if(itemNombre.toLowerCase().indexOf(texto)!= -1){ //compara para luego filtrar
                item.style.display ='block';
        }else{
                item.style.display ='none';
       } 
    
    });
        
 }

