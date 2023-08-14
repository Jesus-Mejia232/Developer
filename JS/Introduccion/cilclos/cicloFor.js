const nombres = ["Jesus","Edgardo","Mejia","Acosta"];
nombres.forEach((nombre) => {
    //console.log(nombre);
})

//? Ciclo for
        //* Expresion 1: Se ejecuta solo una vez antes de comenzar a repetir el bloque de codigo.
        //* Expresion 2: Una condicion, mientras se cumpla se ejecutara el bloque de codigo
        //* Expresion 3: Esta expresino se ejecuta antes y despues de que se ejecute el bloque de codigo

        // for (let numero = 1; numero < 11; numero++){
        //     console.log(numero);
        // }  

        //* Si queremos que nuestra variable "nuermo" se hace de la siguiente forma:
        // for(let numero1 = 0; numero1 <= 100; numero1 = numero1 + 5){
        //     console.log(`El digito es: ${numero1}`);
        // };

        //* Haciendo ciclo for en reversa (de 50 a 0)

        // for(let numero2 = 50; numero2 > 0; numero2 --){
        //     console.log(numero2);
        // }

//? Mecionando cada elemento de una variable con for:

for (let numero = 0; numero < nombres.length; numero++){
    console.log(nombres[numero]);
};