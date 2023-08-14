//? Tipos de datos:


//? Arreglos:

        const arreglo = ["texto", 343, "1212"];
        console.log(arreglo)

//! ----------------------------------------------------------------------------------------------------------------------------


//* Objeto:

        nombre = {
            nombre: "Jesus",
            Edad: 17,
            carro: {
                marca: "Mazda",
                color: "Amarillo",
            },
        };

        console.log(nombre.carro.marca);

//! ----------------------------------------------------------------------------------------------------------------------------


//? Funciones
        function saludo() {
            console.log("Hola");
        }

        saludo();

//! ----------------------------------------------------------------------------------------------------------------------------


//? Tipos de valores:
        //* Lo usamos cuando queremos indicar que un valor es nulo. Es básicamente reiniciar el valor de una variable.
        const miVaribale = null;

        //* Undefined se usa para indicar que un valor no esta definido 
        const miVariable2 = undefined;