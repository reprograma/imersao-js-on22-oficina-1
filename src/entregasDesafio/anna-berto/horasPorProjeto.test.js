const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Cálculo de horas totais para finalizar um projeto", () => {
  test("Dado um array das funcionalidades desejadas no projeto, retorna a soma de horas necessárias", () => {
    const funcionalidades = ["setup", "responsividade", "construcao_1_pagina"];
    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(32);
  });
});
