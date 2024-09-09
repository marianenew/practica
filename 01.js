/*Ingresando: 5
Devolvera: 0, 1, 2, 3, 4, 5 */

let valorFor='',valorWhile='';
let ingreseValor=prompt("Ingrese un Valor: ");
for(i=0; i<=ingreseValor-1;i++){
     valorFor +=i+","

}
valorFor +=i
console.log(valorFor);

iniciarValor = 0;
while(iniciarValor<ingreseValor){
    valorWhile+= iniciarValor+', ';
    iniciarValor++;
}
valorWhile+= iniciarValor;
console.log(valorWhile);