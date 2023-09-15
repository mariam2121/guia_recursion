function polindroma(palabra){
  // caso base 
    if(palabra.length <=1 ){
        return true
    }
     if (palabra[0]=== palabra[palabra.length-1]){
         return polindroma(palabra.slice(1 , palabra[palabra.length-1]))
     } else 
      return false;

}
console.log(polindroma("osos"));