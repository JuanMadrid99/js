var resultados = {
  1: "ana123",
  2: "juan321",
  3: "gustavo456",
  4: "pam654"
};
var miPerro = {
    "nombre" : "pepe",
    "raza" : "chihuahua",
    "apodo" : "nino", 
    "edad": 1,
    "color de pelo": "cafe con blanco", 
    "caracteristicas": ["alegre","cobarde"]
};
console.log(resultados[1]) //Output: ana123
console.log(miPerro.nombre); //Output: pepe
console.log(miPerro.raza); //Output: chihuahua
console.log(miPerro["color de pelo"]); //Output: cafe con blanco

const res = 2;
console.log(resultados[res]); //Output: juan321

miPerro["color de pelo"] = "blanco con manchas cafes";
console.log(miPerro["color de pelo"]); //Output: blanco con manchas cafes
console.log(miPerro["caracteristicas"]); //Output: [ 'alegre', 'cobarde' ] 

miPerro.caracteristicas.push("pequennio"); //agregar un nuevo elemento a la lista
console.log(miPerro["caracteristicas"]); //Output: [ 'alegre', 'cobarde', 'pequennio' ]

//agregar un nuevo elemento la objeto 
miPerro.ojos="cafes";
miPerro["higiene"] = "sucio";
console.log(miPerro["higiene"]); //Output: sucio

//eliminar un elemento en el objeto 
delete miPerro.higiene; console.log(miPerro['higiene']); //Output: undefined
delete miPerro["ojos"]; console.log(miPerro['ojos']); //Output: undefined

function datos(info,x){
  try {  
      var alumnos = {                   // [apellido,edad,estado civil]
        Didier: ["Morel",23,"Casado"],
        "Lauren": ["Romero",24,"Soltera"], 
        "Oscar": ["Perez",25,"Casado"],
        "Juan": "Madrid"    
      }
      if(x === undefined){
        return alumnos[info];
      }
      return alumnos[info][x];
  } catch (error) { 
  }
}

console.log(datos("Didier",0)); //Output: Morel
console.log(datos("Lauren",1)); //Output: 24
console.log(datos("Oscar")); //Output: [ 'Perez', 25, 'Casado' ]
console.log(datos("Juan")); //Output: Madrid
