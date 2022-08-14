const {
  HORAS_POR_FUNCIONALIDADE,
} = require("../../dominio/calculadora/constantes/constantes");

const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("cálculo de horas necessárias para finalizar um projeto", () => {
  test("retorna a quantidade de horas necessárias por projeto de acordo com array com funcionalidades", () => {
    const funcionalidades = ["formulario", "responsividade"];
    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(32);
  });
});
