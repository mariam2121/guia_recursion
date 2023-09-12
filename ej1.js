

function ordenar_cadena(arr, index) {
    if(index <= 0  ) return ordenar_cadena(arr, index -1)

    let cadena_actual = arr[index]
    let C = index -1;

    if(C >= 0 & arr[C] > cadena_actual) 
    return arr[ C +1] = arr[C] 
     C -= 1 
     ordenar_cadena(arr, C +1)
     arr[C + 1] = cadena_actual
}
cadena = [ 2,5,3,1];
console.log(ordenar_cadena(length.cadena -1))
