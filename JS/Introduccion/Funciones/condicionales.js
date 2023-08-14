//? Condiconal "if" con "if else" 
// const persona = {
//     nombre: "Jesus",
//     edad: 18,
//     pais: "Honduras",
//     ticket: false ,
// };

// if (persona.edad >= 18){
//     if (persona.ticket){
//         console.log("La persona es mayor de edad y tiene un ticket")
//     } else{
//         console.log("La persona es mayor de edad, pero no tiene un ticket")
//     }
// } else{
//     console.log("La persona no es mayor de edad, no puede entrar al concierto")
// }


//! ----------------------------------------------------------------------------------------------------------------------------

//? Condicional "if" con "if else" (Optimo)

const persona = {
    nombre: "Jesus Mejia",
    edad: 17,
    pais: "espa",
    ticket: true,
};

if (persona.pais === "Honduras"){
    console.log("El usuario de Hondureño")
} else if(persona.pais === "Mexico"){
    console.log("El usuario es mexicano")
} else if(persona.pais === "España"){
    console.log("El usario es español")
} else {
    console.log("El usuario es de otro pais ")
};