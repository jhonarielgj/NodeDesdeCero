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

const getEmpleado = (id) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  return new Promise((resolve, reject) => {
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

// La palabra reservada async tranforma la función en una función asíncrona que en pocas palabras retorna una promesa
const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado ${empleado} tiene un salario de ${salario}`;
  } catch (error) {
    throw error;
  }
};

const id = 3;

getInfoUsuario(id)
  .then((msg) => {
    console.log("Todo bien!!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Todo mal!!");
    console.log(err);
  });
