//? Ciclo forEach:
        //* Es un metodo de los arreglos que podemos usar para recorrer los elementos

        // const amigos = ["Jesus","Mejia","Acosta","Edgardo"];
        // amigos.forEach((amigo,index) => console.log(`El amigo numero ${index} es ${amigo}`));

//! ----------------------------------------------------------------------------------------------------------------------------

//? For in:
        //* Nos permite recorrer las propiedades de un objeto

        // const objeto = {
        //     nombre: "Jesus",
        //     edad: 17,
        //     correo: "Correo@correo.com",
        // };


        // for (elemento in probando = objeto){
        //     objeto[elemento] = ''; // De esta forma elminamos datos del objeto
        //     console.log(objeto[elemento]);
        // };

        // console.log(objeto[elemento]);

//! ----------------------------------------------------------------------------------------------------------------------------

//? for of:
//* Nos permite recorrer los valores de un objeto iterable.
//* Podemos recorrer: Cadenas de texto, Mapas y listas de nodos, etc.

const etiquetas = document.head.children;
console.log(etiquetas);
// La desventaja que tenemos es que no podemos usar el forEach, ya que es un metodo para arreglos, y "Etiquetas" no es un arreglo.

//* Pequeño truco para poder usar el forEach. Es usando el metodo spread.
[...etiquetas].array.forEach(elemento => console.log(elemento));
