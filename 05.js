/*Dado dos variables, a y b, con valores iniciales (por ejemplo, a = 4 y  b = 9), 
intercambia sus valores de manera que a tenga el valor de b y b tenga el valor de a.
 Realiza esta operación sin usar una variable auxiliar.*/

 let a=4,b=9;
 console.log("valores iniciales: ",a,b)
 a=a+b;
 b=a-b;
 a=a-b;

 console.log("Intercambio de valores: ",a,b);
