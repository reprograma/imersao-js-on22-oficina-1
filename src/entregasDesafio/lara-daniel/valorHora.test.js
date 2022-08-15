const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Calcular valor por hora', () => {
    test('Dado valor total desejado para receber ao mês, retornar o valor que deve ser cobrado pela hora trabalhada', () => {
        const valorPorMes = 7000;

        const result = calcularValorPorHora(valorPorMes);

        expect(result).toEqual(40);
    });
});