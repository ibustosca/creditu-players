/*
Se deben comprobar las siguientes validaciones en la función 'callAxios()' del componente Search.vue:
1. Cuando el retorno de la funcion no sea nulo
2. Cuando el retorno de la función sea 1 player
3. Cuando el retorno de la función sea más de 1 player
*/

import Search from "../../src/components/Search.vue";

describe("Validamos que la función callAxios() del componente Search.vue no retorna valores nulos", () => {
  // Primera prueba debe ser una falla
  /* test("callAxios() no retorna valores nulos", async () => {
    const respuesta = await Search.methods.callAxios("1");
    expect(respuesta.data).toBeNull();
  }); */

  // Ahora, la prueba es correcta
  test("callAxios() no retorna valores nulos", async () => {
    const respuesta = await Search.methods.callAxios("1");
    expect(respuesta.data).not.toBeNull();
  });
});

describe("Validamos que la función callAxios() del componente Search.vue retorne datos de un único player", () => {
  // Primera prueba debe ser una falla
  /* "callAxios() retorna datos de un único player", async () => {
    const respuesta = await Search.methods.callAxios("1");
    expect(respuesta.data).toHaveLength(2);
  }); */

  // Ahora, la prueba es correcta
  test("callAxios() retorna datos de un único player", async () => {
    const respuesta = await Search.methods.callAxios("1");
    expect(respuesta.data).toHaveLength(1);
  });
});

describe("Validamos que la función callAxios() del componente Search.vue retorne datos de 11 players", () => {
  // Primera prueba debe ser una falla
  /* test("callAxios() retorna datos de 11 players", async () => {
    const respuesta = await Search.methods.callAxios("xip");
    expect(respuesta.data).not.toHaveLength(11);
  }); */

  // Ahora, la prueba es correcta
  test("callAxios() retorna datos de 11 players", async () => {
    const respuesta = await Search.methods.callAxios("xip");
    expect(respuesta.data).toHaveLength(11);
  });
});
