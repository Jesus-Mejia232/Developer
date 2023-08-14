//* El parametro que se pone dentro de los parentesis es basicamente una variable que tendra el valor que ingresemos al
//* Momento de invocar la variable

//? El parmetro es el que se indica dentro de los parentesis, al crear la funcion
//? El argumento es el que se da cuando ingresamos datos al invocar la funcion
        const variable = (nombre) => {
            console.log(`Hola ${nombre}`);
        };
        variable("Jesús");

//! ----------------------------------------------------------------------------------------------------------------------------


//? Calculadora que va a sumar numeros:

        const calculadora = (tipo, num1, num2) => {
            switch(tipo){
                case "suma":
                    console.log(`El resultado de la suma es: ${num1 + num2}`);
                    break;
                case "resta":
                    console.log(`El resultado de la resta es: ${num1 - num2}`);
                    break;
                case "multiplicacion":
                    console.log(`El resultado de la multiplicacion es: ${num1 * num2}`);
                    break;
                case "division":
                    console.log(`El resultado de la división es: ${num1 / num2}`);
                    break;
            }
        }

        calculadora("suma",7,10);