let contenedor = ""; 
function revercecadena(cadena){
    //caso base
    if(cadena.length <= 1){
        return cadena;
    }
     if( contenedor = revercecadena(cadena.slice(1) )){
         return contenedor + cadena[0]
     }
}
console.log(revercecadena("hector"));