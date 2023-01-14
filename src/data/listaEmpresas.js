export const listaEmpresas = [
  {
    nome: 'EXPRESSO ETIQUETAS E BOBINAS LTDA-ME',
    nome_fantazia: 'EXPRESSO ETIQUETAS E BOBINAS',
    endereco: 'rua projetada, s/n, lote 08, quadra 103, Dom Helder Câmara, Garanhuns - PE',
    cnpj: '38.045.074/0001-17',
    data_da_pericia: '22/03/2022',
    horario_inicio: '09:00',
    horario_termino: '12:00',
    medicoes: ['pressão sonora', 'exposição ao calor', 'agentes químicos', 'biológicos'],
    escopo_pericia: ['Análise das tarefas executadas', 'Quantificação dos agentes', 'Análise das normas de segurança do trabalho', 'Análise dos sistemas de proteção individual adotados', 'Consulta as normas técnicas'],
    descricao_do_local: 'Área construída em alvenaria, vigas de concreto armado, coberta com telha de fibrocimento, onde estão instaladas as máquinas destinadas à serviço de pré-impressão de etiquetas.',
    cargos: [
      {
        nome: 'Serviços gerais',
        atividades: [
          'Operar máquinas na confecção de etiquetas de papel, como também',
          'Organizar o setor de trabalho',
          'Obs.: A tinta utilizada no processo produtivo é a base de água',
        ],
        agentes_nocivos: [
          {
            fisico: [
              {
                ruido: {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '84dB(A)',
                },
                calor: {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '',
                },
              }
            ]
          },
          {
            quimico: ['Não existe']
          },
          {
            biologico: ['Não existe']
          }
        ],
        epi: ['protetor auricular', 'luvas de malha de algodão pigmentadas', 'calçado de segurança'],
        epc: [''],
        tempo_exposicao: 'Ausência de Agentes Nocivos',
        exposicao: 'Não se expõem a nenhum agente físico, químico, biológico ou ergonômico, em níveis que venham a causar danos a sua saúde',
      }
    ],
    equpamentos: [
      {
        nome: 'Dosimetro',
        marca: 'Instrutherm',
        modelo: 'DOS-600',
        procedencia: 'americana',
      },
      {
        nome: 'Termômetro Digital Quest',
        marca: 'Quest',
        modelo: '',
        procedencia: '',
      },
    ],
    metodologia: [''],
  }
];
