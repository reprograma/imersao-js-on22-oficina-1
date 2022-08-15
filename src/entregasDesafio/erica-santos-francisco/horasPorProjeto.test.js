const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calculo de horas totais para finalizar um projeto', () => {
    it('Dado um array com as funcionalidades, retorne a soma das horas', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina'
        ];

        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(32);
    })
})