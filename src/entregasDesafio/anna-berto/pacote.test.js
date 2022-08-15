const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Retornar o tipo de pacote de acordo com o número de horas de um projeto", () => {
  test("testar o pacote básico", () => {
    const horasProjeto = 50;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("testar o pacote intermediário", () => {
    const horasProjeto = 100;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_intermediario");
  });

  test("testar o pacote premium", () => {
    const horasProjeto = 200;
    const result = calcularPacote(horasProjeto);
    expect(result).toEqual("pacote_premium");
  });
});
