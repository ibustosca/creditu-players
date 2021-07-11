/*
Se deben comprobar las siguientes validaciones en la función 'buscarPlayers()':
1. Cuando el retorno de la funcion no sea nulo
2. Cuando el retorno de la función sea true
*/

const { buscarPlayers } = require("../functions/search.js");

describe('Validamos que la función "buscarPlayers" no sea nula', () => {
  // Primera prueba debe ser una falla
  /* test("La función buscarPlayers no es nula", () => {
    expect(buscarPlayers()).toBeNull();
  }); */

  // Ahora, la prueba es correcta
  test("La función buscarPlayers no es nula", () => {
    expect(buscarPlayers()).not.toBeNull();
  });
});

describe('Validamos que la función "buscarPlayers" retorna true', () => {
  // Primera prueba debe ser una falla
  /* test("La función buscarPlayers retorna true", () => {
    expect(buscarPlayers()).not.toBeTruthy();
  }); */

  // Ahora, la prueba es correcta
  test("La función buscarPlayers retorna true", () => {
    expect(buscarPlayers()).toBeTruthy();
  });
});
