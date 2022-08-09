
export class Todo {

    static fromJson( {id,tarea,completado,creado}) {

        const tempTodo       = new Todo( tarea );

        tempTodo.id          = id;
        tempTodo.completado  = completado; 
        tempTodo.creado      = creado;

        return tempTodo;
    }
    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Date().getTime();//para crear un id
        this.completado = false;//nos avisa si la tarea se creo o no
        this.creado     = new Date();//para indicar el dia creado

    }

    imprimirClase() {
        console.log(`${ this.tarea} - ${ this.id}`);
    }
}