const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calculo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retorne a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
        ];

        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(40);
    });
});