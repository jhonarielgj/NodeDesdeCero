// Callbacks son funciones que se envían como parámetro y se ejecutaría después de la función que la tiene como parámetro

setTimeout(() => console.log("Hola Mundo"), 1000); //Hola Mundo se ve después de 1 segundo

const getUsuarioById = (id, callback) => {
  const user = {
    id,
    nombre: "Jhon",
  };

  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario); // { id: 10, nombre: 'Jhon' } después de 1.5 segundos
});
