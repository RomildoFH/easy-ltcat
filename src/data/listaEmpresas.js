export const listaEmpresas = [
  {
    nome: 'EXPRESSO ETIQUETAS E BOBINAS LTDA-ME',
    nome_fantazia: 'EXPRESSO ETIQUETAS E BOBINAS',
    endereco: 'rua projetada, s/n, lote 08, quadra 103, Dom Helder Câmara, Garanhuns - PE',
    cnpj: '38.045.074/0001-17',
    ramo: 'Serviços de pré-impressão',
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
            'Risco Físico': [
              {
                'ruido': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '84dB(A)',
                },
                'calor': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '',
                },
              }
            ]
          },
          {
            'Risco Químico': [
              {
                'poeira': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                },
                'corrosivos': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                },
                'inflamáveis': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                },
                'óleos e graxas': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                }
                ,
                'tintas e vernizes': {
                  descricao: 'Tinta a base de água, não contém riscos para a saúde',
                  quantidade: '0 ppm',
                }
              }
            ]
          },
          {
            'Risco Biológico': [
              {
                'vírus': {
                  descricao: 'Não existe',
                  quantidade: 'NA'
                },
                'bactérias': {
                  descricao: 'Não existe',
                  quantidade: 'NA'
                }
              }
            ]
          }
        ],
        medidas_administrativas: ['Revesamento de atividades'],
        epi: ['protetor auricular', 'luvas de malha de algodão pigmentadas', 'calçado de segurança'],
        epc: ['Não há equipamento de proteção coletiva'],
        tempo_exposicao: 'Ausência de Agentes Nocivos',
        exposicao: 'Não se expõem a nenhum agente físico, químico, biológico ou ergonômico, em níveis que venham a causar danos a sua saúde',
      },
      {
        nome: 'Auxiliar administrativo',
        atividades: [
          'Realiza trabalhos de contabilidade',
          'Organizar o setor de trabalho',
          'Organizar documentações',
          'Realiza substituição de cartucho de tinta em impressora do escritório',
        ],
        agentes_nocivos: [
          {
            'Risco Físico': [
              {
                'ruido': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '65dB(A)',
                },
                'calor': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '',
                },
              }
            ]
          },
          {
            'Risco Químico': [
              {
                'poeira': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                },
                'corrosivos': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                },
                'inflamáveis': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                },
                'óleos e graxas': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                }
                ,
                'tintas e vernizes': {
                  descricao: 'Não foi constatada a presença',
                  quantidade: '0 ppm',
                }
              }
            ]
          },
          {
            'Risco Biológico': [
              {
                'vírus': {
                  descricao: 'Não existe',
                  quantidade: 'NA'
                },
                'bactérias': {
                  descricao: 'Não existe',
                  quantidade: 'NA'
                }
              }
            ]
          }
        ],
        medidas_administrativas: ['Revesamento de atividades'],
        epi: ['calçado de segurança'],
        epc: ['Não há equipamento de proteção coletiva'],
        tempo_exposicao: 'Ausência de Agentes Nocivos',
        exposicao: 'Não se expõem a nenhum agente físico, químico, biológico ou ergonômico, em níveis que venham a causar danos a sua saúde',
      }
    ],
    equipamentos: [
      {
        nome: 'Dosimetro',
        marca: 'Instrutherm',
        modelo: 'DOS-600',
        procedencia: 'americana',
        metodo: 'As medições foram realizadas com o instrumento colocado na altura do ouvido humano, estando o mesmo, com circuito de resposta linear.'
      },
      {
        nome: 'Termômetro Digital Quest',
        marca: 'Quest',
        modelo: '',
        procedencia: '',
        metodo: 'A medição foi realizada com o instrumento colocado na altura do funcionário, e a 01 (um) metro do posto de trabalho.'
      },
    ],
    metodologia: [''],
    conclusao: 'Seguindo os parâmetros legais, podemos concluir que as atividades de nenhum colaborador provoca exposição a agente nocivo em níveis que venham a causar danos a sua saúde. Portanto, nenhuma atividade se enquandra no Regulamento da Previdência Social para fins de emissão do formulário de informações sobre Atividdades com Expisções a Agentes Agressivos - Aposentadoria Especial do INSS - Instituto Nacional de Seguridade Social.',
    cidade: 'Garanhuns - PE',
    data_conclusao: '22 de Março de 2022',
    responsavel_empresa: {
      nome: 'Antônio',
      cargo: 'Gerente geral',
      cpf: '100.100.100-00'
    },
    responsavel_tecnico: {
      nome: 'Romildo Pereira da Silva Filho',
      cargo: 'Eng° civil e de segurança do trabalho',
      crea: 'CREA-nº 181682457-7'
    }
  }
];
