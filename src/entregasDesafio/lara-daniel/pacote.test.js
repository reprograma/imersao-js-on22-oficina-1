const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Testar pacotes de acordo com a hora', () => {
    test('Dado um total de horas por projeto com máximo de 50, retornar pacote_basico', () => {
        const horasProjeto = 50;
        const result = calcularPacote(horasProjeto);

        expect(result).toEqual('pacote_basico');
    });

    test('Dado um total de horas por projeto com mínimo de 51 e máximo 100, retornar pacote_intermediario', () => {
        const horasProjeto = 100;
        const result = calcularPacote(horasProjeto);

        expect(result).toEqual('pacote_intermediario');
    });

    test('Dado um total de horas por projeto com mínimo de 101 e máximo 200, retornar pacote_premium', () => {
        const horasProjeto = 200;
        const result = calcularPacote(horasProjeto);

        expect(result).toEqual('pacote_premium');
    });
});