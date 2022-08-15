const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Testar pacotes de acordo com as horas totais do projeto', () => {
    test('verificar se as horas realizadas correspondem ao pacote básico', () => {
        const horasRealizadas = 50;
        const result = calcularPacote(horasRealizadas);
        expect(result).toEqual('pacote_basico');
    })

    test('verificar se as realizadas horas não correspondem ao pacote básico', () => {
        const horasRealizadas = 60;
        const result = calcularPacote(horasRealizadas);
        expect(result).not.toEqual('pacote_basico');
    })

    test('verificar se as horas realizadas correspondem ao pacote intermediário', () => {
        const horasRealizadas = 89;
        const result = calcularPacote(horasRealizadas);
        expect(result).toEqual('pacote_intermediario');
    })
    
    test('verificar se as horas realizadas correspondem ao pacote premium', () => {
        const horasRealizadas = 140;
        const result = calcularPacote(horasRealizadas);
        expect(result).toEqual('pacote_premium');
    })
})



// testar todos os pacotes e testar os outros cenários. Básico, premium e intermediário.