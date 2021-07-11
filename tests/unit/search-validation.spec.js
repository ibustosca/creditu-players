/*
Importante: El string 'validation' por defecto debe estar vacío.
Primero validaremos la lógica contra funciones de prueba
Luego validaremos sobre data() en el componente Header.vue que el string 'validation' no sea nulo y que sea vacío.
*/

import Search from "../../src/components/Search.vue";
const { validation } = require("../functions/search.js");

describe('Validamos que el string "validation" no sea nulo', () => {
  // Primera prueba debe ser una falla
  /* test("El string validation no es nulo", () => {
    expect(validation()).toBeNull();
  }); */

  // Ahora, la prueba es correcta
  test("El string validation no es nulo", () => {
    expect(validation()).not.toBeNull();
  });
});

describe('Validamos que el string "validation" esté vacío', () => {
  // Primera prueba debe ser una falla
  /* test("El string validation es vacío", () => {
    expect(validation()).not.toHaveLength(0);
  }); */
  // Ahora, la prueba es correcta
  test("El string validation es vacío", () => {
    expect(validation()).toHaveLength(0);
  });
});

describe('Validamos que "validation" es un string y no contiene números', () => {
  // Primera prueba debe ser una falla
  /* test("Validation es un string", () => {
    expect(validation()).not.toMatch(/[a-zA-Z]+/);
  }); */
  // Ahora, la prueba es correcta
  /* test("Validation es un string", () => {
    expect(validation()).toMatch(/[a-zA-Z]+/);
  }); */
});

describe('Validamos que el string "validation" no sea nulo en data() del componente Search.vue', () => {
  // Primera prueba debe ser una falla
  /* test("El string validation no es nulo", () => {
    expect(Search.data().validation).toBeNull();
  }); */

  // Ahora, la prueba es correcta
  test("El string validation no es nulo", () => {
    expect(Search.data().validation).not.toBeNull();
  });
});

describe('Validamos que el string "validation" esté vacío en data() del componente Search.vue', () => {
  // Primera prueba debe ser una falla
  /* test("El string validation es vacío", () => {
    expect(Search.data().validation).not.toHaveLength(0);
  }); */

  // Ahora, la prueba es correcta
  test("El string validation es vacío", () => {
    expect(Search.data().validation).toHaveLength(0);
  });
});
