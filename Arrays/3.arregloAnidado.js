/* ++++++++++++++++++++++++++++++++++++VERSION RESUMIDA++++++++++++++++++++++++++++++++++++ */
var numeros = [[10,2,13],[47,15,66],[17,18,99]];
var nombres = [["a","b","c"],["d","e","f"],["g","h","i"]];
var asce = [[1,2,3],[4,5,6],[7,8,9]];
const ordenarA = (array)=>{
    for(let j = 0; j < array.length; j++){
        for (let k = 0; k < array.length; k++) {
            let e1 = array[k]
            // console.log(e1);
            for (let l = 0; l < array.length; l++) {
                let e2 = array[k][l];
                // console.log(e2);
                if(array[k][l] < array[k][l+1]){
                    array[k][l] = array[k][l+1];
                    array[k][l+1] = e2;
                }
            }
        }
    }
    return array
}

console.log(ordenarA(asce)); //Output: [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]
console.log(ordenarA(numeros)); //Output: [ [ 13, 10, 2 ], [ 66, 47, 15 ], [ 99, 18, 17 ] ]
console.log(ordenarA(nombres)); //Output: [ [ 'c', 'b', 'a' ], [ 'f', 'e', 'd' ], [ 'i', 'h', 'g' ] ]

/* con esto ordeno los numeros sin importar en que sub arreglo en el que esten
var asce = [[1,2,3],[4,5,6],[7,8,9]];
function ordenarA (arreglo){
    for(let k=0;k<arreglo.length;k++){
        for(let i=0;i<arreglo.length;i++){
            for(let j=0;j<arreglo.length;j++){
                var cont = arreglo[i][j];
                if(arreglo[i][j]<arreglo[i][j+1]){
                    arreglo[i][j]=arreglo[i][j+1];
                    arreglo[i][j+1]=cont;
                }
            }
        }
    }
    // [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]
    for(let c=0;c<arreglo.length;c++){
        for(let a=0;a<arreglo.length-1;a++){
            for(let b=0;b<arreglo.length;b++){
                // console.log(arreglo[a][b]);    //a=0 b=0 === 3
                // console.log(arreglo[a+1][b]);  //a=1 b=0 === 6
                // console.log(arreglo[a][b]<arreglo[a+1][b]);  //3<6
                var cont2 = arreglo[a][b];
                if(arreglo[a][b] < arreglo[a+1][b]){    
                    arreglo[a][b]=arreglo[a+1][b];
                    arreglo[a+1][b]=cont2;
                }
            }
        }
    }    
    return arreglo;
}
console.log(ordenarA(asce)); 
 */
