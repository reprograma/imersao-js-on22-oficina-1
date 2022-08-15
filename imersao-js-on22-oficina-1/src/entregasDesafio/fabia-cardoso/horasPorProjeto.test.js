const{ calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe ('Deve calcular total de horas para finalizar um projeto', ()=> {
    test('Dado um array com as funcionalidades desejadas no projeto, ele deve retornar a soma das horas necessárias', ()=> {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina'
        ];

        const result = calcularHorasDeProjeto(funcionalidades);
        expect(result).toEqual(32);

    });
});