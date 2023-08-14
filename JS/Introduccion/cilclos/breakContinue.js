// const nombres = ["Arturo","Andres","Alejandro","Roberto","Adrian","Antonio","Angel"];

//? Estamos haciendo un condiconal que muestre todos los nombres en consola, que empiecen con la letra "A"
        //* Cuando la algun elemento coincida con la condicion, es decir que no comience con la letra "A", todos los demás elementos 
        // for (let i = 0; i < nombres.length; i++){
        //     if(nombres[i][0] !== "A"){
        //         console.log("ALTO: Hay un elemento que no comienza por la letra 'A'")   
        //         break; //* El break hace el bucle finalize, y que, en este caso hace que ya no se siga imprimiendo en pantalla el arreglo.
        //     } 
        // }

//! ----------------------------------------------------------------------------------------------------------------------------

//? continue: La sentencia de continue nos sirve para saltar a la siguiente iteración.

const invitados = ["Jesus","Edgardo","Mejia","Acosta"];
console.log("Personas invitadas:");
// Creando un condicional que elimine a las personas que no están invitadas,
for (let i = 0; i < invitados.length; i++){
    if (invitados[i] === 'Edgardo'){
        continue;
    }
    console.log(invitados[i]); 
}


