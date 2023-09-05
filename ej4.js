let cadena = "hola";


function ordenarCadena(cadena) {

    if (cadena.length <= + 1) {
      return cadena;
    } else {
    return cadena.charAt(cadena.length - 1) + ordenarCadena(cadena.substring(0, cadena.length - 1)) ;
    }
  }
  let cadenaInvertida = ordenarCadena(cadena);
  console.log(cadenaInvertida);