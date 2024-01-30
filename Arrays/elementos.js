Aparte de los arrays, JavaScript ofrece varias estructuras de datos y tipos de datos que puedes utilizar para almacenar y manipular información. Aquí tienes algunos de los más comunes:

//1. **Objetos (`Object`):** Los objetos permiten almacenar datos en pares clave-valor. Son utilizados para representar entidades y sus propiedades.

   let person = {
     name: 'John',
     age: 30,
     city: 'New York'
   };

//2. **Cadenas de Texto (`String`):** Representan secuencias de caracteres y son inmutables.

   let greeting = 'Hello, World!';
   

//3. **Números (`Number`):** Representan valores numéricos.

   let count = 42;   

//4. **Booleanos (`Boolean`):** Representan valores de verdadero (`true`) o falso (`false`).

   let isLogged = true;   

//5. **Undefined (`undefined`):** Indica que una variable no ha sido asignada o que no tiene un valor definido.

   let variableUndefined;   

//6. **Null (`null`):** Representa la ausencia intencionada de cualquier objeto o valor primitivo.

   let variableNull = null;   

//7. **Funciones (`Function`):** Permiten definir bloques de código que pueden ser ejecutados repetidamente.

   function greet(name) {
     return 'Hello, ' + name + '!';
   }
   
//8. **Mapas (`Map`):** Colección de pares clave-valor que puede contener cualquier tipo de dato como clave o valor.

   let myMap = new Map();
   myMap.set('key', 'value');
   
//9. **Conjuntos (`Set`):** Colección de valores únicos.

   let mySet = new Set();
   mySet.add(1);

//1. **Iteradores (`Iterator`) y Iterables (`Iterable`):** JavaScript tiene soporte para la iteración a través de objetos iterables utilizando bucles `for...of` y el protocolo de iteradores.
  
let iterable = [1, 2, 3];
    for (let value of iterable) {
      console.log(value);
    }

//2. **Generadores (`Generator`):** Permiten la creación de funciones que pueden ser pausadas y luego reanudadas, lo que es útil para la generación de secuencias de valores.

    function* generateSequence() {
      yield 1;
      yield 2;
      yield 3;
    }

    let generator = generateSequence();
    console.log(generator.next().value); // 1

//3. **Expresiones Regulares (`RegExp`):** Permiten buscar y manipular patrones de texto.

    let pattern = /ab+c/;
    let result = pattern.test('abbbc');
    console.log(result); // true

//4. **Closures:** Un cierre (closure) permite que una función acceda a variables en su ámbito externo, incluso después de que la función haya terminado de ejecutarse.

    function outerFunction() {
      let outerVariable = 'I am outer!';
      function innerFunction() {
        console.log(outerVariable);
      }
      return innerFunction;
    }

    let closureFunction = outerFunction();
    closureFunction(); // Imprime 'I am outer!'

//5. **Promesas (`Promise`):** Proporcionan una forma de manejar operaciones asincrónicas y se utilizan comúnmente en situaciones como llamadas a APIs.

    let myPromise = new Promise((resolve, reject) => {
      // ... operación asincrónica
      if (operationSuccessful) {
        resolve('¡Éxito!');
      } else {
        reject('Error');
      }
    });

    myPromise.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });

//6. **Módulos (`import` y `export`):** Permite organizar el código en módulos para facilitar su reutilización y mantenimiento.

    // En un archivo llamado 'math.js'
    export function add(a, b) {
      return a + b;
    }

    // En otro archivo
    import { add } from './math';
    console.log(add(2, 3)); // 5
