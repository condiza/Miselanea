/*4. Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
 */


let  a = [2, 6, 9, 0, 5];

let b = a;
console.log(a);
b.push(6);
console.log(a);