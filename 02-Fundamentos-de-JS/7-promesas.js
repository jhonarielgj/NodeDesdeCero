// Código base de callback-hell.js

const empleados = [
  {
    id: 1,
    nombre: "Jhon",
  },
  {
    id: 2,
    nombre: "Andres",
  },
  {
    id: 3,
    nombre: "Lala",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

/*const getEmpleado = (id) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  // Creación de una promesa
  const promesa = new Promise((resolve, reject) => {
    //Cuerpo de la promesa
    if (empleado) {
      resolve(empleado);
    } else {
      reject(`El empleado con id ${id} no exite`);
    }
  });

  return promesa;
};*/

// La misma función pero optimizada
const getEmpleado = (id) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  // Creación de una promesa
  return new Promise((resolve, reject) => {
    //Cuerpo de la promesa
    // Forma abreviada de un if-the-else: (parámetro) ? verdadero : falso
    empleado ? resolve(empleado) : reject(`El empleado con id ${id} no exite`);
  });
};

const getSalario = (id) => {
  const salario = salarios.find((s) => id === s.id)?.salario;
  return new Promise((resolve, reject) => {
    salario
      ? resolve(salario)
      : reject(`El empleado con id ${id} no tiene salario asignado`);
  });
};

const id = 5;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));

// Anidando los anteriores para obtener ambos. Es un modelo dificil de mantener estas promesas encadenadas
/*getEmpleado(id)
  .then((empleado) => {
    getSalario(id)
      .then((salario) => {
        console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));*/

// Promesas en cadena para solucionar el problema anterior
let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
  )
  .catch((err) => console.log(err));
