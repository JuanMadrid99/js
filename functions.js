// En JavaScript, hay varios tipos de funciones, cada una con su propio propósito y forma de ser utilizada. Aquí están los principales tipos de funciones en JavaScript, junto con ejemplos:

/* 1. **Declaración de Funciones:** */
  //Se define mediante la palabra clave `function`.      
  function suma(a, b) {
    return a + b;
  }
  console.log(suma(3, 5)); //Output: 8

/* 2. **Expresión de Funciones:** */
  //Se asigna a una variable o una propiedad de un objeto.
  const resta = function(a, b) {
    return a - b;
  };
  console.log(resta(8, 3)); //Output: 5

/* 3. **Funciones Anónimas:** */
  //Funciones sin nombre, a menudo utilizadas en expresiones de funciones.
  const multiplicar = function(a, b) {
  return a * b;
  };
  console.log(multiplicar(4, 6)); //Output: 24  

/* 4. **Funciones Flecha (Arrow Functions):** */
  //Sintaxis más corta introducida en ECMAScript 6 (ES6).  
  const cuadrado = (x) => x * x;
  console.log(cuadrado(3)); //Output: 9
      
/* 5. **Funciones como Parámetros (Callback Functions):** */
  //Se pasan como argumentos a otras funciones y se ejecutan después de algún evento.     
  function operacion(a, b, callback) {
    return callback(a, b); 
  }
  const resultado = operacion(10, 5, suma);
  console.log(resultado); //Output: 15     

/* 6. **Funciones Autoejecutables (Immediately Invoked Function Expressions - IIFE):** */
  //Se ejecutan inmediatamente después de ser definidas.      
  (function() {
    console.log('Esta función se ejecuta inmediatamente.');
  })();

/* 7. **Funciones Constructoras:** */
  //Utilizadas para crear objetos con el operador `new`. -- Se debe pasar a clases 
  function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  const persona1 = new Persona('Alice', 25);
  console.log(persona1); //Output: Persona { nombre: 'Alice', edad: 25 }

/* 8. **Métodos de Funciones:** */
  //Funciones asociadas a objetos y se llaman métodos cuando se invocan en ese objeto.
  const objeto = {
    propiedad: 'Hola',
    metodo: function() {
      console.log(this.propiedad);
    }
  };
  objeto.metodo(); //Output: Hola
      
/* 9. **Funciones Generadoras:** */
  //Permiten pausar y reanudar su ejecución.
  function* contador() {
    for (let i = 0; i < 3; i++) {
      yield i; //La palabra clave yield se utiliza en funciones generadoras para pausar la ejecución de la función y devolver un valor. 
    }
  }
  // Primera llamada a Next()
  const gen = contador()
  const primeraIteracion = gen.next(); //next() hace avanzar la ejecucion
  console.log(primeraIteracion.value); //Output: 0
  console.log(primeraIteracion.done);  //Output: false
  // Segunda llamada a next()
  const segundaIteracion = gen.next();
  console.log(segundaIteracion.value); //Output: 1
  console.log(segundaIteracion.done);  //Output: false
  // Tercera llamada a next()
  const terceraIteracion = gen.next();
  console.log(terceraIteracion.value); //Output: 2
  console.log(terceraIteracion.done);  //Output: false
  // Cuarta llamada a next()
  const cuartaIteracion = gen.next();
  console.log(cuartaIteracion.value); //Output: undefined -- dado que el for es hasta menos de 3 ahi llegara el yield
  console.log(cuartaIteracion.done);  //Output: true

/* 10. **Funciones de Orden Superior (Higher-Order Functions):** */
  //Son funciones que aceptan otras funciones como argumentos y/o devuelven funciones.
  function operacion(a, b, callback) {
    return callback(a, b);
  }
  const multiplicacion = (x, y) => x * y;
  const producto = operacion(10, 5, multiplicacion);
  console.log(producto); //Output: 50

/* 11. **Funciones Recursivas:** */
  //Son funciones que se llaman a sí mismas.
  function factorial(n) {
    if (n <= 1) {
      return 1;} 
    else {
      return n * factorial(n - 1);}
  }
  console.log(factorial(5)); //Output: 120

/* 12. **Cierres (Closures):** */
  //Funciones que tienen acceso a variables de su ámbito padre, incluso después de que el ámbito padre ha terminado su ejecución.
  function crearContador() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    };
  }
  const contadorcreado = crearContador();
  contadorcreado(); //Output: 1
  contadorcreado(); //Output: 2

  
/* 13. **Currying:** */
  //Transformar una función con múltiples argumentos en una secuencia de funciones que toman un solo argumento.
  function division(a) {
    return function(b) {
      return a / b;
    };
  }
  const diviCon5 = division(10);
  console.log(diviCon5(2)); //Output: 5

/* 14. **Funciones Asíncronas:** */
  //Introducidas con ECMAScript 2017 (ES8), permiten trabajar con operaciones asíncronas de manera más sencilla utilizando `async` y `await`.
  async function obtenerDatos() {
    let respuesta = await fetch('https://api.example.com/data');
    let datos = await respuesta.json();
    console.log(datos);
  }
  obtenerDatos();
