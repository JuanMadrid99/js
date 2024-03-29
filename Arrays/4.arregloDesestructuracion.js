let a;
let b;
let c;
[a,b,,,c]=[1,2,3,4,5,6,7,8,9]; //el C se saltara 2 valores...se saltara 3,4 
console.log(a,b,c); //Output: 1,2,5
// Se puede cambiar valores de los arreglos 
[c,b,a] = [a,b,c]; //c=a , a=c
console.log(a,b,c); //Output: 5 2 1  

// ========================CON EL OPERADOR REST=========================== 
let x;
let y;
let rest;
[x,y,...rest] = [1,2,3,4,5,6,7,8,9]; //  x=1,y=2, rest todo lo demas en un arreglo
console.log(x,y,rest); //Output:  1,2,[3,4,5,6,7,8,9];
// PARA SOLO TOMAR EN CUENTA ALGUNOS ELEMENTOS 

const arregloInicial = [1,2,3,4,5,6,7,8,9];
function remover(arreglo){
    const [,,,...arregloNuevo] = arreglo;   //nuevo Arreglo que no tome en cuenta los primeros 3 elementos pero si todos los demas
    return arregloNuevo;
}
const arregloFinal = remover(arregloInicial);
console.log(arregloFinal); //Output: [4,5,6,7,8,9]
