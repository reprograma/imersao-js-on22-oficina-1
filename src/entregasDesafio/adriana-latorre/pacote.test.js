const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Testar os pacotes de acordo com as horas totais trabalhadas no projeto", () => {
    test("Testar pacote básico", () => {
        const horasProjeto = 50;
        const result = calcularPacote(horasProjeto);
        expect(result).toEqual("pacote_basico");
    });
    test("Testar pacote intermediário", () => {
        const horasProjeto = 100;
        const result = calcularPacote(horasProjeto);
        expect(result).toEqual("pacote_intermediario");
    });
    test("Testar pacote premium", () => {
        const horasProjeto = 200;
        const result = calcularPacote(horasProjeto);
        expect(result).toEqual("pacote_premium");
    });
});
