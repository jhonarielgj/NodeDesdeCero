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
    callback(null, empleado.nombre);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`Salario con id ${id} no existe!!!`);
  }
};

// console.log(getEmpleado(1)); //{ id: 1, nombre: 'Jhon' }

// console.log(getEmpleado(5)); //Empleado con id 5 no existe

const id = 1;

// Usando callback
getEmpleado(5, (err, empleado) => {
  if (err) {
    console.error("Error");
    return console.error(err);
  }
  console.log("Empleado existe");
  console.log(empleado);
});
// Empleado existe
// { id: 1, nombre: 'Jhon' }

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.error("Error");
    return console.error(err);
  }
  getSalario(id, (err, salario) => {
    if (err) {
      console.log("--Error--");
      return console.log(`No existe salario para empleado con id ${3}`);
    }
    console.log("--Empleado existe--");
    return console.log(
      `El empleado con id ${id} tiene un salario de ${salario}`
    );
  });
});
// Error
// Empleado con id 5 no existe

// Para hace callback hell vamos a incluir esta consulta en getEmpleado
// getSalario(id, (err, salario) => {
//   if (err) {
//     console.log("Error");
//     return console.log(err);
//   }
//   console.log("Salario");
//   return console.log(salario);
// });
