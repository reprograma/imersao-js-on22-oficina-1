const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  if (Number.isFinite(rendaMensal)) {
    const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
    const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

    return Math.ceil(valorPorHora)
  } else {
    return "Not a valid input"
  }
};

module.exports = calcularValorPorHora;