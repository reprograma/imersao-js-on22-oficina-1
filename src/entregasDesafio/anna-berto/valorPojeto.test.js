const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote.js");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor do projeto de acordo com o tipo de pacote", () => {
  const valorHora = 70;
  const funcionalidades = [
    "setup",
    "responsividade",
    "construcao_1_pagina",
  ];
  describe("Projeto com pacote básico", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_basico");
    });
    test("Retorna o valor total dada as funcionalidades", () => {
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);
      expect(result).toEqual(2464);
    });
  });

  describe("Projeto com pacote intermediário", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_intermediario");
    });
    test("Retorna o valor total dada as funcionalidades", () => {
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);
      expect(result).toEqual(2688);
    });
  });

  describe("Projeto com pacote premium", () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue("pacote_premium");
    });
    test("Retorna o valor total dada as funcionalidades", () => {
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);
      expect(result).toEqual(3360);
    });
  });
});
