const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Testar pacotes de acordo com as horas totais do projeto', () => {
  test('testar o pacote basico', () => {
    const horasProjeto = 32
    const result = calcularPacote(horasProjeto)

    expect(result).toEqual('pacote_basico')
  })

  test('testar o pacote intermediario', () => {
    const horasProjeto = 70
    const result = calcularPacote(horasProjeto)

    expect(result).toEqual('pacote_intermediario')
  })

  test('testar o pacote premium', () => {
    const horasProjeto = 150
    const result = calcularPacote(horasProjeto)

    expect(result).toEqual('pacote_premium')
  })
})
