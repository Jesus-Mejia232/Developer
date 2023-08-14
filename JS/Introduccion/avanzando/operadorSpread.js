//! ----------------------------------------------------------------------------------------------------------------------------

//? Operador Spread -- Nos va a permitir tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.

                // const frutasFavoritas = ["Manzana","Banano","Mango","Fresa"];
                // const alimentosFavoritos = ["Pollo frito","papa con huevo","Chuleta frita con arroz y huevo con papa", ...frutasFavoritas];
                // console.log(alimentosFavoritos);

                //* Este operador también funciona con objetos:
                //* NOTA: Si una variable está repetida, se va a sobreescribir, o sea que los datos que se van a sobreescribir son los datos del sitio donde estamos jalando los datos de la 
                //* Original. Si no queremos que esto pase, lo que tenemos que hacer es que tenemos que hacer el spread antes de los datos que se nos van a sobreescribir, ejemplo:

                // const datosLogin  = {
                //     nombre: "Jesus",
                //     correo: "correo@correo.com",
                //     password: 123,
                // };

                // const usuario = {
                //     ...datosLogin,
                //     nombre: "LMV",
                //     edad: 17,
                // }
                // const datosUser = usuario;
                // console.log(datosUser);

//! ----------------------------------------------------------------------------------------------------------------------------

//? Parametro Rest:
                //* Permite que una funcion contenga un numero indefinido de argumentos.
                //* Los argumentos extra que encuentre, los convertirá en un arreglo
                //* Básicamente el operador rest es el mismo que el operador spread, a diferencia que se usa para instanciar variables. Que si bien, no son obligatorios, se mostrarán en consola

                // const registroDeUsario = (nombre,correo, ...datosAdcionaeles) => {
                //     console.log(nombre, correo,datosAdcionaeles);
                // }

                // registroDeUsario("Jesus","Correo@correo.com");


//! ----------------------------------------------------------------------------------------------------------------------------

//? Destructuracion de objetos
                //* Nos permite obtener los elementos o propiedades de un objeto en guardarlos en una variable, básicamente es el desempaquetado de python
                //* Lo interesante de la destructuracion es que se puede hacer tambien con objetos
                // const amigos = ["Jesus","Edgardo","Mejia","Acosta"];
                // const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
                // console.log(primerAmigo);

                //* Destructuracion con objetos:

                //* NOTA: Se puede poner solamente los datos que se necesiten, no es necesario destructurar la misma cantidad de elementos que tiene el objeto o arreglo
                //* A diferencia de la destructuracion con arreglos aqui usamos llaves, ya que estamos trabajando con objetos. Otro detalle es que aquí se tenemos que poner el nombre
                //* Exacto del elemento, ya que si ponemos un alias nos arrojará un error

const persona = {
    nombre: "Jesus",
    apellido:"Mejia",
    edad: 17,
}

const {nombre,edad} = persona;
//console.log(nombre,edad);

const mostrarEdad = (nombre, edad) => {
        console.log(`${nombre} tiene ${edad} años`);
};

// mostrarEdad(nombre,edad);

//* A continuacion veremos como pasar directamento todo el diccionario a la función:
//* Tendriamos que encerrar entre dos llaves los alias "nombre" y "edad" de de la funcion "mostrarEdad", ejemp:
const mostrarEdad2 = ({nombre, edad}) => {
        console.log(`${nombre} tiene ${edad} años`)
}
mostrarEdad2(persona);

//! ----------------------------------------------------------------------------------------------------------------------------

