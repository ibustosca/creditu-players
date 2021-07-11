/*
Importante: El string 'searchPlayers' será validado cuando no sea nulo y no sea vacío.
Primero validaremos la lógica contra funciones de prueba
Luego validaremos sobre data() en el componente Header.vue que el arreglo 'results' no sea nulo y que sea vacío.
*/

import Search from "../../src/components/Search.vue";
const { searchPlayers } = require("../functions/search.js");

describe('Validamos que el string "searchPlayers" no sea nulo', () => {
  // Primera prueba debe ser una falla
  /* test("El string searchPlayers no es nulo", () => {
    expect(searchPlayers()).toBeNull();
  }); */

  // Ahora, la prueba es correcta
  test("El string searchPlayers no es nulo", () => {
    expect(searchPlayers()).not.toBeNull();
  });
});

describe('Validamos que el string "searchPlayers" no esté vacío', () => {
  // Primera prueba debe ser una falla
  /* test("El string searchPlayers no es vacío", () => {
    expect(searchPlayers()).toHaveLength(0);
  }); */

  // Ahora, la prueba es correcta
  test("El string searchPlayers no es vacío", () => {
    expect(searchPlayers()).not.toHaveLength(0);
  });
});

describe('Validamos que el string "searchPlayers" de data() en el archivo Search.vue no sea nulo', () => {
  // Primera prueba debe ser una falla
  /* test("El string searchPlayers no es nulo", () => {
    expect(Search.data().searchPlayers).toBeNull();
  }); */
  // Ahora, la prueba es correcta
  test("El string searchPlayers no es nulo", () => {
    expect(Search.data().searchPlayers).not.toBeNull();
  });
});

describe('Validamos que el string "searchPlayers" de data() en el archivo Search.vue esté vacío', () => {
  // Primera prueba debe ser una falla
  /* test("El string searchPlayers es vacío", () => {
    expect(Search.data().searchPlayers).not.toHaveLength(0);
  }); */
  // Ahora, la prueba es correcta
  test("El string searchPlayers es vacío", () => {
    expect(Search.data().searchPlayers).toHaveLength(0);
  });
});
