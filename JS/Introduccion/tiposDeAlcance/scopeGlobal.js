//* Scope global
//* Son variables declaradas fuera de una funcion
//* Se puede acceder a ellas desde cualquier parte del codigo
//* Se puede usar let, var y const

var nombre = "Jesus";
console.log(nombre);

const saludo = () => {
    console.log(`Hola ${nombre}`);

    nombre = "Edgardo";
    console.log(`El nuevo nombre es: ${nombre}`);
}

saludo();