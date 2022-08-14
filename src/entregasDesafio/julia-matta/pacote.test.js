const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("teste com pacote básico", () => {
  test("retorna o pacote usado de acordo com as horas trabalhadas", () => {
    const totalDeHorasPorProjeto = 50;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });
});

describe("teste com pacote intermediário", () => {
  test("retorna o pacote usado de acordo com as horas trabalhadas", () => {
    const totalDeHorasPorProjeto = 51;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });
});

describe("teste com pacote premium", () => {
  test("retorna o pacote usado de acordo com as horas trabalhadas", () => {
    const totalDeHorasPorProjeto = 200;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });
});
