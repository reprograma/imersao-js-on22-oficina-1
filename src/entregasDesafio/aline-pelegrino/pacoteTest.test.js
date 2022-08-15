const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')


describe('Testar pacotes de acordo com as horas totais do projeto', () => {

 
    test('testar o pacote basico', () => {
        const horasProjeto = 50;
        const result = calcularPacote(horasProjeto -1); //-1 pois o vetor começa no 0
        expect(result).toEqual('pacote_basico')
    })

    
    test('testar o pacote intermediário', () => {
        const horasProjeto = 100;
        const result = calcularPacote(horasProjeto -1); //-1 pois o vetor começa no 0
        expect(result).toEqual('pacote_intermediario')
    })

    test('testar o pacote premium', () => {
        const horasProjeto = 200;
        const result = calcularPacote(horasProjeto -1); //-1 pois o vetor começa no 0
        expect(result).toEqual('pacote_premium')
    })
})