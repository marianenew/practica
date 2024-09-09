const nombres =["Ana", "Luis", "Carlos", "Maria"];
let iniciaWhile=0,iniciaDo = 0;
console.log("For: ","/n");
for (i=0;i < nombres.length;i++){
    console.log(nombres[i] );
}
console.log("For Of: ","/n");
for ( let item of nombres ) {
     console.log( item );
}

console.log("While: ");
while(iniciaWhile< nombres.length){
  console.log(nombres[iniciaWhile])
  iniciaWhile++
}


console.log("Do While: ");
do {
    console.log(nombres[iniciaDo] );
    iniciaDo++;
} while (iniciaDo < nombres.length);

