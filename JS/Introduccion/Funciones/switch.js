const usuario = {
    nombre : "Jesus",
    pais : "honduras",
}


// // Forma no optima de usar un condicional
// if (usuario.pais == "honduras"){
//     console.log("El usuario es hondureño");
// } else if(usuario.pais == "mexico"){
//     console.log("El usuario es mexicano");
// } else if(usuario.pais == "argentina"){
//     console.log("El usuario es argentino");
// }


// Diferencias entre switch e if. Una de las varias diferencias es que no permite ingresar más parametros dentro de los 
// Parentesis, cosa que si permite el if. A diferencia del if el switch sirve para optimizar codigo y no repetir tanto
// a punto de ser redundante. Como es el caso del ejemplo de la primer forma de hacer la condicional(Con el if) y la segunda
// Forma (el switch)

switch(usuario.pais){
    case "mexico":
        console.log("El usuario es mexicano");
        break; // El break se pone para que no ejecute los demás "case"
    case "honduras":
        console.log("El usuario es hondureño");
        break;
    case "argentina":
        console.log("El usuario es argentino");
        break;
    default:
        console.log("El usuario es de otro pais"); // Es basicamente el "Else" del switch
}
//