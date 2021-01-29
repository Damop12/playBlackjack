    ///Manejo de Fecha y Hora///
    // const ahora = new Date();
    // const timestamp = ahora.getTime();//función de milisegundos
    // const fecha1= new Date("Decembre 29, 1995,10:50:49");
    // console.log(timestamp.toString());//muestra la hora y la fecha en milisegundos
    // console.log(ahora.toString());
    // console.log(fecha1.toString());
    // console.log(timestamp.toString());

    // const fechaActual = new Date(timestamp);
    // console.log(fechaActual.getFullYear());

    // console.log(`Año: ${ahora.getFullYear()}`);//devuelve el año actual
    // console.log(`Mes: ${ahora.getMonth()}`);//devuelve el mes
    // console.log(`Día:${ahora.getDate()}`);//devuelve el día

    // console.log(`Hora: ${fecha1.getHours()}`);//devuelve la hora asignada a fecha1
    // console.log(`Minutos: ${fecha1.getMinutes()}`);
    // console.log(`Segundos: ${fecha1.getSeconds()}`);

    /*Ejer.Comparación de fechas.
        Crear dos Objetos Date, uno con una fecha cualquiera y el siguiente con la fecha actual,
        luego comparar ambos valores, visualizar cual es la fecha menor
    */
        ///una solución mi solución///
    // const fechax = new Date("October 23 2021 12:33 ");
    // const hoy = new Date();
    // if(fechax<hoy){
    //     console.log(`La fecha de hoy es mayor: ${hoy}`);
    // }else{
    //     console.log(`La fechaX es mayor: ${fechax}`);
    // }

        ///Solución del Prof///
        const fechaUno = new Date('Junie 02 2019 14:33:35');
        const fechaDos = new Date();
        const timestampFechaUno = fechaUno.getTime();
        const timestampFechaDos = fechaDos.getTime();
            
        if(timestampFechaUno < timestampFechaDos){
            console.log(fechaUno.toString());

        }else if(timestampFechaDos > timestampFechaUno){
            console.log(fechaDos.toString());

        }
            
        


