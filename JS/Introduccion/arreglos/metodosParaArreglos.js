//? Qué es un arreglo:
//*     Un tipo de dato en el que nosotros podemos guardar varios valores
//*     Los arreglos dentro de js realmente son objetos, por ende tiene propiedades y metodos
        const colores = ['Rojo','Verde','Azul'];

//! Arreglos: ---------------------------------------------->


//?.length: (propiedad) nos permite conocer la cantidad de elementos de un arreglo.
//      console.log(colores.length);


//! ----------------------------------------------------------------------------------------------------------------------------


//? El siguiente que veremos será un método, se trata del "toString()" nos permite transformar un arreglo
//? en una cadena de texto, por ejemplo, para poder mostrarlo en el navegador*/
        document.body.innerHTML = colores.join(" ",colores.toString()); // Convinando un join con un toString


//! ----------------------------------------------------------------------------------------------------------------------------


//? Ahora veremos el ".join", nos permite transformar un arreglo a una cadena de texto y separar cada  elemento:
//      console.log(colores.join(" - - "));


//! ----------------------------------------------------------------------------------------------------------------------------


//? .sort();: Es un metodo, nos permitirá ordenar un arreglo de cadenas de texto de forma alfabetica(también funciona con números). Otro 
//? detalle es que el metodo .sort modifica el arreglo directamente, es decir que, cuando volvamos a invocar al mismo arreglo, ya nos 
//? los arrojará en pantalla, ordenado, aunque no estemo invocando al metodo en ese momento:
        const letras = ["C","D","A","B"];
//      console.log(letras.sort());


//! ----------------------------------------------------------------------------------------------------------------------------

//? Si necesitamos ordenar las letras de forma descendente necesitaremos usar a ".reverse();"
//? Al igual que ".sort()" también ordena de forma descendente números*/
//      console.log(letras.reverse());

//! ----------------------------------------------------------------------------------------------------------------------------


//? Metodo .concat() sirve para unir dos arreglos:
        const variable1 = ["A","B","C"];
        const variable2 = [1,2,3,4];
        const variableCombinada = variable1.concat(variable2);
//      console.log(variableCombinada);


//? Metodo .push(): Nos permite agregar un elemento al final del arreglo*/
        const numeros1 = [1,6,4,2,5,3];
        numeros1.push(7);
//      console.log(numeros1);

//! ----------------------------------------------------------------------------------------------------------------------------


//? Con el metodo .pop() eliminamos el ultimo elemento del arreglo*/
        numeros1.pop();
//      console.log(numeros1);
