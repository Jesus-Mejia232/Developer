//? .shift() es otro metodo, que sirve para eliminar el primer elemento del arreglo, y hacer que los indices de todos los elementos 
//? se recorran entre si para el nuevo orden. Ejemp: 

//*  Como dato extra, en el momento que se elimina el primer elemento, ese proceso se puede hacer dentro de una variable nueva,
//*  y cuando se acceda a esa variable nueva, estará el elemento eliminado

        // const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
//      console.log(dias);
//      const diaEliminado = dias.shift(); //* En esta variable se encuentra el elemento eliminado
//      console.log(dias);
//      console.log(diaEliminado); 

//! ----------------------------------------------------------------------------------------------------------------------------


//? Si queremos agregar un elemento al arreglo, usamos .unshif(), unshif agrega un elemento al inico y va empujando a los demás.

        // const diadeMas = dias.unshift("Jesus");
//      console.log(dias);
//      console.log(diadeMas);

//! ----------------------------------------------------------------------------------------------------------------------------


 //? Ahora veremos otro metodo, llamado .splice() y se usa asi:
//* Primer parametro: Posicion donde queremos comenzar a insertar los elementos
//* Segundo parametro : Si queremos eliminar elementos del arreglo desde la posicion indicada, y la cantidad de elementos a eliminar
//* Resto de parametros: Elementos a insertar

        // const amigos = ["Jesus","Edgardo","Mejia","Acosta"];
        // const amigosNuevos = amigos.splice(2,3,"Mejor","Ninguno"); //* Si accedo a esta variable vere los elementos antiguos
//*     Si no queremos eliminar elementos y solo queremos agregar más, entonces en el segundo parametro, ponemos un cero, para que no se elimine
//*     ningun elemento y solamente se agreguen los que indiquemos en el tercer parametro. Ejemp:
        // const ejemplo = amigos.splice(3,2,"Ejemplo1","Ejemplo2");
//      console.log(amigosNuevos);
//      console.log(ejemplo);

//! ----------------------------------------------------------------------------------------------------------------------------


//? .slice() nos permite copiar una parte de un arreglo, a otro.
//*     1mer parametro - Posicion desde donde queremo copiar
//*     2do parametro - Hasta antes de que elemento copiar*/
//*     Basicamente hay que poner en los parametros un indice mayor al que queremos copiar, y exactamente desde el indice que queremos empezar, a copiar(Con slice)
        // const frutas = ["Fresa","Manzana","Uva","Piña","Mango","Naranja","Melon"];
        // const favoritas = frutas.slice(1,6);
        // console.log(frutas);
        // console.log(`Las frutas favoritas de todas son: ${favoritas}`);

//! ----------------------------------------------------------------------------------------------------------------------------


//? .indexof() este metodo sirve para saber la ubicacion del indice en el que se encuentra el elemento del arreglo 
        //* NOTA: Si se pone un dato Que no existe, nos arrojara un -1 NOTA: Si el elemento se encuentra más de una vez dentro del arreglo nos arrojará donde se encuentre primero:
        // const arreglo1 = ["Jesus","Edgardo","Mejia","Acosta"];
        // console.log(arreglo1.indexOf("Edgardo"));

//! ----------------------------------------------------------------------------------------------------------------------------

//? .lastIndexOf(): Este metodo hace lo mismo que el indexOf(). | Con diferencia que nos devuelve el ultimo elemento de los duplicados
        // const arreglo = ["Jesus","Mejia","Acosta","Edgardo","Mejia","Acosta","Jesus","Jesus"];
        // console.log(arreglo.lastIndexOf("Jesus"));


//! ----------------------------------------------------------------------------------------------------------------------------

//? .forEach(): Nos permite ejecutar una funcion en cada elemento:
        //* Los parametros que ponemos dentro de parentesis de la funcion de tipo flecha "("En estos parentesis") => {}" que creamos dentro del metodo ".forEach" 
        //* Son para, el primer parametro es para indicar que es cada elemento que está dentro del
        //* Arreglo, el segundo elemento es para crear la variable de en donde se estara alojando el index de cada elemento.
        // const arreglo = ["Jesus","Mejia","Acosta","Edgardo","Mejia","Jesus","Acosta","Edgardo"];
        // arreglo.forEach((nombre, index) => {
        //        console.log(`El nombre de la persona es ${nombre}`);
        // });

