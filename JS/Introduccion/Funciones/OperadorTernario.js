//? Veremos como crear una condicion, de distintas formas:

//** Creando la condicon con "If else":
//      const tipoBoleto = "regular";
//      let idAcceso;

//      if (tipoBoleto === "vip"){
//          idAcceso = "VIP-1234-567";
//      } else {
//          idAcceso = "REGULAR-678-234";
//      }
//*      console.log(idAcceso);

//! ----------------------------------------------------------------------------------------------------------------------------


//? Creando condicon con ".switch()":
//*     const tipoBoleto = "vip";
//*      let idAccesom;

//              switch(tipoBoleto){
//          case "vip":
//              console.log("VIP-1234-12344")
//              break
//          case "regular":
//              console.log("REGULAR-123-212")
//              break
//          default:
//              console.log("El usuario no tiene un tipo de boleto valido")
//      };


//! ----------------------------------------------------------------------------------------------------------------------------


//? Crenado condicion con ternario (Sin optimizar)
        const tipoBoleto = "vip";
        let idAcceso1 = (tipoBoleto === "vip") ? "VIP-2323-232": "REGULAR-123-123";
        console.log("")

//! ----------------------------------------------------------------------------------------------------------------------------


//? Optimizando el operador ternario para una sola linea de codigo
        const idAcceso2 = (tipoBoleto === "vip") ? "El usuario cuenta con un boleto vip" : "El usuario cuenta con un boleto normal";

//TODO: NOTA: Usar el operador ternario solo cuando no sean tantas lineas de codigo, si son varias lineas, lo más optimo es usar un if