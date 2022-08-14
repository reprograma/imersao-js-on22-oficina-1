const calcularPacote = require('../../dominio/calculadora/Projeto/pacote')



describe('Devolver o tipo de pacote de acordo com a hora total de projetos', () => {
    test('Deve retornar pacote básico quando o projeto tem 20 horas', () => {
        const hora = 20
        expect(calcularPacote.calcularPacote(hora)).toEqual("pacote_basico")
    });
    test('Deve retornar pacote intermediário quando o projeto tem 60 horas', () => {
        const hora = 60
        expect(calcularPacote.calcularPacote(hora)).toEqual("pacote_intermediario")
    });
    test('Deve retornar pacote premium quando o projeto tem 200 horas', () => {
        const hora = 200
        expect(calcularPacote.calcularPacote(hora)).toEqual("pacote_premium")
    });
    test('Deve retornar Not a valid input quando enviado uma array', () => {
        expect(calcularPacote.calcularPacote([])).toEqual("Not a valid input")
    });

});