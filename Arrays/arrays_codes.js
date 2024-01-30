//1. **`push`:** Agrega uno o más elementos al final de un array.

   let fruits = ['apple', 'banana', 'orange'];
   fruits.push('grape');
   // Resultado: ['apple', 'banana', 'orange', 'grape']
   
//2. **`pop`:** Elimina el último elemento de un array.

   let fruits = ['apple', 'banana', 'orange'];
   fruits.pop();
   // Resultado: ['apple', 'banana']

//3. **`shift`:** Elimina el primer elemento de un array.

   let fruits = ['apple', 'banana', 'orange'];
   fruits.shift();
   // Resultado: ['banana', 'orange']

//4. **`unshift`:** Agrega uno o más elementos al principio de un array.

   let fruits = ['apple', 'banana', 'orange'];
   fruits.unshift('grape', 'kiwi');
   // Resultado: ['grape', 'kiwi', 'apple', 'banana', 'orange ']

//5. **`slice`:** Devuelve una porción del array especificada por índices de inicio y fin.

   let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
   let slicedFruits = fruits.slice(1, 4);
   // Resultado: ['banana', 'orange', 'grape']

//6. **`splice`:** Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.

   let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
   fruits.splice(2, 2, 'mango', 'pear');
   // Resultado: ['apple', 'banana', 'mango', 'pear', 'kiwi']

//7. **`indexOf`:** Devuelve el índice de la primera ocurrencia del elemento especificado en el array.

   let fruits = ['apple', 'banana', 'orange'];
   let index = fruits.indexOf('banana');
   // Resultado: 1


//8. **`forEach`:** Ejecuta una función proporcionada una vez por cada elemento en el array.

   let fruits = ['apple', 'banana', 'orange'];
   fruits.forEach(function(fruit) {
     console.log(fruit);
   });
   // Resultado: 'apple', 'banana', 'orange'

//9. **`concat`:** Combina dos o más arrays.

   let fruits1 = ['apple', 'banana'];
   let fruits2 = ['orange', 'kiwi'];
   let combinedFruits = fruits1.concat(fruits2);
   // Resultado: ['apple', 'banana', 'orange', 'kiwi']

//10. **`join`:** Convierte todos los elementos de un array en una cadena, concatenados por un separador.

    let fruits = ['apple', 'banana', 'orange'];
    let joinedString = fruits.join(', ');
    // Resultado: 'apple, banana, orange'

//11. **`reverse`:** Invierte el orden de los elementos en un array.

    let fruits = ['apple', 'banana', 'orange'];
    fruits.reverse();
    // Resultado: ['orange', 'banana', 'apple']

//12. **`filter`:** Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.

    let numbers = [1, 5, 10, 15, 20];
    let filteredNumbers = numbers.filter(function(number) {
      return number > 10;
    });
    // Resultado: [15, 20]

//13. **`map`:** Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.

    let numbers = [1, 2, 3];
    let squaredNumbers = numbers.map(function(number) {
      return number * number;
    });
    // Resultado: [1, 4, 9]

//14. **`reduce`:** Aplica una función acumuladora a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce(function(acc, current) {
      return acc + current;
    }, 0);
    // Resultado: 10
   
//15. **`every`:** Comprueba si todos los elementos en el array pasan la prueba implementada por la función proporcionada.
    let numbers = [2, 4, 6, 8];
    let allEven = numbers.every(function(number) {
      return number % 2 === 0;
    });
    // Resultado: true


