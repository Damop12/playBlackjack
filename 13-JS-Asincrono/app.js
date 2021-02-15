        ///JavaScript Asíncrono Ejemplo///

        // const segundo = () =>{

        //     setTimeout (() =>{

        //         console.log('Llamada a segundo');
        //     }),2000;
            
        // }

        // const primero = () =>{
        //     console.log('Inicio de primero');
        //     segundo();
        //     console.log('Fin de primero');

        // }
        // primero();

        ///Ejercicio 2 ejemplo Asíncrono///
        // const getUsuarios = () =>{//función flecha
        //     setTimeout(() =>{ //función colback para traer los IDs
        //         const userIDs = [101,102,103,105];//identificadores de usuarios
        //         console.log(userIDs);

        //         setTimeout((id) =>{//función para traer un usaurio especifico le enviamos id como parámetro 
        //            const usuario = {
        //                 email : 'damop@mail.com',
        //                 nombre : 'Grover'
        //             } 
        //            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

        //            setTimeout(idPEmisos =>{//creamos una función que nos devuelva el permiso
        //                const permisos = ['admin','creador'];
        //                console.log(permisos);
        //            },1500, userIDs[2]);
        //         },1500, userIDs[2]); // trae al usuario en la posición que le indicamos
                

        //     }, 1500);//tiempo que demora en traer los Datos userIDS 

        // }
        // getUsuarios();// se llama a  la función 

        
            ////De CallBacks a Promesas///
            const getUsuariosIDs = new Promise((response, reject) =>{
                setTimeout(() => {
                    response([101,102,103,105]);
                },1500);
            });    
            const getUsuario = userID => {
                return new Promise((resolve, reject) => {
                    setTimeout(id => {
                        const usuario = {
                            email : 'damop12@mail.com',
                            nombre : 'Davis'
                        }
                       resolve (`${id} - ${usuario.email} - ${usuario.nombre}`);
                    },1500, userID)
                });
            }
        
            const getPermisos = id => {
                return new Promise((resolve,reject)=> {
                     setTimeout(id => {
                         const permiso = ['admin','creador']; 
                         resolve(permiso);
                     },1500, id);   
                });
            }

            // getUsuariosIDs
            // .then(IDs => {
            //     console.log(IDs);
            //     return getUsuario(IDs[3]);
            // })
            // .then(usuario => {
            //     console.log(usuario);
            //     return getPermisos(usuario.id);
            // })
            // .then(permisos =>{
            //     console.log(permisos);
            // })
            // .catch(()=> {
            //  console.log('Error...');

            // })
            

            ///Función con Async/Await///

            async function getUsuariosAW(){ //Función Asíncrona
                const IDs = await getUsuariosIDs;
                console.log(IDs);
                const usuario = await getUsuario(IDs[3]);//traemos los datos del usuario
                console.log(usuario);

                const permisos = await getPermisos(usuario.id)
                console.log(permisos);
                return usuario;
            }
             //getUsuariosAW().then(resultado => console.log(`${resultado} es un Usuario.`));//Guardamos la función Asincrona
                
                ///Ejemplo de una llama AJAX con HTML Request///
                const request = new XMLHttpRequest();

                request.addEventListener('readystatechange', (e) => {//lee los cambios de estado por los que pasa
                      if(e.target.readyState === 4){
                         const datos = JSON.parse(e.target.responseText);
                         console.log(datos); 
                      } 
                });

                request.open('GET','http://jsonplaceholder.typicode.com/users');
                request.send();
                //open se utiliza para abrir la ruta que queremos leer GET

        ///Ejemplo del uso de Promesas///
            ///Ejemplo 1///
        // let promesa = new Promise((resolve,reject)=>{// creamos la variable promesa//con la clase Promise
        //     if(true){                                //enviamos los parámetros resolve y reject   
        //         resolve('La operación fue exitosa'); 
        //     }else{
        //         reject('Hubo un Error');
        //     }

        // });

        // promesa.then(response =>{//cramos una función flecha enganchamos con then
        //     console.log('Response' + response);//imprimimos la respuesta
        // }).catch(error =>{//catch se utiliza para traer el mensaje de error al comparar se controla el Error
        //     console.log('Error:..'+ error);
        // })

        // ///Ejemplo 2 Promesas///
        // var miPromesa = Promise.resolve('Comida');//declaramos la Promesa 
        // miPromesa.then(resp => console.log(resp));

        // ///Ejemplo 3///
        // var miPromesa2 = new Promise(function(resolve,reject){
        //     setTimeout(() => resolve(4), 2000);

        // })
        //     miPromesa2.then(resp => {
        //         resp += 5;
        //         console.log(resp);
        //     })
               

        
        
        
        
        
        
        ///Es solo un ejercicio para saber que hace el código ///
        // const nextRole = [];
        // nextRole.push('fullyRemote');
        // nextRole.push('greatSalary');
        // nextRole.push('amazingProduct');
        // nextRole.push('senseOfBelonging');
        // console.log(nextRole);
