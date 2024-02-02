/*                           ARREGLO CON OBJETOS ADENTRO */
var especiales =[    /* especiales es un ARREGLO que CONTIENE OBJETOS */
{     /* elemento 0 del arreglo de especiales */
  "local": "pizza hut", 
  "tipo": ['grande','peperoni'],
  "para llevar": false
},
{     /* elemento 1 del arreglo especiales */
  "local": "dominus pizza",
  "tipo": ['mediano','jamon'],
  "para llevar": true
}
];
console.log(especiales[0]); //Output: {local: 'pizza hut',tipo: [ 'grande', 'peperoni' ],'para llevar': false}
console.log(especiales[0].tipo); //Output: [ 'grande', 'peperoni' ]
console.log(especiales[0]["tipo"]); //Output: [ 'grande', 'peperoni' ]
console.log(especiales[0].tipo[0]); //Output: grande
console.log(especiales[0]["tipo"][0]); //Output: grande

/*                             OBJETOS ANIDADOS */
var para = "ingredientes";
var receta = {
  "nombre": "pizza",
  "ingredientes":{
    "masa":{"harina":"100grs",
            "sal": "100mg",
            "agua":"50taza"},
    "salsa":{"ketchup": "10grs",
            "azucar": "5cucharadas",
            "sal":"2gr"}
    },
  "fria": true  
};
console.log(receta); //Output: Todo objeto recetas
console.log(receta.ingredientes); //Output: {masa: { harina: '100grs', sal: '100mg', agua: '50taza' },salsa: { ketchup: '10grs', azucar: '5cucharadas', sal: '2gr' }}
console.log(receta.ingredientes.masa); //Output: { harina: '100grs', sal: '100mg', agua: '50taza' }
console.log(receta.ingredientes.masa.agua); //Output: 50taza
console.log(receta["ingredientes"]["masa"]["agua"]); //Output: 50taza

