//ciclo while
/*
let detener="";
while(detener != "stop")
{
detener=prompt(`Deseas seguir ejecutando el ciclo:
SI o stop para detener`);}*/



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
let nombres=["Fernando","Luis","Gabriel","Karla"];

for (let i = 0; i < nombres.length; i++) 
{
console.log(`Posición ${i} = ${nombres[i]}`);
}*/
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
let a=parseFloat(prompt("Ingrese un numero: "));
let b=parseFloat(prompt("Ingrese un numero: "));

function sumar(a,b=99)
{
    
    let suma=(a+b);
    alert(suma);

}

sumar(a);


/*
let a=parseFloat(prompt("Ingrese un numero: "));
    let b=parseFloat(prompt("Ingrese un numero: "));

function sumar(a=10,b=1)
{
    
    let suma=(a+b);

    return suma;
}

alert(sumar(b));
*/