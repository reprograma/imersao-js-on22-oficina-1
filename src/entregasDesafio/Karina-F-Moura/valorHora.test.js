// Testes aqui

const calcularValorPorHora = require('../../dominio/calculadora/Hora/valorHora.js')

describe('Calcular valor recebido pela hora de trabalho', () => {

    test('Deve retornar 18 horas quando a renda mensal for R$3.000 ', () => {
        const rendaMensal = 3000
        expect(calcularValorPorHora(rendaMensal)).toEqual(18)
    });

    test('Deve retornar \'Not a valid input\' se o input for diferente de um número ', () => {
        expect(calcularValorPorHora([])).toEqual("Not a valid input")
    });
});