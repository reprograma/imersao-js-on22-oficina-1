const {calcularPacote} = require ('../../dominio/calculadora/Projeto/pacote')
const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Testar pacotes de acordo com as horas totais do projeto', () =>{
    test('testar o pacote básico', ()=>{
        const horasProjeto = 50;
        const result = calcularPacote(horasProjeto);
        expect(result).toBe('Deve retornar o valor do pacote básico');
    });
      
    test("Testando pacote o pacote intermediário", () => {
      const horasProjeto = 100;
      const result = calcularPacote(horasProjeto);
      expect(result).toBe('Deve retornar o valor do pacote intermediário');
    });
  
    test("Testando pacote o pacote premium", () => {
      const horasProjeto = 200;
      const result = calcularPacote(horasProjeto);
      expect(result).toBe('Deve retornar o valor do pacote premium');
    });
  
    test("Testando para nenhum valor de pacote", () => {
      const horasProjeto = 0;
      const result = calcularPacote(horasProjeto);
      expect(result).toBe('Deve retornar nenhum valor de pacote');
    });
  
    test('Deve retornar a soma dos valores dos três projetos', () => {
      MAX_HORAS_POR_PACOTE.horasProjeto = 350;
      const result = calcularPacote(50,100,200);
      expect(result).toBe('Deve somar os valores dos pacotes');
    });
  
  })
  
  
  //Devemos conseguir somar os valores dos projetos dos clientes, caso cliente deseja realizar mais de um projeto.
  //Se caso o projeto for zero (sem verificação), necessitará retornar zero.
  