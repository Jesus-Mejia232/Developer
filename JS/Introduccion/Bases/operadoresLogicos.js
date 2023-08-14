//? Operadores logicos

//? Hay 3 tipos de operadores logicos; 
        //* and(&&) 
        //* or(||) 
        //* not(!)
        //? el not basicamente lo que hace es invertir el valor booleano de la variable

//? Ejercicio;
//* Crear un programa que verifique si una persona puede entrar a un concierto, teniendo en cuenta:
        //?los siguientes parametros:
        //?Que sea mayor de edad o que tenga permiso de los padres
        //?Que tenga el boleto*/

        datos = {
            nombre: "Jesus",
            Edad: 17,
            permisoPadres: true,
            boletoEntrada: true,
        };

        const permisoAcceso = (datos.Edad > 18 && datos.boletoEntrada) || (datos.permisoPadres && datos.boletoEntrada);

        console.log(permisoAcceso)