const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Cálculo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejados no projeto, retorne a soma de horas necessárias', () => {
        const funcionalidades = ['setup', 'responsividade', 'construcao_1_pagina', 'ssr'];
        const result = calcularHorasDeProjeto(funcionalidades);
        expect(result).toEqual(40);
    }),

        test('Dado um array com as funcionalidades desejadas no projeto, retorne a soma de horas necessárias e em qual pacote ele se enquadra', () => {
            const funcionalidades = ['setup', 'responsividade', 'construcao_1_pagina'];
            const result = calcularHorasDeProjeto(funcionalidades);
            const horasNecessarias = calcularPacote(result);
            expect(result).toEqual(32);
            expect(horasNecessarias).toEqual('pacote_basico');
        })
})