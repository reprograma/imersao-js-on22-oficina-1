const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("calcular valor por hora", () => {
  test("retorna o valor mensal arredondado", () => {
    const valorMensal = 5000;
    const result = calcularValorPorHora(valorMensal);
    expect(result).toEqual(29);
  });
});

