const {
  TAXAS_CONTRATUAIS_POR_PACOTE
} = require('../constantes/constantes')
const {
  calcularHorasDeProjeto
} = require('./horasPorProjeto');
const {
  calcularPacote
} = require('./pacote');

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  if (Array.isArray(funcionalidades) && Number.isFinite(valorHora)) {
    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);

    const pacote = calcularPacote(totalDeHorasPorProjeto);

    const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

    return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
  } else {
    return "Not a valid input"
  }
}

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;