const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");
const {
  MAX_HORAS_POR_PACOTE,
  TAXAS_CONTRATUAIS_POR_PACOTE,
} = require("../../dominio/calculadora/constantes/constantes");

describe("teste com pacote básico", () => {
  test("retorna o pacote usado de acordo com as horas trabalhadas", () => {
    const totalDeHorasPorProjeto = 32;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });
});

describe("teste com pacote intermediário", () => {
  test("retorna o pacote usado de acordo com as horas trabalhadas", () => {
    const totalDeHorasPorProjeto = 32;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });
});

describe("teste com pacote premium", () => {
  test("retorna o pacote usado de acordo com as horas trabalhadas", () => {
    const totalDeHorasPorProjeto = 32;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });
});

//DESAFIO: passar pro código o número de horas e receber como resultado o pacote que vai ser usado
