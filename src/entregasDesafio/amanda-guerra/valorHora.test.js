// Testes aqui

const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe('Valor por Hora', () => {
  test('retorna o valor arredondado correto dado o valor recebido no mês', () => { 
      const valorPorMes = 5000;
      const result = calcularValorPorHora(valorPorMes);
      expect(result).toEqual(29);
   })
})