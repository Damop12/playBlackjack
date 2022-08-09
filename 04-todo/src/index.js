import './styles.css'

import { Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo));

//todoList.todos.forEach( crearTodoHtml);//forma abreviada a la de arriba

// const tarea = new Todo('Aprender JavaScript!!');

// todoList.nuevoTodo( tarea);

// //tarea.completado = true;

// console.log( todoList );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-Key','ABC123');
// sessionStorage.setItem('mi-key','ABCD');

// setTimeout( ()=> {

//     localStorage.removeItem('mi-key');

// }, 1500);
 


console.log( 'todos', todoList.todos);