/* 9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún
elemento del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema*/


let arreglo = letras("B");

function letras(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].toLowerCase() =="a"||arreglo[i].toLowerCase() =="b"||arreglo[i].toLowerCase() =="c"||arreglo[i].toLowerCase() =="d"||arreglo[i].toLowerCase() =="e"||arreglo[i].toLowerCase() =="f"||arreglo[i].toLowerCase() =="g") {
            return "si";
        }else{
            return "no";
        }
    }
}
console.log(arreglo);





