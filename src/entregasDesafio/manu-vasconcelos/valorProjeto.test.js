const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor do projeto', () => {
  const funcionalidades = ['setup', 'responsividade', 'construcao_1_pagina'];
  const valorHora = 70

  beforeEach(() => {
    pacote.calcularPacote.mockReturnValueOnce('pacote_basico').mockReturnValueOnce('pacote_intermediario').mockReturnValueOnce('pacote_premium');
  })

  test('retorna o valor total para um projeto basico dadas as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    expect(result).toEqual(2464)
  })

  test('retorna o valor total para um projeto intermediario dadas as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    expect(result).toEqual(2688)
  })

  test('retorna o valor total para um projeto premium dadas as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    expect(result).toEqual(3360)
  })
})
