var contactos=[
    {"nombre": "Juan", "apellido": "Madrid", "numeros": "201200071", "gustos": ['Peliculas','Juegos']},
    {"nombre": "Nova", "apellido": "Nav", "numeros": "2342355345", "gustos": ['Pizza','Programacion']},
    {"nombre": "Harry", "apellido": "Potter", "numeros": "45645643234", "gustos": ['Magia','Hechizeria']}

];
function buscarPerfil(Nombre,valor){
    for (let i = 0; i < contactos.length; i++) {
        if(contactos[i].nombre===Nombre){
            return contactos[i][valor] || 'EL valor que busca no existe';
        }
        
    }

    return "No se encontro dicha persona";
}
console.log(buscarPerfil("Juan","gustos")); //Output: [ 'Peliculas', 'Juegos' ]

function iterarContacto(){
    for (let persona = 0; persona < contactos.length; persona++) { 
        for (let valor in contactos[persona]) { 
            console.log(`${valor} : ${contactos[persona][valor]}`);
        }
        console.log(`\n`);
    }
}
iterarContacto()
console.log(buscarPerfil("Juan","sangre")); //Output: EL valor que busca no existe
console.log(buscarPerfil("Miranda","gustos")); //Output: No se encontro dicha persona
