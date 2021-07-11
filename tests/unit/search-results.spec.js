/*
Importante: El arreglo 'results' por defecto debe estar vacío, pero también es necesario probarlo cuando no lo está.
Primero validaremos la lógica contra funciones de prueba
Luego validaremos sobre data() en el componente Header.vue que el arreglo 'results' no sea nulo y que sea vacío.
*/

import Search from "../../src/components/Search.vue";
const { results } = require("../functions/search.js");

describe('Validamos que el arreglo "results" no sea nulo', () => {
  // Primera prueba debe ser una falla
  /* test("El arreglo results no es nulo", () => {
    expect(results()).toBeNull();
  }); */

  // Ahora, la prueba es correcta
  test("El arreglo results no es nulo", () => {
    expect(results()).not.toBeNull();
  });
});

describe('Validamos que el arreglo "results" no esté vacío', () => {
  // Primera prueba debe ser una falla
  /* test("El arreglo results no es vacío", () => {
    expect(results()).toHaveLength(0);
  }); */

  // Ahora, la prueba es correcta
  test("El arreglo results no es vacío", () => {
    expect(results()).not.toHaveLength(0);
  });
});

describe('Validamos que el arreglo "results" contenga dos players', () => {
  // Primera prueba debe ser una falla
  /* test("El arreglo results contiene dos players", () => {
    expect(results()).toHaveLength(0);
  }); */

  // Ahora, la prueba es correcta
  test("El arreglo results contiene dos players", () => {
    expect(results()).toHaveLength(2);
  });
});

describe('Validamos que el arreglo "results" contenga el id de player 746', () => {
  // Primera prueba debe ser una falla
  /* test('El arreglo "results" contiene el id de player 746', () => {
    expect(results()).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 1 })])
    );
  }); */

  // Ahora, la prueba es correcta
  test('El arreglo "results" contiene el id de player 746', () => {
    expect(results()).toEqual(
      expect.arrayContaining([expect.objectContaining({ id: 746 })])
    );
  });
});

describe('Validamos que el arreglo "results" en data() no sea nulo', () => {
  // Primera prueba debe ser una falla
  /* test("El arreglo results en data() no es nulo", () => {
    expect(Search.data().results).toBeNull();
  }); */
  // Ahora, la prueba es correcta
  test("El arreglo results en data() no es nulo", () => {
    expect(Search.data().results).not.toBeNull();
  });
});

describe('Validamos que el arreglo "results" en data() sea vacío', () => {
  // Primera prueba debe ser una falla
  /* test("El arreglo results en data() es vacío", () => {
    expect(Search.data().results).not.toHaveLength(0);
  }); */

  // Ahora, la prueba es correcta
  test("El arreglo results en data() es vacío", () => {
    expect(Search.data().results).toHaveLength(0);
  });
});
