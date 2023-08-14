const persona = {
    nombre : "Jesus",
    edad : 17,
    amigos : ["Jesus","Edgardo","Mejia","Acosta"],
    saludo : () => {
        cnosole.log("Hola")
    },
};

//? Metodos que vamos a utilizar en los objetos:
//* Metodos propios o personalizados.

//! ----------------------------------------------------------------------------------------------------------------------------

//? Object.keys(): Nos devuelve un arreglo con las llaves (Keys) del objeto
    // const result = Object.keys(persona);
    // console.log(result);

//! ----------------------------------------------------------------------------------------------------------------------------

//? Object.values(): Nos devuelve un arreglo con los valores del objeto.

    // const result = Object.values(persona);
    // console.log(result);

//! ----------------------------------------------------------------------------------------------------------------------------

//? Objetct.entries(): Nos devuelve un arreglo con ambos datos (Propiedad y valores):
//* Cada propiedad y valor que arroja es un arreglo por separado

const result = Object.entries(persona);
console.log(result);
console.log(`El objeto tiene ${result.length} de propiedades.`)