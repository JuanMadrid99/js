/* ### 1. **Creación de Objetos:** */
 // - **Objeto Literal:**
  let person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  //**Explicación:** Se crea un objeto `person` con propiedades `name`, `age` y `city`.

/* ### 2. **Acceso a Propiedades:** */
  console.log(person.name); //Output: John 
  // **Explicación:** Accede a la propiedad `name` del objeto `person` y muestra su valor.

/* ### 3. **Asignación de Propiedades:** */
  person.job = 'Engineer';
  //**Explicación:** Asigna una nueva propiedad `job` al objeto `person`.

/*  ### 4. **Eliminación de Propiedades:** */
  delete person.age;
  //**Explicación:** Elimina la propiedad `age` del objeto `person`.

/* ### 5. **Métodos de Objeto:** */
  let car = {
    brand: 'Toyota',
    start: function() {
      console.log('Engine started!'); //Output: Engine started!
    }
  };
  car.start();  
  //**Explicación:** Define un método `start` en el objeto `car` que imprime un mensaje cuando se llama.

/* ### 6. **Iteración sobre Propiedades:** */
  for (let key in person) {
    console.log(key + ': ' + person[key]); //output: name: John, city: New York, job: Engineer
  }
  //**Explicación:** Itera sobre todas las propiedades del objeto `person` e imprime sus claves y valores.

/* ### 7. **Método `Object.keys`:** */
  let keys = Object.keys(person);
  console.log(keys); //Output: ['name', 'job', 'city']
  //**Explicación:** Devuelve un array con las claves (propiedades) del objeto `person`.

/* ### 8. **Método `Object.values`:** */
  let values = Object.values(person);
  console.log(values); //Output: ['John', 'Engineer', 'New York']
  //**Explicación:** Devuelve un array con los valores de las propiedades del objeto `person`.

/* ### 9. **Método `Object.entries`:** */
  let entries = Object.entries(person);
  console.log(entries); //Output: [['name', 'John'], ['job', 'Engineer'], ['city', 'New York']]
  //**Explicación:** Devuelve un array de arrays con pares clave-valor del objeto `person`.

/* ### 10. **Herencia y Prototipos:** */
  function Animal(nickname) {
    this.name = nickname;
  }
  Animal.prototype.sayName = function() {
    console.log('My name is ' + this.name); //Output: My name is Whiskers
  };
  let cat = new Animal('Whiskers');
  cat.sayName();
  //**Explicación:** Define un constructor `Animal`, agrega un método al prototipo, y crea una instancia `cat` que hereda de `Animal`.

/* ### 11. **Object Destructuring:** */
  let {name : nombre, city } = person;
  console.log(nombre, city); //Output: John New York /* The declaration was marked as deprecated here. Osea de esta manera esta en desuso */
  //**Explicación:** Extrae propiedades específicas de un objeto en variables individuales.
  
  /* ### 12. **Object Spread Operator:** */
  let newPerson = { ...person, job: 'Developer' };
  console.log(newPerson); //Output: { name: 'John', city: 'New York', job: 'Developer' }
  //**Explicación:** Crea un nuevo objeto copiando todas las propiedades de `person` y sobrescribe la propiedad `job`.
  
/* ### 13. **`hasOwnProperty`:** */
  if (person.hasOwnProperty('name')) {
    console.log('Person has a name property.'); //Output: Person has a name property.
  }
  //**Explicación:** Verifica si el objeto `person` tiene la propiedad `name`.
  
/* ### 14. **`Object.defineProperty`:** */
  Object.defineProperty(person, 'gender', { //Objeto, propiedad nueva, descripcion
    value: 'Male', //El valor que obtiene
    writable: true, //Si es editable
    enumerable: true }); //Si esta propiedad no se establece, su valor por defecto es false
  console.log(person); //Output: { name: 'John', city: 'New York', job: 'Engineer', gender: 'Male' }
  //**Explicación:** Define una nueva propiedad en el objeto `person` con ciertas configuraciones.
  
/* ### 15. **Object Methods Shorthand:** */
  let utils = {
    add(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    }
  };
  console.log(utils.add(2, 3)); //Output: 5
  //**Explicación:** Define métodos en un objeto de manera abreviada utilizando la sintaxis de método.
  
/* ### 16. **`Object.freeze`:** */
  Object.freeze(person);
  person.age = 31; // No tiene efecto, ya que el objeto está congelado.
  //**Explicación:** Congela un objeto, impidiendo que se añadan, modifiquen o eliminen sus propiedades.
  
/* ### 17. **`Object.seal`:** */
  Object.seal(person);
  person.age = 31; // No se puede añadir una nueva propiedad, pero se pueden modificar las existentes.
  //**Explicación:** Sella un objeto, permitiendo la modificación de las propiedades existentes pero no la adición ni eliminación.
  
/* ### 18. **`Object.keys` en combinación con `map`:** */
  let upperCaseKeys = Object.keys(person).map(key => key.toUpperCase());
  console.log(upperCaseKeys); //Output: [ 'NAME', 'CITY', 'JOB', 'GENDER' ]
  //**Explicación:** Transforma las claves del objeto `person` a mayúsculas utilizando `Object.keys` y `map`.
  
/* ### 19. **JSON.stringify y JSON.parse:** */
  let personString = JSON.stringify(person); 
    console.log(personString); //Output: {"name":"John","city":"New York","job":"Engineer","gender":"Male"}
  let personCopy = JSON.parse(personString);
    console.log(personCopy); //output: { name: 'John', city: 'New York', job: 'Engineer', gender: 'Male' }
  //**Explicación:** Convierte un objeto a una cadena JSON y luego vuelve a convertirla a un objeto.
  
/* ### 20. **`Object.create`:** */
  let student = Object.create(person);
  student.major = 'Computer Science';
  console.log(student); //Output: { major: 'Computer Science' } ---  solo verás las propiedades que son propias de student y no las heredadas de su prototipo. Para ver todas las propiedades, incluidas las heredadas, puedes usar un bucle for...in.
  //**Explicación:** Crea un nuevo objeto `student` que hereda propiedades de `person`.
  
