const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Testar pacote de acordo com as horas totais do projeto", () => {

  test("testa o pacote basico", () => {
      const horasProjeto = 50;
      const result = calcularPacote(horasProjeto);
      expect(result).toBe('pacote_basico');
  });

  test("testa o pacote intermediário", () => {
    const horasProjeto = 100;
    const result = calcularPacote(horasProjeto);
    expect(result).toBe('pacote_intermediario');
  });

  test("testa o pacote premium", () => {
    const horasProjeto = 200;
    const result = calcularPacote(horasProjeto);
    expect(result).toBe('pacote_premium');
  });

})