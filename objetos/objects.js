/* Los objetos en JavaScript son estructuras de datos fundamentales y versátiles que permiten almacenar y organizar información mediante pares clave-valor. 
Pueden contener valores de cualquier tipo, incluyendo números, cadenas, funciones y otros objetos. 
Los objetos son una parte esencial del lenguaje JavaScript y se utilizan en una amplia variedad de situaciones. 
Aquí tienes una detallada explicación de los objetos en JavaScript y sus utilidades: */

/* ### Creación de Objetos: */

  // 1. **Sintaxis Literal:**
  let valor1 = "valor1"; let valor2 = "valor2"
  const miObjeto = {
    clave1: valor1,
    clave2: valor2,
    // ...
  };

  // 2. **Constructor Object:**
  const otroObjeto = new Object();
  otroObjeto.clave1 = valor1;
  otroObjeto.clave2 = valor2;
  // ...

/* ### Acceso a Propiedades: */
  console.log(miObjeto.clave1); // Acceso mediante notación de punto
  console.log(miObjeto["clave2"]); // Acceso mediante notación de corchetes

/*  ### Métodos Útiles: */

  // #### 1. **Object.keys():**
  // Devuelve un array con las claves del objeto.
  const claves = Object.keys(miObjeto);
  console.log(claves); //Output: ["clave1", "clave2"]

  // #### 2. **Object.values():** 
  // Devuelve un array con los valores del objeto.
  const valores = Object.values(miObjeto);
  console.log(valores); //Output: [valor1, valor2]
  
  // #### 3. **Object.entries():**
  // Devuelve un array de arrays, donde cada subarray tiene la forma `[clave, valor]`. 
  const entradas = Object.entries(miObjeto);
  console.log(entradas); //Output: [["clave1", valor1], ["clave2", valor2]]
  
/* ### Iteración a través de Propiedades: */

  // #### 1. **for...in:**
  // Itera sobre las claves del objeto. 
  for (let clave in miObjeto) {
    console.log(clave, miObjeto[clave]); //Output: clave1 valor1 / clave2 valor2
  }

/* ### Uso de Objetos en Práctica: */

  // #### 1. **Representación de Datos:**
  // Los objetos son ideales para representar entidades y sus atributos.
  const persona = {
    nombre: "Juan",
    edad: 24,
    ciudad: "SPS",
    saludar: function(apellido) {
      return "Hola, soy " + this.nombre + apellido; 
      //console.log("Hola, soy " + this.nombre + apellido);
    }
  };
  console.log(persona.saludar("Madrid")); //Output: Hola, soy JuanMadrid
  //persona.saludar("Madrid")

  // #### 2. **Organización de Código:**
  // Los objetos pueden ser utilizados para organizar código de manera estructurada.
  const utilidades = {
    suma: function(a, b) {
      return a + b;
    },
    resta: function(a, b) {
      return a - b;
    }
  };
  console.log(utilidades.suma(5, 3)); //Output: 8
  
  // #### 3. **Creación de Instancias:**
  // Los objetos pueden ser usados como prototipos para crear instancias.
  function Animal(nombre) { //parecido a una clase
    this.nombre = nombre;
  }
  const perro = new Animal("Fido");
  console.log(perro.nombre); //Output: Fido
  
/*  ### Objetos y JSON: */

  // #### 1. **Serialización a JSON:**
  const Juansho = {
    nombre: "Juan",
    edad: 24,
    ciudad: "SPS"
  };
  const json = JSON.stringify(Juansho);
  console.log(json); //Output: {"nombre":"Juan","edad":24,"ciudad":"SPS"}
  
  // #### 2. **Deserialización desde JSON:**
  const jsonString = '{"nombre":"Juan","edad":24,"ciudad":"SPS"}';
  const objetoDesdeJson = JSON.parse(jsonString);
  console.log(objetoDesdeJson); //Output: { nombre: 'Juan', edad: 24, ciudad: 'SPS' }
  
/* En resumen, los objetos en JavaScript son fundamentales para organizar y representar datos de manera estructurada. 
Su flexibilidad y versatilidad hacen que sean una herramienta clave en el desarrollo web y la programación en JavaScript. 
Desde la representación de entidades hasta la organización de código, los objetos desempeñan un papel crucial en el ecosistema JavaScript. */
