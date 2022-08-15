

const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Testar pacotes de acordo com as horas totais do projeto', () => {
  test('testar o pacote basico', () => {
    const horasProjeto = 49;
    const MAX_HORAS_POR_PACOTE = {
      'pacote_basico': 50,
      'pacote_intermediario': 100,
      'pacote_premium': 200
    }
    const result = calcularPacote(horasProjeto,MAX_HORAS_POR_PACOTE);
    expect(result).toMatch('pacote_basico')
  })
})