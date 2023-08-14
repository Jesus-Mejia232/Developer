//* Scope local o Variable Locales:
        //* -Son variables declaradas dentro de una funcion.
        //* -Solo podemos acceder a ellas desde dentro de la funcion.

        var numero = 1; //* Variable Scope global

        var obtenerCantidad = (nombre) => {
            var cantidad = nombre. th; // Variable Local Scope
            console.log(`Hola ${nombre} tu nombre tiene ${cantidad} letras`);

            var funcionAnidada = () => {
                console.log(cantidad);
            }
            funcionAnidada();
        }

        obtenerCantidad("Edgardo");
