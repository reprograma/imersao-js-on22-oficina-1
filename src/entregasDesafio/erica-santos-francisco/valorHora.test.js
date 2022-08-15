const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
    it('retorna o valor arredondado correto dado o valor recebido do mes', () => {
        const valorPorMes = 5000;
        const result = calcularValorPorHora(valorPorMes);

        expect(result).toEqual(29);
    })
})