/* El operador ternario en  es una forma abreviada de escribir una declaración condicional `if...else`. Tiene la siguiente sintaxis:*/
	// condición ? expresión1 : expresión2
	//Si la `condición` es evaluada como verdadera (truthy), se devuelve `expresión1`.
	//Si la `condición` es evaluada como falsa (falsy), se devuelve `expresión2`.

/* ### Detalles importantes: */
	// 1. **Condición:** Puede ser cualquier expresión que se pueda evaluar como verdadera o falsa.
	//   Ejemplo: `a === b`, `x < 10`, `valor !== undefined`, etc.

	// 2. **Expresión1 y Expresión2:** Son los valores o expresiones que se devolverán dependiendo del resultado de la condición.
	//   Estas expresiones pueden ser simples (como un valor literal) o complejas (como una función o una expresión matemática).

	// ### Ejemplo:
		const edad = 18;
		const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
		console.log(mensaje); // Output: 'Eres mayor de edad'
	// En este ejemplo:
	//La condición `edad >= 18` se evalúa como verdadera porque `edad` es igual a 18.
	//Como la condición es verdadera, se devuelve la expresión `'Eres mayor de edad'`.

/* ### Uso múltiple: */
	//El operador ternario también puede ser anidado o utilizado en múltiples líneas:
		const resultado = condición1 ? expresión1 :
			condición2 ? expresión2 :
			condición3 ? expresión3 :
			expresiónPorDefecto;
	// En este caso, se evaluarán las condiciones en orden hasta encontrar la primera que sea verdadera, y se devolverá la expresión correspondiente a esa condición.

/* ### Uso de return con el operador ternario: */
	// En muchas ocasiones, el operador ternario se utiliza dentro de una función para determinar qué valor debe ser devuelto. En este caso, es importante usar return para devolver explícitamente el valor calculado por el operador ternario. Veamos un ejemplo:
	function esMayorDeEdad(edad) {
			return edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
	}
	console.log(esMayorDeEdad(19)); //Output: Eres mayor de edad
	// En este ejemplo, la función esMayorDeEdad utiliza el operador ternario para determinar si la edad proporcionada es mayor o igual a 18. Si la condición es verdadera, devuelve 'Eres mayor de edad'; de lo contrario, devuelve 'Eres menor de edad'. En ambos casos, la función utiliza return para devolver el resultado del operador ternario.

/* ### Beneficios: */
	//Ayuda a escribir código más conciso y legible, especialmente en casos simples de condicionales.
	//Puede ser utilizado en expresiones más complejas o en asignaciones de variables.

/* ### Consideraciones: */
	//Debes tener cuidado de no abusar de su uso, ya que en algunos casos puede hacer que el código sea menos legible.
	//Es importante que las expresiones `expresión1` y `expresión2` sean del mismo tipo o compatible entre sí, ya que el operador ternario devuelve un solo valor y no realiza conversión de tipos automáticamente.
