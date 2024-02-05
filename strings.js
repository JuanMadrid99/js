/* 1. **`length`:** */
  //Devuelve la longitud de una cadena.
  const textoHM = 'Hola, mundo!';
  console.log(textoHM.length); //Output: 12   

/* 2. **`concat()`:** */
  //Combina dos o más cadenas y devuelve una nueva cadena.
  const cadena1 = 'Hola';
  const cadena2 = 'Mundo';
  const resultado = cadena1.concat(', ', cadena2);
  console.log(resultado); //Output: Hola, Mundo

/* 3. **`toUpperCase()`:** */
  //Convierte la cadena a mayúsculas.
  const minusculasU = 'hola';
  const mayusculasU = minusculasU.toUpperCase();
  console.log(mayusculasU); //Output: HOLA

/* 4. **`toLowerCase()`:** */
  //Convierte la cadena a minúsculas.
  const mayusculasL = 'HOLA';
  const minusculasL = mayusculasL.toLowerCase();
  console.log(minusculasL); //Output: hola

/* 5. **`charAt()`:** */
  //Devuelve el carácter en la posición especificada.
  const palabra = 'JavaScript';
  console.log(palabra.charAt(4)); //Output: S -- empieza a contar desde 0

/* 6. **`indexOf()`:** */
  //Devuelve la posición de la primera ocurrencia de un valor especificado.
  const fraseI = 'La vida es bella';
  console.log(fraseI.indexOf('vida')); //Output: 3 -- empieza a contar desde 0

/* 7. **`substring()`:** */
  //Extrae los caracteres desde el índice especificado hasta el final de la cadena.
  const textoS = 'Programación';
  console.log(textoS.substring(0, 4)); //Output: Prog

/* 8. **`replace()`:** */
  //Reemplaza una cadena con otra.
  const mensajeR = 'Hola Mundo';
  const nuevoMensajeR = mensajeR.replace('Mundo', 'JavaScript');
  console.log(nuevoMensajeR); //Output: Hola JavaScript

// 9. **`split()`:**
  //Divide una cadena en un array de subcadenas según un separador.
  const fraseS = 'Esto es una prueba';
  const palabras = fraseS.split(' ');
  console.log(palabras); //Output: ['Esto', 'es', 'una', 'prueba']

/* 10. **`trim()`:** */
  // Elimina los espacios en blanco al principio y al final de una cadena.
  const espacios = '   Hola   ';
  const sinEspacios = espacios.trim();
  console.log(sinEspacios); //Output: Hola

/* 11. **`startsWith()`:** */
  // Verifica si una cadena comienza con los caracteres de otra cadena.
  const textoStart = 'JavaScript es poderoso';
  console.log(textoStart.startsWith('JavaScript')); //Output: true

/* 12. **`endsWith()`:** */
  // Verifica si una cadena termina con los caracteres de otra cadena.
  const textoEnd = 'JavaScript es poderoso';
  console.log(textoEnd.endsWith('poderoso')); //Output: true

/* 13. **`includes()`:** */
  // Verifica si una cadena contiene los caracteres de otra cadena.
  const textoIn = 'JavaScript es poderoso';
  console.log(textoIn.includes('es')); //Output: true

/* 14. **`slice()`:** */
  // Extrae una porción de una cadena y devuelve una nueva cadena.
  const textoSl = 'JavaScript';
  console.log(textoSl.slice(0, 4)); //Output: Java 

/* 16. **`repeat()`:** */
  //Retorna una nueva cadena que consiste en la concatenación de la cadena original repetida un número determinado de veces.
  const textoRe = 'Hola ';
  console.log(textoRe.repeat(3)); //Output: Hola Hola Hola  

/* 17. **`padStart()` y `padEnd()`:** */
  // Añaden espacios en blanco al principio o al final de una cadena para que tenga una longitud específica.
  const numeroPad = '42';
  console.log(numeroPad.padStart(5, '0')); //Output: 00042 
  console.log(numeroPad.padEnd(5, '0')); //Output: 42000 

/* 19. **`valueOf()` y `toString()`:** */
  // Devuelven la representación de cadena de un objeto.
  const numero = 42;
  const cadena = numero.toString();
  console.log(cadena); //Output: '42'

/* Recuerda que la documentación oficial de MDN Web Docs es una excelente fuente de referencia para obtener información más detallada sobre estos métodos: [MDN Web Docs - String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String). */
