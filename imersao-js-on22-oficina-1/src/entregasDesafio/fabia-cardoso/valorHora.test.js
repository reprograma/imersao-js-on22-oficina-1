// Testes aqui

const{calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora');

describe('Deve calcular o valor por hora', ()=>{

    test('Deve retornar o valor arredondado correto dado o valor recebido no mês', ()=> {
        const valorPorMes = 5000;

        const result = calcularValorPorHora(valorPorMes);

        expect(result).toEqual(29);
    });
});