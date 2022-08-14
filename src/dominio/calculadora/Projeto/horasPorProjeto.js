const {
  HORAS_POR_FUNCIONALIDADE
} = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  Array.isArray(listaDeFuncionalidades) ?
  listaDeFuncionalidades
  .map(func => HORAS_POR_FUNCIONALIDADE[func])
  .reduce((sum, currentValue) => sum + currentValue, 0) : "Not a valid input"
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;