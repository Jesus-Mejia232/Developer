//? Calculadora:
        const calculadora = (tipo, num1, num2) => {
            let resultado;

            if(tipo === "suma") {
                resultado = num1 + num2;
            }else if (tipo === "resta"){
                resultado = num1 - num3;
            }

            return resultado;
        };

        const datos = calculadora("suma",45,45); // Se dan los datos a procesar, luego se imprime el dato arrojado 
        console.log(datos);

//! ----------------------------------------------------------------------------------------------------------------------------


//? Otra forma de optimizar el codigo es la siguiente. Eliminando la variable y retornando los datos 
//? en la misma linea de codigo
        const operacion = (tipo, num1, num2) => {
            if(tipo === "suma"){
                return num1 + num2;
            }else if(tipo === "resta"){
                return num1 + num2;
            }
        }

        const resutls = operacion("suma",2,2);
        console.log(resutls);