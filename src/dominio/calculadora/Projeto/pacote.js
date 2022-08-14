const {
  MAX_HORAS_POR_PACOTE
} = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Number.isFinite(totalDeHorasPorProjeto) ? Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto)[0] : "Not a valid input";

exports.calcularPacote = calcularPacote;