// La importación y exportación en JavaScript es una característica que permite modularizar el código y organizarlo de manera más eficiente. Esto facilita la reutilización de código y la construcción de aplicaciones más estructuradas. Aquí te explico detalladamente cómo funciona:

/* ### Exportar desde un archivo: */
		/* 1. **Exportar valores individuales:** */
		//Puedes exportar valores individuales, como variables, funciones o clases, utilizando la palabra clave `export`.
		// En archivo1.js

		// Exportar una variable
		export const nombre = 'Juan';

		// Exportar una función
		export function saludar() {
			console.log('¡Hola!');
		}

	/* 2. **Exportar por defecto:** */
		//Puedes exportar un solo valor por defecto utilizando `export default`.
		// En archivo2.js

		// Exportar una función por defecto
		export default function suma(a, b) {
			return a + b;
		}

/* ### Importar en otro archivo: */
	/* 1. **Importar valores individuales:** */
		//Puedes importar valores individuales utilizando `import { nombre, saludar } from './archivo1.js';`.
		// En otro archivo

		// Importar variables y funciones
		import { nombre, saludar } from './archivo1.js';
		console.log(nombre); // Juan
		saludar(); // ¡Hola!

	/* 2. **Importar valor por defecto:** */
		//Puedes importar el valor por defecto utilizando `import suma from './archivo2.js';`.
		// En otro archivo

		// Importar función por defecto
		import suma from './archivo2.js';
		console.log(suma(2, 3)); // 5

	/* 3. **Renombrar al importar:** */
		//Puedes renombrar valores al importarlos utilizando `import { nombre as nombreNuevo } from './archivo1.js';`.
		// En otro archivo

		// Renombrar variable al importar
		import { nombre as nombreNuevo } from './archivo1.js';
		console.log(nombreNuevo); // Juan

/* ### Notas adicionales: */
	// - Las importaciones y exportaciones solo funcionan en navegadores modernos o en entornos de ejecución de JavaScript como Node.js que admiten el estándar ECMAScript 6 (ES6) o versiones posteriores.
	// - Al exportar un valor por defecto, puedes darle cualquier nombre al importarlo en otro archivo.
	// - Es importante tener en cuenta las rutas relativas para importar archivos. Por ejemplo, `'./archivo1.js'` indica que el archivo está en el mismo directorio que el archivo actual.
	// - Puedes exportar e importar varios valores en la misma línea, separándolos por comas.
	// - También puedes exportar e importar todo un módulo utilizando `export * from './archivo1.js';` y `import * as modulo from './archivo1.js';`, respectivamente. Esto importará todos los valores exportados por el archivo dado y los agrupará en un objeto llamado `modulo`.
