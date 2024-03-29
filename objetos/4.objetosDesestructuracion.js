/* DESESTRUCTURALIZACION TOMA LOS VALORES DEL OBJETO CON EL MISMO NOMBRE DE LOS ARGUMENTOS DADOS  */
const usuario = {
    edad: 23,
    nombre: "juan",
    apellido : "madrid",
    "gustos generales": {
        musica: "indie",
        pelicula: "sci-fi"
    }
}
const {edad,nombre,apellido} = usuario; //Queda con el mismo nombre de como se fue asignado
console.log(edad,nombre,apellido); //Output: 23 juan madrid

const {"gustos generales": {musica: generoMusical, pelicula}} = usuario;
console.log(generoMusical); //Output: indie

// con funcion flecha 
const datos = ({nombre,edad}) => { 
    return `${nombre} con ${edad}`;
}
console.log(datos(usuario)); //Output: juan con 23
