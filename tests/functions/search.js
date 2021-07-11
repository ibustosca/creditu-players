// Funcion que simula ser el backend con un arreglo de tipo objecto que almacena dos players
function results() {
  return [
    {
      avatar: "drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b",
      id: 746,
      balance: "711381",
      nickname: "aypwtañ",
      status: "xipkg ftlmmj",
      _id: "608c3386ef1f854beb5fe449",
    },
    {
      avatar: "drive.google.com/thumbnail?id=16wM4CZgYPCCiGmHxLmMbAXG7BkBcybH-",
      id: 719,
      balance: "958158",
      nickname: "epjxide",
      status: "xipkg ftlmmj",
      _id: "608c3386ef1f854beb5fe4b7",
    },
  ];
}

// Funcion que simula ser el cuadro de búsqueda
function searchPlayers() {
  const searchplayers = "1";

  return searchplayers;
}

// Funcion que simula ser el texto de mensaje para avisar al usuario que el cuadro de búsqueda no puede ser nulo
function validation() {
  const validacion = "";

  return validacion;
}

// Función que simula la acción del botón buscar
function buscarPlayers() {
  const searchplayers = "1";
  let respuesta = false;

  if (searchplayers.length > 0) {
    respuesta = true;
  }

  return respuesta;
}

// Función que simula ser un API para retornar valores de players
/* function callAxios() {
    
} */

module.exports = {
  results,
  searchPlayers,
  validation,
  buscarPlayers,
};
