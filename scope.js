/* El "scope" o alcance de las variables en JavaScript se refiere a la accesibilidad y visibilidad de una variable en diferentes partes del código. 
Comprender el scope es fundamental para escribir código JavaScript eficiente y evitar errores. */

/* 1. **Scope Global:** */
	//Las variables declaradas fuera de cualquier función tienen un alcance global y están disponibles en todo el programa.
	const globalVar = 10;
	function funcion1() {
		console.log(globalVar); // Se puede acceder a globalVar desde cualquier función
	}
	funcion1(); // Output: 10

/* 2. **Scope Local (o Funcional):** */
	//Las variables declaradas dentro de una función tienen un alcance local y solo están disponibles dentro de esa función.
  function funcion2() {
		const localVar = 20;
		console.log(localVar); // localVar solo está disponible dentro de la función funcion2
		}
  funcion2(); // Output: 20
  //console.log(localVar); // Error: localVar no está definida fuera de la función

/* 3. **Scope de Bloque:** */
	//A partir de ECMAScript 6 (ES6), las variables declaradas con `let` y `const` tienen un alcance de bloque, lo que significa que solo están disponibles dentro del bloque donde se declaran (por ejemplo, dentro de un `if`, `for`, `while`, etc.).
  if (true) {
    let blockVar = 30;
    console.log(blockVar); // blockVar solo está disponible dentro de este bloque if
	}
	//console.log(blockVar); // Error: blockVar no está definida fuera del bloque if

/* 4. **Hoisting:** */
	//JavaScript "eleva" las declaraciones de variables (`var`) y funciones al principio de su ámbito. Sin embargo, solo la declaración se eleva, no la inicialización o asignación.
	console.log(hoistedVar); // Output: undefined
	var hoistedVar = 40;
//    Esto es equivalente a:
  var hoistedVar;
  console.log(hoistedVar); // Output: undefined
  hoistedVar = 40;

/* 5. **Closures:** */
	//Un closure es una función interna que tiene acceso a las variables de su función exterior, incluso después de que la función exterior haya terminado de ejecutarse.
	function externa() {
		const exteriorVar = 50;
		function interna() {
			console.log(exteriorVar); // interna tiene acceso a exteriorVar
		}
	return interna;
	}
	const closure = externa();
	closure(); // Output: 50
	//La función interna `interna()` forma un cierre y tiene acceso a la variable `exteriorVar` de su ámbito externo (`externa()`).
	//Los closures son una poderosa herramienta para crear funciones que encapsulan comportamientos y datos.
///////////////////////////////////////////////////////////////////////////
/* 6. **Scope Encadenado (Nested Scope):** */
	//Se refiere a la capacidad de una función interna de acceder a las variables de su función externa.
	function externa() {
		const exteriorVar = 60;
		function interna() {
			console.log(exteriorVar); // interna tiene acceso a exteriorVar de su función externa
		}
		interna();
	}
	externa(); // Output: 60
	//Aquí, la función `interna()` tiene acceso a la variable `exteriorVar` de su función externa `externa()`.

/* 7. **Scope Lexical (También conocido como Static Scope):** */
	//Se refiere a cómo se resuelve el scope en tiempo de compilación, basado en la estructura física del código.
	const exteriorVar = 70;
	function externa() {
		const exteriorVar = 80;
		function interna() {
			console.log(exteriorVar); // interna tiene acceso a exteriorVar de su función externa (no al scope global)
		}
		interna();
	}
	externa(); // Output: 80
	//En este ejemplo, la función `interna()` accede a la variable `exteriorVar` de su función externa `externa()`, no al `exteriorVar` del scope global.

/* 8. **Shadowing:** */
	//Ocurre cuando una variable local en un ámbito interno tiene el mismo nombre que una variable en un ámbito externo, lo que oculta la variable externa dentro del ámbito interno.
	const variable = 'Exterior';
	function funcion() {
		const variable = 'Interior';
		console.log(variable); // variable se refiere a la variable local en este ámbito
	}
	funcion(); // Output: 'Interior'

/* 9. **IIFE (Immediately Invoked Function Expression):** */
	//Una expresión de función invocada inmediatamente que se ejecuta inmediatamente después de ser definida.
	(function() {
		const iifeVar = 90;
		console.log(iifeVar); // Output: 90
	})();
	//Las variables declaradas dentro de un IIFE tienen un scope local y no afectan al scope global.

/* 10. **Uso de `var`, `let` y `const` para definir variables:** */
	//`var`: Tiene scope de función.
	//`let`: Tiene scope de bloque.
	//`const`: También tiene scope de bloque y no se puede reasignar.
	function ejemplo() {
		if (true) {
			var varVar = 100;
			let letVar = 110;
			const constVar = 120;
		}
		console.log(varVar); // Output: 100
		//console.log(letVar); // Error: letVar no está definida fuera del bloque
		//console.log(constVar); // Error: constVar no está definida fuera del bloque
	}
	ejemplo();
