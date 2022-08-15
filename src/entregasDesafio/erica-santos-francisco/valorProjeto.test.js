const { calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor do projeto', () => {

    it('retorna o valor total para um projeto basico dadas as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
// 32 horas no total
        pacote.calcularPacote.mockReturnValueOnce('pacote_basico');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina'
        ];

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(2464);
    });

    it("retorna o valor total para um projeto intermediarios dadas as funcionalidades pedidas e o valor da hora da desenvolvedora", () => {
  
      pacote.calcularPacote.mockReturnValueOnce("pacote_intermediario");
      const funcionalidades = [
        "setup",
        "construcao_1_pagina",
        "otimizacao_seo",
        "ssr",
        "integracao_mailchimp"
      ];

      const valorHora = 70;
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      expect(result).toEqual(4704);
    });

    it("retorna o valor total para um projeto premium dadas as funcionalidades pedidas e o valor da hora da desenvolvedora", () => {
        
      pacote.calcularPacote.mockReturnValueOnce("pacote_premium");
      const funcionalidades = [
        "setup",
        "formulario",
        "responsividade", 
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_mailchimp",
        "ssr",
        "integracao_api_propria"
      ];

      const valorHora = 70;
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);

      expect(result).toEqual(10920);
    });

});