//! ----------------------------------------------------------------------------------------------------------------------------

//? .find(): Nos permite recorrer un arreglo y devuelve el primer elemento qube retornemos:
        //* NOTA : Si ponemos un valor que no existe nos arrojara "undefined".
        //* En este ejemplo estamos haciendo una funcion que busca el primer nombre que comience con la letra "E":
        // const arreglo = ["Jesus","Mejia","Acosta","Edgardo","Mejia","Jesus","Acosta","Edgardo"];
        // const obteniendoNombre = arreglo.find((nombre) => {
        //         if(nombre[0] === "E"){
        //                 return nombre;
        //         };
        // })
        // console.log(obteniendoNombre);

//! ----------------------------------------------------------------------------------------------------------------------------


//? .map(): Este metodo nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo en base a los resultados de esa funcion:
        //* Básicamente el resultado que arroja map es un arreglo nuevo, por lo que, cuando se use hay que crearlo dentro de una variable, evidentemente vacía
        //* Así como los arreglos tienen métodos, las cadenas de texto, también tienen métodos, y con el método ".toUpperCase()" estamos diciendo que convierta cada 
        //* Nombre en mayuscula
        // const nombres = ["Jesus","Edgardo","Mejia","Acosta","Jesus","Edgardo","Mejia","Acosta"];
        // const nombresMayus = nombres.map((nombre) => {
        //         return nombre.toUpperCase();
        // });

        // console.log(nombresMayus);

        //? Si queremos optimizar más las líneas de código que ya tenemos:
        //* NOTA: Cuando estamos trabajando en una sola línea de código, con una funcion tipo flecha, podemos eliminar las llaves "{}" tambien podemos eliminar el "return" ya que
        //* Automaticamente retorna los valores la funcion tipo flecha, al estar en una sola línea. Aquí tenemos el mismo resultado, pero acortado a una sola línea de código
        //* NOTA: El "return" sucede después de la flecha "=>"
        // const nombresMayus2 = nombres.map((nombre) => nombre.toUpperCase());

//! ----------------------------------------------------------------------------------------------------------------------------

//? .filter(): Este metodo nos permite ejecutar una funcion por cada elemento y luego crear un arreglo a base de los resultados de esa función.
//* NOTA: Si no encuentra ninngun elemento simplemente pondra la cadena vacia 
        // const nombres = ["Jesus","Edgardo","Mejia","Acosta","Jesus","Edgardo","Mejia","Acosta","jesu"];
        // const nombre4Letras = nombres.filter((nombre) => {
        //         if (nombre.length === 4){
        //                 return nombre
        //         }
        // })

        // console.log(nombre4Letras);

//! ----------------------------------------------------------------------------------------------------------------------------

//? .includes() : Nos permite saber si el arreglo contiene un elemento especificado:
        //* NOTA: Si buscamos un elemento que no está, nos arrojará un false.
        // const nombres = ["Jesus","Edgardo","Mejia","Acosta","Jesus","Edgardo","Mejia","Acosta"];
        // console.log(nombres.includes("Jesus"));

//! ----------------------------------------------------------------------------------------------------------------------------

//? .every() : Nos permmite ejecutar una condiconal sobre cada elemento y nos devuelve true si TODOS los elementos cumplieron la condición:

const nombres = ["Jesus","Edgardo","Mejia","Acosta","Jesus","Edgardo","Mejia","Acosta",542];
        // const condiconal = nombres.every((nombre) => {
        //         if(typeof nombre === "number"){
        //                 return true;
        //         } else{
        //                 return false;
        //         }
        // })

        // console.log(condiconal);

//! ----------------------------------------------------------------------------------------------------------------------------

//? .some(): Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si algun elemento cumplió la condición
//? A diferencia del .every() que solamente arroja true si todos los elementos cumplieron con la condicion.

        // const condiconal = nombres.some((nombre) => {
        //         if(typeof nombre !== "number"){
        //                 return true;
        //         } else{
        //                 return false;
        //         }
        // })
        // true si hay algun valor invalido
        // false si no hay algun valor invalido

        // console.log(`El arreglo es invalido?: ${condiconal}`); 

//! ----------------------------------------------------------------------------------------------------------------------------

