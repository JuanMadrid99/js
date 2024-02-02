// metodo de los arreglos 
let numeros = ["primero","segundo","tercero"];
console.log(numeros);// Output: [ 'primero', 'segundo', 'tercero' ]
console.log(numeros[0]);// Output: Primero

/* arreglos multidimensional */
numeros[2]=[1,2];
/* [0][0] asi se manda a llamar un arreglo adentro de otro */
console.log(numeros[2][1]);// Output: 2
console.log(numeros);// Output: [ 'primero', 'segundo', [ 1, 2 ] ]

//1. **`push`:** Agrega uno o más elementos al final de un array.
let fruitsPUSH = ['apple', 'banana', 'orange'];
fruitsPUSH.push('grape');
console.log(fruitsPUSH);// Output: ['apple', 'banana', 'orange', 'grape']

//2. **`pop`:** Elimina el último elemento de un array.
let fruitsPOP = ['apple', 'banana', 'orange'];
fruitsPOP.pop();
console.log(fruitsPOP);// Output: ['apple', 'banana']

//3. **`shift`:** Elimina el primer elemento de un array.
let fruitsSHIFT = ['apple', 'banana', 'orange'];
fruitsSHIFT.shift();// Output: ['banana', 'orange']
console.log(fruitsSHIFT);

//4. **`unshift`:** Agrega uno o más elementos al principio de un array.
let fruitsUNSHIFT = ['apple', 'banana', 'orange'];
fruitsUNSHIFT.unshift('grape', 'kiwi');
console.log(fruitsUNSHIFT);// Output: ['grape', 'kiwi', 'apple', 'banana', 'orange ']

//5. **`slice`:** Devuelve una porción del array especificada por índices de inicio y fin.
let fruitsSLICE = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let slicedFruits = fruitsSLICE.slice(1, 4);
console.log(slicedFruits);// Output: ['banana', 'orange', 'grape']

//6. **`splice`:** Cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
let fruitsSPLICE = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruitsSPLICE.splice(2, 2, 'mango', 'pear');
console.log(fruitsSPLICE);// Output: ['apple', 'banana', 'mango', 'pear', 'kiwi']

//7. **`indexOf`:** Devuelve el índice de la primera ocurrencia del elemento especificado en el array.
let fruitsINDEXOF = ['apple', 'banana', 'orange'];
let index = fruitsINDEXOF.indexOf('banana'); 
console.log(index);// Resultado: 1

//8. **`forEach`:** Ejecuta una función proporcionada una vez por cada elemento en el array.
let fruitsFOREACH = ['apple', 'banana', 'orange'];
fruitsFOREACH.forEach(function(fruit) {
	console.log(fruit); // Output: 'apple', 'banana', 'orange'
});

//9. **`concat`:** Combina dos o más arrays.
let fruits1 = ['apple', 'banana'];
let fruits2 = ['orange', 'kiwi'];
let combinedFruits = fruits1.concat(fruits2);
	console.log(combinedFruits); //Output: ['apple', 'banana', 'orange', 'kiwi']

//10. **`join`:** Convierte todos los elementos de un array en una cadena, concatenados por un separador.
let fruitsJOIN = ['apple', 'banana', 'orange'];
let joinedString = fruitsJOIN.join(', ');
	console.log(joinedString); //Output: 'apple, banana, orange'

//11. **`reverse`:** Invierte el orden de los elementos en un array.
let fruitsREVERSE = ['apple', 'banana', 'orange'];
fruitsREVERSE.reverse(); 
console.log(fruitsREVERSE);// Output: ['orange', 'banana', 'apple']

//12. **`filter`:** Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
let numbersFILTER = [1, 5, 10, 15, 20];
let filteredNumbers = numbersFILTER.filter(function(number) {
	return number > 10;
});
 console.log(filteredNumbers); //Output: [15, 20]

//13. **`map`:** Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.
let numbersMAP = [1, 2, 3];
let squaredNumbers = numbersMAP.map(function(number) {
	return number * number; 
});
console.log(squaredNumbers);// Output: [1, 4, 9]

//14. **`reduce`:** Aplica una función acumuladora a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.
let numbersREDUCE = [1, 2, 3, 4];
let sum = numbersREDUCE.reduce(function(acc, current) {
	return acc + current; 
}, 0);
console.log(sum);// Output: 10

//15. **`every`:** Comprueba si todos los elementos en el array pasan la prueba implementada por la función proporcionada.
let numbersEVERY = [2, 4, 6, 8];
let allEven = numbersEVERY.every(function(number) {
	return number % 2 === 0; 
});
console.log(allEven);// Output: true

//16. `**Find**`: Devuelve el primer elemento que cumple una condición específica.
let numbersFIND = [2, 4, 6, 8];
const mayorQueTres = numbersFIND.find(function(numbers) {
	return numbers > 3;
	});
console.log(mayorQueTres);// Output: 4

