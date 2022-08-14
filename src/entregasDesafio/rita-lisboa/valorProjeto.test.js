/** @format */

const {
	calcularValorTotalProjeto,
	calcularValorBaseProjeto
} = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Valor do projeto", () => {
	beforeEach(() => {
		pacote.calcularPacote.mockReturnValue("pacote_basico")
	})

	test("Retorna o valor total para um projeto básico dadas as funcionalidades pedidas e o valor da hora da desenvolvedora", () => {
		const funcionalidades = ["setup", "responsividade", "construcao_1_pagina"]
		const valorHora = 70
		const result = calcularValorTotalProjeto(funcionalidades, valorHora)
		expect(result).toEqual(2464)
	})

	test("Retorna o valor base do projeto levando em consideração o total de horas por projeto e o valor da hora", () => {
		const totalDeHorasPorProjeto = 32
		const valorHora = 70
		const result = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora)
		expect(result).toEqual(2240)
	})
})
