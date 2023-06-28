/*8. Cree una función que reciba un arreglo y retorne su longitud(número de elementos) */

let arreglo = recor([1,2])//prompt(["Ingrese el arreglo separado por (,)"]));

function recor(arreglo) {
    let suma=0;
    let res=0;
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i]==","||arreglo[i]==" "){
            res++
        }
        suma++
    }
    return suma-res;
}

console.log(arreglo);

