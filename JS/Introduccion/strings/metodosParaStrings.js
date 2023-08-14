//? .lenght: Nos devuelve cuantos caracteres tiene la cadena de texto.

        // const texto = "Hola lmv";
        // console.log(texto.length);

//! ----------------------------------------------------------------------------------------------------------------------------

//? .indexOf()/ .lastindexOf() : Devuelven el primer/ultimo caracter especificado.

        //* Con .indexOf() podemos saber donde está ubicado un caracter de la cadena NOTA: Si se repite más de una vez, nos arrojará el resultado
        // const texto = "Hola el mas fuerte es el mas inteligente";
        // console.log(texto.indexOf("H"));
        // console.log(texto.lastIndexOf("e"));

//! ----------------------------------------------------------------------------------------------------------------------------

//? .slice() : Devuelve un fragmento de una cadena de texto.
        //* Primer parametro: Index desde donde queremos cortar
        //* Segundo parametro (Opcional): Index hasta donde queremos cortar

        // const texto = "Hola el mas fuerte es el mas inteligente";
        // const index = texto.indexOf('e');
        // const lastIndex = texto.lastIndexOf("e");
        // const newVariable = texto.slice(index,lastIndex + 1);
        // console.log(newVariable);

//! ----------------------------------------------------------------------------------------------------------------------------

//? .replace(): Sirve para remplazar una cadena de texto por otra
        //* Primer parametro: El texto que queremos remplazar
        //* Segundo parametro: El texto que queremos poner
        // const variable1 = "Hola soy Jesus";
        // console.log(variable1.replace("Jesus","Edgardo"));

//! ----------------------------------------------------------------------------------------------------------------------------

//? .split() Convierte una cadena de texto en un arreglo.
    //* Tenemos que especificar donde cortar cada elemento.
    // const saludo = "Hola soy Jesus";
    // console.log(saludo.split(" "));

//! ----------------------------------------------------------------------------------------------------------------------------

//? .toUpperCase .toLowerCase() --Devuelve una cadena de texto con todas minuscular/mayusculas
const saludo = "Hola soy Jesus";
const todoMayus = saludo.toUpperCase();
const todoMinus = saludo.toLowerCase();