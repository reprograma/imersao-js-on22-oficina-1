const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Testar pacotes de acordo com as horas totais do projeto', () => {
    test('testar o pacote básico', () => {
        const horas = 50;
        const result = calcularPacote(horas);
        expect(result).toEqual('pacote_basico');
    })
})



// testar todos os pacotes e testar os outros cenários. Básico, premium e intermediário.