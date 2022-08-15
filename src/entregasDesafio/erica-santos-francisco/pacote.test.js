const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote') 

describe('Testar pacotes de acordo com as horas totais do projeto', () => { 
    it('testar o pacote basico', () => { 
        const horasProjeto = 45; 
        const result = calcularPacote(horasProjeto); 
        expect(result).toEqual('pacote_basico');
    })

    it('testar o pacote intermediario', () => { 
        const horasProjeto = 100; 
        const result = calcularPacote(horasProjeto); 
        expect(result).toEqual('pacote_intermediario');

    })

    it('testar o pacote premium', () => { 
        const horasProjeto = 180; 
        const result = calcularPacote(horasProjeto); 
        expect(result).toEqual('pacote_premium');

    })
}) 