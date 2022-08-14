const calcularHorasDeProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular horas por projeto de acordo com a funcionalidade', () => {

    test('Deve retornar 0 quando o input for uma lista vazia', () => {
        expect(calcularHorasDeProjeto.calcularHorasDeProjeto([])).toBe(0)
    });

    test('Deve retornar \'Not a valid input\' quando o input for um número', () => {
        expect(calcularHorasDeProjeto.calcularHorasDeProjeto(1)).toEqual("Not a valid input")
    });

    test('A hora total de um projeto somente com setup', () => {
        expect(calcularHorasDeProjeto.calcularHorasDeProjeto(["setup"])).toBe(8)
    });

    test('A hora total de um projeto somente com responsividade e construção de pagina', () => {
        const funcionalidade = ["responsividade", "construcao_1_pagina"]
        expect(calcularHorasDeProjeto.calcularHorasDeProjeto(funcionalidade)).toBe(24)
    });

    test('A hora total de um projeto somente com setup, formulário, resposividade, otimização, construção de pagina, integração, src, mailchimp e integração com API tem um total de 88 horas', () => {
        const funcionalidades = ["setup",
            "formulario",
            "responsividade",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]
        expect(calcularHorasDeProjeto.calcularHorasDeProjeto((funcionalidades))).toBe(88)
    });

    test('A hora total de um projeto somente com integração de API', () => {
        expect(calcularHorasDeProjeto.calcularHorasDeProjeto(["integracao_api_propria"])).toBe(16)
    });


});