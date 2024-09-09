/*const numeros =[1,2,3,4,5];
Devolvera: 15 */

const numeros=[1,2,3,4,5];
let suma=0, sumaWhile=0;
let iniciaWhile=0;
for(inicia=0; inicia <numeros.length; inicia++){
    suma +=numeros[inicia];
}
console.log(suma);

while(iniciaWhile < numeros.length){
    sumaWhile+=numeros[iniciaWhile];
    iniciaWhile++

}
console.log(sumaWhile);

