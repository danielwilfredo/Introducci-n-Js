//ciclo while
/*
let detener="";
let n=0;
while(detener != "stop") 
{
   
detener=prompt(`Deseas seguir ejecutando el ciclo:
SI o stop para detener`);

n++; 

alert(`El codigo se ejecuto ${n} veces`);
}*/


//ciclo Do while
/*
let num =5;

do{
    alert(num);
    num=parseInt(prompt("Ingrese un numero"));
}
while(num!=0)
*/
//Arreglos
/*
let nombres=["Kevin","Daniel","Steven","Claudia"];
for (let i = 0; i < nombres.length; i++) 
{
console.log(`Posición ${i} = ${nombres[i]}`);
}
console.log(nombres)
*/
/*
let notas = [];
let suma=0;
for(let i = 0; i<4;i++)
{
    let nota=parseInt(prompt("Ingrese una nota: "));
    notas.push(nota);
    suma +=notas[i];

}
console.log(suma);
console.log(notas);
*/


//funciones
/*
let a=parseFloat(prompt("Ingrese un numero: "));
let b=parseFloat(prompt("Ingrese un numero: "));

function sumar(a,b)
{
    let suma=(a+b);
    return suma;
}

console.log(sumar(a,b));
*/

let a=parseFloat(prompt("Ingrese un numero: "));
let b=parseFloat(prompt("Ingrese un numero: "));

function sumar(a=10,b=1)
{
    
    let suma=(a+b);
    return suma;
}

alert(sumar(a,b));

/*
let numeros=[1,2,3];
let suma=7;
let tabla=0;

for (let i = 1; i < 11; i++) {
    
    tabla=i*suma;
    console.log(`${suma} X ${i} = ${tabla}`);
    
}

console.log(suma)
*/