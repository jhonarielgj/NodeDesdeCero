// Destructuración de objetos

const deadpool = {
  nombre: "Wade",
  apellido: "Wiston",
  poder: "Regeneración",
  getNombre: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  //   Otra forma
  getNombre2() {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(deadpool.getNombre()); //Wade Wiston
console.log(deadpool.getNombre2()); //Wade Wiston

// Sin destructuring
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(nombre, apellido, poder);  //Wade Wiston Regeneración

// Con destructuring y dando valor predeterminado
const { nombre, apellido, poder, edad = 0 } = deadpool;
console.log(nombre, apellido, poder, edad); //Wade Wiston Regeneración 0

//  Destructuring directamente en los argumentos de la función
function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
  console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool); //Wade Wiston Regeneración 0

const heroes = ["Deadpool", "Superman", "Batman"];

const H1 = heroes[0];
const H2 = heroes[1];
const H3 = heroes[2];

console.log(H1, H2, H3); //Deadpool Superman Batman

// Destructuring de un arreglo

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3); //Deadpool Superman Batman

// Si no quiero traer todos los elementos del arreglo

const [, , n3] = heroes;

console.log(n3); //Batman
