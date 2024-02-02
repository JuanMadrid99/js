/* Ejercicio de code camp en espanol */
/*
Tenemos un objeto que representa parte de una coleccion 
de albunes musicales.
Cada albun tien un numero de identificacion unico (id)
asociado a sus propiedades.
No todos los albunes tienen la informacion completa.
*/
var Discos = {
    7853:{
        "TituloDelAlbum": "Bee Gees Greastes",
        "Artista": "Bee Gees",
        "Canciones": ["Stayin' Alive"]
    },
    5439:{
        "TituloDelAlbum": "ABBA GOLD",
    }
};
/* Define una funcion actualizarDiscos que tome los siguientes paramentros:
-Discos (El objeto que representa la coleccion de discos)
-id
-propiedad (artista o cancion)
-valor   


*/

function actualizarDiscos(discos,id,propiedad,valor=""){  
    if(valor===""){   /* (1) */
    delete discos[id][propiedad];
}
    else if(propiedad==='Canciones'){          /* (2) */
    discos[id][propiedad]=discos[id][propiedad] || [];// (3)  /* si el valor esta definido se mantiene igual, si es (undefinided) pasa a ser el valor definido en este caso []  */
    discos[id][propiedad].push(valor);
    }
    else{
        discos[id][propiedad] = valor; 
    }
};
//Disco, id, propiedad, valor
//(1)-Si valor es una cadena vacia elimina la propiedad del album coreespondinte
// console.log(Discos[7853]);
actualizarDiscos(Discos,7853,"Artista");
// console.log(Discos[7853]); //Funciona

// (2)-Si propiedad es 'canciones', pero el albun no tiene una propiedad llamada 'canciones', crea un arreglo vacio y agrega 'valor' a ese arreglo. 
// console.log(Discos[5439]);
actualizarDiscos(Discos,5439,"Canciones","Lay all your love on me");
// console.log(Discos[5439]); //Funciona

// (3)-si propiedad es 'canciones' y valor no es una cadena vacia, agregar valor al final de arreglo de canciones del album
// console.log(Discos[7853]);
actualizarDiscos(Discos,7853,"Canciones","you win again")
// console.log(Discos[7853]); //Funciona

//(4)-Si 'valor' no es una cadena vacia y 'propiedad' no es igual a 'canciones', asigna el valor del parametro 'valor' a la propiedad, Si la propiedad no existe, debes crearla y asignar este valor
// console.log(Discos[5439]);
actualizarDiscos(Discos,5439,"Artista","ABBA")
// console.log(Discos[5439]); //Funciona
