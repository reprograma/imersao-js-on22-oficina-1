const {
    calcularValorTotalProjeto
} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')


describe('Calcular o valor total de projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Deve retornar um número com uma lista de funcionalidades válidas', () => {
        const funcionalidades = ["setup",
            "responsividade",
            "construcao_1_pagina"
        ]
        const valorHora = 60
        expect(typeof calcularValorTotalProjeto(funcionalidades, valorHora)).toBe("number")
    });
    test('Deve retornar \'Not a valid input\' quando a funcionalidade for diferente de uma lista e o valor hora diferente de um número ', () => {
        expect(calcularValorTotalProjeto("funcionalidade", "valorHora")).toBe("Not a valid input")
    });
    test('Deve retornar 0 quando a funcionalidade for uma lista vazia', () => {
        expect(calcularValorTotalProjeto([], 8)).toEqual(0)
    });
    test('retorna o valor total para um projeto básico', () => {
        const funcionalidades = ["setup",
            "responsividade",
            "construcao_1_pagina"
        ]
        const valorHora = 70
        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toEqual(2464)
    });


});