    ///Definición de las Clases///
    class Libro{
        constructor(titulo,autor,isbn){
            this.titulo = titulo;//this para hacer referencia a las propiedades de este objeto
            this.autor = autor;
            this.isbn = isbn;
        }
    }

    class UI{ //esta clase nos perminte manejar la interfaz gráfica, el DOM
        static mostrarLibros(){//llamamos al método mostrarLibros//utilizamos static porque no es una clase instanciable
            const libros = Datos.traerLibros();
            libros.forEach((libro)=>UI.agregarLibroLista(libro));

            
        }

    
        static agregarLibroLista(libro){
            const lista = document.querySelector('#libro-list');
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.isbn}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
                
            `;
            //href="#" enlace vacio para eliminar elementos 
            lista.appendChild(fila); 
        }
        
        static eliminarLibro(el){
            if(el.classList.contains('delete')){//para eliminar solo al darle click  al boton X  
                el.parentElement.parentElement.remove();

            }  
        }

        static mostrarAlerta(mensaje,className){//className es la clase de bootstrap que tiene el estilo
            const div = document.createElement('div');
            div.className = `alert alert-${className}`;
            div.appendChild(document.createTextNode(mensaje));

            const container = document.querySelector('.container');
            const form = document.querySelector('#libro-form');
            container.insertBefore(div,form);
            setTimeout(()=>document.querySelector('.alert').remove(),3000);

        }

        static limpiarCampos(){
            document.querySelector('#titulo').value ='';//limpia los campos que se agregaron
            document.querySelector('#autor').value ='';
            document.querySelector('#isbn').value ='';
        }
    }

    class Datos{
        static traerLibros(){
            let libros; //definimos una variable libro
            if(localStorage.getItem('libros')===null){ //getItem guarda en el locasSto//pregunta s/n existen libros
                libros = []; //si no hay libros me va a definir como un arreglo vacío 
            }else{
                libros = JSON.parse(localStorage.getItem('libros'));

            }
            return libros;
        }

        static agregarLibro(libro){
            const libros = Datos.traerLibros();//traemos un arreglo del localStorage
            libros.push(libro);//push agrega el objeto que estoy trayendo como parámetro
            localStorage.setItem('libros',JSON.stringify(libros));
        }

        static removerLibro(isbn){

        }

    }

    // evento que realiza Carga de la página
    document.addEventListener('DOMContenLoaded',UI.mostrarLibros());

            ///controlar el evento Submit///
    document.querySelector('#libro-form').addEventListener('submit',(e)=>{
            //addEventListener es para escuchar al evento submit
            e.preventDefault();

            //Obener los valores de los Campos
            const titulo = document.querySelector('#titulo').value;
            const autor = document.querySelector('#autor').value;
            const isbn = document.querySelector('#isbn').value;
            if(titulo === ''|| autor ==='' || isbn ==='' ){ //validar que los 3 campos sean bien ingresados
                UI.mostrarAlerta('Por favor ingrese todos los datos','danger');
            }
            else{
                const libro = new Libro(titulo,autor,isbn );
                Datos.agregarLibro(libro);
                UI.agregarLibroLista(libro);//agrega un nuevo libro a lista
                UI.mostrarAlerta('Libro agregado a la colección','succes')
                UI.limpiarCampos();//llamamos al metodo UI para limpiar
     
            
            } 
    });
    document.querySelector('#libro-list').addEventListener('click', (e)=>{
        UI.eliminarLibro(e.target);
        Datos.removerLibro(e.target.parentElement.previosElementSibling.textContent);
    })