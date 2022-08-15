const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
    test('retorna o valor arrendado correto dado o valor recebido no mês', () => {
        const valorRecebidoNoMes = 5000;

        const result = calcularValorPorHora(valorRecebidoNoMes)

        expect(result).toEqual(29);
    })
});