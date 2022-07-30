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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

// console.log(getEmpleado(1)); //{ id: 1, nombre: 'Jhon' }

// console.log(getEmpleado(5)); //Empleado con id 5 no existe

// Usando callback
getEmpleado(1, (err, empleado) => {
  if (err) {
    console.error("Error");
    console.error(err);
  }
  console.log("Empleado existe");
  console.log(empleado);
});
// Empleado existe
// { id: 1, nombre: 'Jhon' }

getEmpleado(5, (err, empleado) => {
  if (err) {
    console.error("Error");
    return console.error(err);
  }
  console.log("Empleado existe");
  return console.log(empleado);
});
// Error
// Empleado con id 5 no existe
