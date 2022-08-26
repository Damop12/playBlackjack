////Manejo de Clases en JavaScript///
class Persona{
    constructor(nombre,edad, profesiones = []){
        this.nombre = nombre //con la palabra this para darle propiedades o atributos a mi clase
        this.edad = edad;
        this.profesiones = profesiones;

    }
    getBiografia(){  //métodos
        let biografia = `${this.nombre}, tiene ${this.edad}.Profesiones `;
        this.profesiones.forEach((profesion) =>{
            biografia += `${profesion}, `;
        }) 
        return biografia;
    }

}

class Empleado extends Persona{ //creamos una sub-clase que herede de la clase Persona, con la palabra extends se hereda 
    constructor(nombre,edad,profesiones = [], sueldo, puesto){ // al tener sus propios datos el Empleado debo crear un constructor
        super(nombre,edad,profesiones);// que son los datos que recibe la clase Persona
        this.sueldo = sueldo;
        this.puesto = puesto;
    } 

    getBiografia(){

        return super.getBiografia() + `Puesto ${this.puesto}, Salario ${this.sueldo}`;
    }
    
    set sueldo(monto){
        this._sueldo = monto 
    }

    get sueldo(){
        return this._sueldo
    }
}

const persona1 = new Empleado('Pablo',37, ['Arquitecto,Doctor'],1600,'Gerente'); // para isntaciar el objeto persona
const persona2 = new Empleado('David',33,['Ingeniero, Instructor'],1200,'RRHH');
const persona3 = new Persona('Angel',29,['Analista']);

persona1.sueldo = 3000;

console.log (persona1.getBiografia());
console.log(persona1.sueldo);
console.log (persona2.getBiografia());
console.log(persona3.getBiografia());

    
    ////Gette y Setter

// const  datos = { //creamos un objeto

//     get ubicacion(){
//         return this._ubicacion
//     },
//     set ubicacion(valor){
//         this._ubicacion = valor
//     }
// }

// datos.ubicacion = 'Buenos Aires'
// console.log(datos.ubicacion)
// console.log(datos)