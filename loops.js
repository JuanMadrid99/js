/*  Los ciclos en JavaScript permiten ejecutar una pieza de código repetidamente mientras se cumpla una condición específica.
 Hay varias formas de implementar ciclos en JavaScript, cada una con su propio propósito y características. */

/* 1. **Ciclo `for`:** */
	//El ciclo `for` se utiliza cuando se conoce de antemano el número de iteraciones que se deben realizar.
	for (let i = 0; i < 5; i++) {
		console.log(i); //Output: 0 1 2 3 4 
	}
	// - `let i = 0;`: Inicialización del contador.
	// - `i < 5;`: Condición de continuación.
	// - `i++`: Expresión de incremento.

/* 2. **Ciclo `while`:** */
	//El ciclo `while` se ejecuta mientras una condición especificada sea verdadera.
	let i = 0;
	while (i < 5) {
		console.log(i); //Output: 0 1 2 3 4 
		i++;
	}
	// - `let i = 0;`: Inicialización del contador.
	// - `i < 5;`: Condición de continuación.
	// - `i++;`: Incremento del contador.

/* 3. **Ciclo `do...while`:** */
	//Similar al ciclo `while`, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición.
	let j = 0;
	do {
		console.log(j); //Output: 0 1 2 3 4 
		j++;
	} while (j < 5);
	// - `do { ... }`: Bloque de código.
	// - `while (i < 5);`: Condición de continuación.

/* 4. **Ciclo `for...in`:** */
	//Se utiliza para recorrer todas las propiedades enumerables de un objeto.
	const persona = {
		nombre: 'Juan',
		edad: 30,
		ciudad: 'Madrid'
	};
	for (let propiedad in persona) {
		console.log(`${propiedad}: ${persona[propiedad]},`); //Output: ombre: Juan,	edad: 30,	ciudad: Madrid,
	}
	// - `let propiedad in persona`: Itera sobre todas las propiedades enumerables del objeto `persona`.

/* 5. **Ciclo `for...of`:** */
	//Se utiliza para recorrer elementos iterables como arreglos y cadenas de texto.
	const numeros = [1, 2, 3, 4, 5];
	for (let numero of numeros) {
		console.log(numero); //Output: 1 2 3 4 5
	}
	// - `let numero of numeros`: Itera sobre cada elemento del arreglo `numeros`.

/* 6. **Instrucciones de control (`break` y `continue`):** */
	// - `break`: Se utiliza para salir de un ciclo.
	// - `continue`: Se utiliza para saltar una iteración y continuar con la siguiente.
	for (let i = 0; i < 10; i++) {
		if (i === 3) {
			continue; // Salta la iteración actual si i es igual a 3
		}
		if (i === 7) {
			break; // Sale del ciclo si i es igual a 7
		}
		console.log(i); //Output: 0 1 2 3 4 5 6
	}
