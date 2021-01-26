    /////Arreglos en ES6+////
    const ceviche = [ //definimos un objeto
        {
            codigo :1,
            titulo :'pescado',
            tipo : 'frescos'
        },
        {
            codigo :2,
            titulo:'mariscos'
        },
        {
            codigo:3,
            titulo:'cebolla'
        },

    ];

    // console.log(ceviche.pop());// pop elimina elemento al final

    // ceviche.push('Lemón')// push para agregar elemento al final del  arreglo
    // console.log(ceviche.shift())// elimina como pop 
    // ceviche.unshift('mandioca') //unshift agrega un elemento al inicio
    // console.log(ceviche);
  
    // ceviche[0]= 'mandioca';
    // console.log(ceviche[ceviche.length-1])

    

    // ceviche.splice(1,0,'centolla')// permite gregar y eliminar elementos del array
    
    // console.log(ceviche);

    // ceviche.forEach(function(Item,Index){ //forEach permite recorrer un arreglo
    //     console.log(Index)
    //     console.log(Item);
        
    //     });  

    //     for(let i =0; i < ceviche.length; i++){
    //         console.log(`Indice:${i}: ${ceviche[i]}`);// Template string
    //     }

        const buscarIngrediente = function(ceviche,titulo){ //creamos una función
            const index = ceviche.findIndex(function(ing, findIndex){
                return ing.titulo === titulo;
            });
            return index;
        }
        const filtrarIngredientes = ceviche.filter(function(ing,index){
            const ingredientes = ing.titulo.includes('do');
            return ingredientes;
        });
        //console.log(filtrarIngredientes);

        console.log(ceviche); 
        ceviche.sort(function(a,b){
            if(a.titulo > b.titulo){
                return 1;

            }
            if(a.titulo < b.titulo){
                return -1;
            }
            return 0;
        });
        console.log(ceviche);
        // const paises = ['Paraguay','Argentina','Brasil','España']
        // console.log(paises.filter(pais => pais.includes('i'))); 
        
        ///Busqueda de un elemento en el array con indexOf busqueda sencilla
        // const index = ceviche.findIndex(function(ing, index){ // creamos una variable index para que nos devuelva
        //       //el indice ,busqueda con objetos es con findIndex
        //     console.log(ing);
        //     return ing.titulo === 'cebolla';//comparación para encotrar el elemento
        // });
       // console.log(buscarIngrediente(ceviche,'pescado'));
        //console.log(ceviche[buscarIngrediente(ceviche,'pescado')]);
