const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo de horas totais para finalizar um projeto', () => {
  test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessarias', () => {
    const funcionalidades = ['setup', 'responsividade', 'construcao_1_pagina'];

    const result = calcularHorasDeProjeto(funcionalidades)
    expect(result).toEqual(32)
  })
})
