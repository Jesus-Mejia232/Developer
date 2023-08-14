//? Clases. Estructura de una clase:
//* Definicion: 
//* Propiedades: Las clases pueden contener propiedades. Dentro de una clase se llaman propiedades.
//* Constructor: Es un metodo especial para inicializar un objeto creado en una clase.
//* Métodos: La clase puede contener funciones. Dentro de una clase se llaman métodos.

class User {
    tipo = "Usuario";

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    };
    
    obtenerNombre (){
        console.log("Obteniendo datos...");
        return `${this.nombre} ${this.apellido}`;
    };
};

const user = new User("Jesus","Mejia");
console.log(user.obtenerNombre());

//* Creando la funcion desde la database

const variablenum1 = datesVariable1
const variblenum2 = DataTransferItem

//? Concact de las las variables