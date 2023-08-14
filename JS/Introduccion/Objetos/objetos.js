//? Creando el objeto:
        const personaArreglo = ["Jesus", 17, "correo@correo.com",true,true];

        const persona = {
            nombre: "Jesus",
            edad: 17,
            correo: "correo@correo.com",
            subscripciones: {
                web: true,
                correo: true
            },
            coloresFavoritos: ["Rojo","Verde"],
            saludo: function () {
                alert("!HOLA");
            }
        };
            
//? Formas de acceder a un objeto en js:
        //console.log(persona.nombre);
        //console.log(persona['edad']); // Se tiene que pone en comillas para que js entienda que se trata de una propiedad y no
        // De una variable

//* De esta manera podemos acceder a los datos de un objeto, desde una varible completamente nueva, se puede decir que es 
//* Una especie de simulacion de un "AS" de sql o de python. O bien de otro lenguaje de programacion en el que ese emplee
        const variable1 = "correo";
        console.log(persona[variable1]);

//* Para añadir una nueva propiedad dentro del objeto, esta es una de las maneras de hacerlo:
        persona.pais = "Honduras";
        console.log(persona)
        // Tambien podemos sobre escribir los datos del valor
        persona.pais = "Rusia";


//* Así como a las variables dentro de un objeto se les conoce como propiedaddes, a las funciones dentro de los
//* objetos se les conoce como metodos, y para acceder a ellos es de la siguiente forma, la unica diferencia es que 
//* toca poner parentesis para indicar que queremos activar el metodo:
        persona.saludo()