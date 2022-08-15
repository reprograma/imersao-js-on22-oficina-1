const { calcularValorBaseProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("Calcular valor base do projeto", () => {
  test("retorna o cálculo que determina o base do projeto", () => {
    const totalDeHorasPorProjeto = 100;
    const valorHora = 70;
    const result = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);
    expect(result).toEqual(7000);
  });
});