function final_cadena(cadena1,cadena2){
 // caso base
 if(cadena2 === " "){
     return true;
 }
  if(cadena1.length < cadena2.length){
      return false;
  }

  if(cadena1[cadena1.length - 1] === cadena2[cadena2.length -1]){
      return final_cadena(cadena1.slice(0, -1), cadena2.slice(0, -1));
  } else
  return false;
}

console.log(final_cadena("casa", "muchas casa"))