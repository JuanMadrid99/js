//En JavaScript, existen varios tipos de datos que se utilizan para almacenar y manipular información.

/* 1. **Tipos de Datos Primitivos:** */
	//**Number (Número):** Representa valores numéricos, enteros o de punto flotante.		
  let numeroEntero = 10;
  let numeroDecimal = 3.14;

	//**String (Cadena de Texto):** Representa una secuencia de caracteres, encerrados entre comillas simples ('') o dobles ("").
	let texto = 'Hola, mundo!';

	//**Boolean (Booleano):** Representa un valor lógico que puede ser verdadero (true) o falso (false).
	let esVerdadero = true;
	let esFalso = false;

	//**Undefined:** Representa un valor no definido. Se asigna automáticamente a las variables que se han declarado pero no se les ha asignado ningún valor.
	let variableNoDefinida;

	//**Null:** Representa la ausencia intencional de cualquier valor o referencia a un objeto.
	let valorNulo = null;

	//**Symbol (Símbolo):** Introducido en ECMAScript 6 (ES6), representa un identificador único e inmutable.
	let simbolo = Symbol('descripcion');

/* 2. **Tipos de Datos Compuestos:** */
	//**Object (Objeto):** Representa una colección de pares de clave-valor.
	let persona = {
		nombre: 'Juan',
		edad: 30,
		ciudad: 'Madrid'
	};

	//**Array (Arreglo):** Representa una colección ordenada de elementos.
	let numeros = [1, 2, 3, 4, 5];

/* 3. **Tipos de Datos Especiales:** */
	//**Function (Función):** Representa una función en JavaScript.
	function sumar(a, b) {
		return a + b;
	}

	//**Date (Fecha):** Representa una fecha y hora específicas.
	let fechaActual = new Date();
////
/* 4. **Tipos de Datos Estructurados:** */
	//**Map (Mapa):** Estructura de datos que almacena pares clave-valor donde las claves pueden ser de cualquier tipo de dato.
	let mapa = new Map();
	mapa.set('nombre', 'Juan');
	mapa.set('edad', 30);
	console.log(mapa); //Output: Map(2) { 'nombre' => 'Juan', 'edad' => 30 }

	//**Set (Conjunto):** Estructura de datos que almacena valores únicos de cualquier tipo de dato.
	let conjunto = new Set();
	conjunto.add(1);
	conjunto.add(2);
	conjunto.add(3);


/* 5. **Tipos de Datos de JavaScript del Entorno del Navegador:** */
	//**HTMLElement (Elemento HTML):** Representa un elemento HTML en el DOM.
	/* let boton = document.querySelector('button');

	//**Event (Evento):** Representa un evento que ocurre en el DOM.
	boton.addEventListener('click', function() {
		console.log('El botón ha sido clickeado');
	}); */
	//funciona dentro de una ejecucion de navegador web

/* 6. **Tipos de Datos Avanzados:** */
	//**RegExp (Expresión Regular):** Representa un patrón de búsqueda de texto.
	let expresionRegular = /JavaScript/;
	console.log(expresionRegular); //Output: /JavaScript/

	//**BigInt:** Introducido en ECMAScript 2020, representa enteros de longitud arbitraria.
	let numeroGrande = 1234567890123456789012345678901234567890n;
	console.log(numeroGrande); //Output: 1234567890123456789012345678901234567890n

/* 7. **Tipos de Datos de ECMAScript 6 (ES6):** */
	//**Symbol:** Introducido anteriormente, se utiliza para crear identificadores únicos.
	let simbolo2 = Symbol('descripcion');
	console.log(simbolo2); //Output: Symbol(descripcion)

	//**Promise (Promesa):** Representa el resultado eventual de una operación asincrónica.
	let promesa = new Promise(function(resolve, reject) {
	 // Operación asincrónica
		resolve('Éxito');
	});

	
