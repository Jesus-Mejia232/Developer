// A continuacino veremos metodos para numeros:

//! ----------------------------------------------------------------------------------------------------------------------------

//? .toString() -- Nos permite pasar un valor de tipo numero a un valor de tipo cadena de texto
        // const numero = 10;
        // console.log(numero, `El tipo de dato de numero es ${typeof numero}`);

        // const cadena = numero.toString();
        // console.log(numero,`El tipo de dato nuevo de la variable numero es ${typeof cadena}`)

//! ----------------------------------------------------------------------------------------------------------------------------

//? .toFixed() -- Nos sirve para obtener un numero con la cantidad de decimales especificados.
        //* Este metodo solamente trabaja con un parametro NOTA: Si podemos una cantidad mayor de los decimales que tiene originalmente la variable
        //* Pondrá ceros para rellenar la cantidad de decimales que indicamos
        // const numero = 3.1415;
        // console.log(numero.toFixed(2));

//! ----------------------------------------------------------------------------------------------------------------------------

//? parseInt() -- Intenta transformar un valor a un entero:
        //* NOTA: parseInt() -- no trabaja con decimales, si poenmso un decimal, simplemente no lo tomará. Si necesitamos trabajar con decimales
        //* Necesitaremos usar a parseFloat()
        // const candena1 = parseInt(prompt("Escribe un numero!"));
        // const candena2 = parseInt(prompt("Escribe un numero!"));
        // const sumaTotal = console.log(candena1 + candena2);

//! ----------------------------------------------------------------------------------------------------------------------------

//? parseFloaat() -- Intenta transformar un valor a un numero con decimales:
        // const numero1 = parseFloat(prompt("Ingrese un decimal:"));
        // const numero2 = parseFloat(prompt("Ingrese un segundo decimal para sumar: "));
        // console.log(numero1 + numero2);

//! ----------------------------------------------------------------------------------------------------------------------------

//? Math.random() -- Nos va a permitir generar un numero al azar entre 0 y 1    
        // const numero1 = Math.random();
        // console.log(numero1);

//! ----------------------------------------------------------------------------------------------------------------------------

//? Math.floor() -- Redondea hacia abajo un numero.
        // const numero1 = 10.1;
        // const numero2 = Math.floor(numero2);
        // console.log(numero1);

//! ----------------------------------------------------------------------------------------------------------------------------

//? ceil() -- Hace exactamenten lo contrario a floor, es decir, redondea para arriba.
        // const numero1 = 10.2;
        // const numero2 = Math.ceil(numero1);
        // console.log(numero2);

//! ----------------------------------------------------------------------------------------------------------------------------

//? Math.round() -- Con este redondeamos al ENTERO más cercano.
        //* NOTA: Redondea pero solamente de decimales a enteros, si se trata de un entero, no lo redondea
        // const numero1 = 11;
        // const redondeo = Math.round(numero1);
        // console.log(redondeo);

//! ----------------------------------------------------------------------------------------------------------------------------

//? Ejemplo de como obtener un numero al azar del 0 a 100:
        //* De esta forma podemos obtener numero del 1 al 100 de forma aleatoria
        // const numero1 = Math.random();
        // const numeroAzar = console.log(Math.floor(numero1 * 101));

//! ----------------------------------------------------------------------------------------------------------------------------
