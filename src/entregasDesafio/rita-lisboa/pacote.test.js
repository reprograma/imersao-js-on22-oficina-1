/** @format */

const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("testar pacotes de acordo com as horas totais do projeto", () => {
	test("testar pacote basico", () => {
		const horasProjeto = 50
		const result = calcularPacote(horasProjeto)
		expect(result).toEqual("pacote_basico")
	})

	test("testar pacote intermediario", () => {
		const horasProjeto = 100
		const result = calcularPacote(horasProjeto)
		expect(result).toEqual("pacote_intermediario")
	})

	test("testar pacote premium", () => {
		const horasProjeto = 200
		const result = calcularPacote(horasProjeto)
		expect(result).toEqual("pacote_premium")
	})
})
