//localStorage.setItem('UserName','Dop');
//console.log(localStorage.getItem('UserName'));

// localStorage.setItem('ubicacion','Asuncion');// setItem asigna un usuario y contraseña
// console.log(localStorage.getItem('ubicacion'));// getItem muestra la contraseña
// console.log(localStorage.getItem('UserName'));
// localStorage.removeItem('UserName');//para eliminar el usuario creado 
// localStorage.clear();//Limpiar el localStorage


    ////Notación JSON "JavaScript objet Notation"////
 
    const usuario ={
        nombre: 'Arturo',
        edad: 36
    }
        //se convierte a este usuario en formato JSON usando una función del formato JSON//
    const usuarioJSON = JSON.stringify(usuario);//stringify convierte el objeto enviado como parámetro a string
    localStorage.setItem('usuario',usuarioJSON);//para guardar el JSON en el localStorage
    const userJSON = localStorage.getItem('usuario');//para leer el localSotorage


    const usuario2 = JSON.parse(userJSON);//para volver a convertir a objeto se utiliza parse
    console.log(`${usuario2.nombre}:${usuario2.edad}`)//mostramos la info con un template string
    
    
    



 /*****************
  * //git add. 
    //git commit -m "comentario"
    //git push 
    //user Damop12
 ****** **********/   

