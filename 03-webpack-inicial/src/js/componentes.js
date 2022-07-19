
import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {

    console.log('Creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre} !!!`; // interpolacion ${ }

    document.body.append(h1);//referencia al html


    //img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img);

}