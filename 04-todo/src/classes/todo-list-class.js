//para agrupar toda las listas de todos

import { Todo } from "./todo.class";


export class TodoList {//clases con uper calmelcase


    constructor() {

        //this.todos = [];//creamos un array d todos y lo inicializamos vacio
        this.cargarLocalStorage();
    }

    nuevoTodo( todo) {
        this.todos.push(todo);//insertamos el todo 
        this.guardarLocalStorage();

    }

    eliminarTodo( id ) {

       this.todos = this.todos.filter( todo => todo.id != id)
       this.guardarLocalStorage();

    }

    marcarCompletado( id ) {
        for( const todo of this.todos){//para barrer cada uno de los elementos

            console.log(id, todo.id);
            if( todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }


    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado)//para traer todos 
        //los no completados
        this.guardarLocalStorage();
        

    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );//para almacenar 


    }

    cargarLocalStorage(){

        // if( localStorage.getItem('todo') ) {//verifica si existe el objet

        //     this.todos = JSON.parse( localStorage.getItem('todo') );//recupera todos
        // }else {

        //     this.todos = [];

            this.todos = ( localStorage.getItem('todo') )
                           ? JSON.parse( localStorage.getItem('todo'))
                           : [] ; 

          this.todos = this.todos.map( obj => Todo.fromJson(obj) );   
          
          //this.todos = this.todos.map( Todo.fromJson );//forma abreviada a la de arriba
          
        }
    }

