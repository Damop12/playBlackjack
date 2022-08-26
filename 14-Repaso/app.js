// const segundo = () => {
//     setTimeout(() => {
//         console.log('llamad a segundo');
//     }, 2300)


// }


// const primero = () => {
//     console.log("Inicio de Primero");
//     segundo();
//     console.log('Fín de llamada a primero');
// }
// primero();


const getUsuarios = () => {
    setTimeout(() => {
        const userIDS = [100, 103, 107];
        console.log(userIDS);
        setTimeout((id) => {
            const usuario = {
                email: 'mateo@mail.com',
                nombre: 'Mateo',

            }
            console.log(`${id}--${usuario.email}--${usuario.nombre}`);

        }, 1500,userIDS[2]);
    }, 1500);
    //5 parte 3 4:40min

}

getUsuarios();