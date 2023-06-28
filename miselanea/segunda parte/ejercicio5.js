/*5. Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b */

let b = ["abc", 4, 88, 99]; 


let a = b.slice();

console.log(b);
a.push(12);
console.log(b);


