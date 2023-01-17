import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Ltcat.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';

function Ltcat() {

  const {
    isLoading,
    // empresa,
  } = useContext(AppContext);

  const mappingFuncoesNomes = () => {
    return empresa.cargos.map((cargo) => (
      <li key={ cargo.nome }>{cargo.nome}</li>
    ));
  }

  const textMedicoes = () => {
    let string = '';
    const newArray = empresa.medicoes;
    for (let index in newArray) {
      if (index < newArray.length - 2) {
        string += newArray[index] + ', ';
      } else if (index < newArray.length - 1) {
        string += newArray[index] + ' e '
      } else {
        string += newArray[index];
      }
    }
    return string;
  }

  const empresa = 
  {
    nome: 'EXPRESSO ETIQUETAS E BOBINAS LTDA-ME',
    nome_fantasia: 'EXPRESSO ETIQUETAS E BOBINAS',
    endereco: 'Rua projetada, s/n, lote 08, quadra 103, Dom Helder Câmara, Garanhuns - PE',
    cnpj: '38.045.074/0001-17',
    ramo: 'Serviços de pré-impressão',
    data_da_pericia: '22/03/2022',
    horario_inicio: '09:00',
    horario_termino: '12:00',
    leis_vigentes: `Leis 8.212 e 8.213/91, Decreto 3048/99 e Instrução Normativa INSS/PRES nº 77 de 21/01/2015, alterada em 26/04/2016`,
    cnaes: ['47.61-0-03 - Comércio varejista de artigos de papelaria', '18.21-1-00 - Serviços de pré-impressão'],
    grau_de_risco: '3',
    funcionarios: 6,
    contato: { nome: 'Antônio', telefone: '(87)9.8135-8668'},
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
                  limite: '85db(A)',
                },
                'calor': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '',
                  limite: '',
                },
              }
            ]
          },
          {
            'Risco Químico': [
              {
                'poeira': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                },
                'corrosivos': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                },
                'inflamáveis': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                },
                'óleos e graxas': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                }
                ,
                'tintas e vernizes': {
                  descricao: 'Tinta a base de água, não contém riscos para a saúde',
                  quantidade: '0 ppm',
                  limite: '',
                }
              }
            ]
          },
          {
            'Risco Biológico': [
              {
                'vírus': {
                  descricao: 'Risco Inexistente',
                  quantidade: 'NA',
                  limite: 'NA',
                },
                'bactérias': {
                  descricao: 'Risco Inexistente',
                  quantidade: 'NA',
                  limite: 'NA',
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
        recomendacoes: ['Manter o uso de protetor auricular', 'Elaborar um cronograma para garantir o correto revesamento', 'Realizar práticas de ginástica laboral'],
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
                  quantidade: '67,8dB(A)',
                  limite: '85db(A)',
                },
                'calor': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '',
                  limite: '',
                },
              }
            ]
          },
          {
            'Risco Químico': [
              {
                'poeira': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                },
                'corrosivos': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                },
                'inflamáveis': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                },
                'óleos e graxas': {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '0 ppm',
                  limite: '',
                }
                ,
                'tintas e vernizes': {
                  descricao: 'Tinta a base de água, não contém riscos para a saúde',
                  quantidade: '0 ppm',
                  limite: '',
                }
              }
            ]
          },
          {
            'Risco Biológico': [
              {
                'vírus': {
                  descricao: 'Risco Inexistente',
                  quantidade: 'NA',
                  limite: 'NA',
                },
                'bactérias': {
                  descricao: 'Risco Inexistente',
                  quantidade: 'NA',
                  limite: 'NA',
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
        recomendacoes: ['Realizar práticas de ginástica laboral'],
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

  return isLoading ? (
    <Loading />
  ) : (
    <div className="page-container">
      <table className="page-container">
        <thead>
          <tr>
            <td>
              <Header />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="page-content">
            <td>
              <section className="cover-page">
                <div>
                  <h2 className="cover-title">{empresa.nome_fantazia}</h2>
                  <p className="cover-andress">{empresa.endereco}</p>
                </div>
                <div className="cover-functions">
                  <p>Funções</p>
                  <ul className="lista-funcoes-nomes">
                    {mappingFuncoesNomes()}
                  </ul>
                </div>
                <p>
                  <strong>{empresa.data_da_pericia}</strong>
                </p>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="introducao">
                <article className="article-container">
                  <h3 className="article-title">1. Introdução</h3>
                  <p className="article-paragraph">{`Por solicitação da ${empresa.nome}, elaboramos o presente Laudo Técnico das Condições Ambientais do Trabalho (LTCAT), para avaliar a exposição ocupacional dos trabalhadores aos agentes físicos, químicos e biológicos, nas atividades desenvolvidas na empresa.`}</p>
                  <br />
                  <p className="article-paragraph">{`O Laudo Técnico das Condições Ambientais do Trabalho é um documento de exigência legal, estabelecido e adotado pelo Ministério da Previdência Social através do Instituto Nacional do Seguro Social (INSS), tendo com base da Legislação Previdenciária, ${empresa.leis_vigentes}, para caracterização da exposição ocupacional aos agentes físicos, químicos e biológicos a que os trabalhadores possam estar expostos de maneira habitual e permanente durante a jornada diária de trabalho.`}</p>
                </article>
                <article className="article-container">
                  <h3 className="article-title">2. Identificação da empresa</h3>
                  <table className="article-table">
                    <tbody>
                      <tr>
                        <td><strong>Razão Social:</strong></td>
                        <td>{empresa.nome}</td>
                      </tr>
                      <tr>
                        <td><strong>Nome Fantasia:</strong></td>
                        <td>{empresa.nome_fantasia}</td>
                      </tr>
                      <tr>
                        <td><strong>Endereço:</strong></td>
                        <td>{empresa.endereco}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Atividades:</strong>
                        </td>
                        <td>
                          {
                            empresa.cnaes.map((cnae) => (
                              <tr key={cnae}>{ cnae }</tr>
                            ))
                          }
                        </td>                        
                      </tr> 
                      <tr>
                        <td><strong>Grau de risco:</strong></td>
                        <td>{empresa.grau_de_risco}</td>
                      </tr>
                      <tr>
                        <td><strong>Número de funcionários:</strong></td>
                        <td>{empresa.funcionarios}</td>
                      </tr>
                      <tr>
                        <td><strong>Contato:</strong></td>
                        <td>{empresa.contato.nome}</td>
                      </tr>
                      <tr>
                        <td><strong>Telefone:</strong></td>
                        <td>{empresa.contato.telefone}</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
                <article className="article-container">
                  <h3 className="article-title">3. Objetivo</h3>
                  <p className="article-paragraph">{`O LTCAT tem como objetivo indicar os níveis de exposição ocupacional aos agentes físicos, químicos e biológicos a que os trabalhadores estão expostos de maneira habitual e permanente durante a jornada diária de trabalho, para caracterizar o exercício de atividades sujeitas a condições especiais e embasar o preenchimento do Perfil Profissiográfico Previdenciário (PPP) e da Guia de Recolhimento do Fundo de Garantia por Tempo de Serviço e Informações à Previdência Social (GFIP).`}</p>
                </article>
                <article className="article-container">
                  <h3 className="article-title">4. Aplicação</h3>
                  <p className="article-paragraph">{`Todas as informações contidas neste Laudo Técnico aplicam-se exclusivamente aos ambientes laborais, métodos, processos e atividades rotineiras desenvolvidas pelos funcionários da ${empresa.nome_fantasia}, situada a ${empresa.endereco}.`}</p>
                </article>
                <article className="article-container">
                  <h3 className="article-title">5. Período de vigência</h3>
                  <p className="article-paragraph">{`O LTCAT não possui um prazo de validade estabelecido pela legislação vigente, porém deve ser reavaliado. sempre que houver alteração no ambiente de trabalho como mudanças no layout, substituição de máquinas e/ou equipamentos, adoção ou alteração de tecnologias de proteção coletiva, quando as intensidades ou concentrações dos agentes ambientais alcançarem os níveis de ação ou quando a Empresa julgar oportuno uma nova avaliação.`}</p>
                </article>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="data-e-hora">
                <article className="article-container">
                  <h3 className="article-title">6. Data e hora da perícia</h3>
                  <p className="article-paragraph">{`Objetivando a elaboração do trabalho, procedemos na data ${
                    empresa.data_da_pericia
                  }, a perícia para medirmos os níveis de ${textMedicoes()} nas atividades realizadas, no horário compreendido entre ${
                    empresa.horario_inicio
                  } e ${empresa.horario_termino}`}</p>
                  <br />
                  <p>
                    <strong>A perícia compreendeu:</strong>
                  </p>
                  <ul>
                    {empresa.escopo_pericia.map((element) => (
                      <li key={element}>{element}</li>
                    ))}
                  </ul>
                </article>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="atividades">
                <article className="article-container">
                  <h3 className="article-title">7. Atividades desempenhadas</h3>
                  <p>
                    <strong>7.1 Local</strong>
                  </p>
                  <p className="article-paragraph">{`Área construída em alvenaria, vigas de concreto armado, coberta com telha de fibrocimento, onde estão instaladas as máquinas destinadas à serviços de pré-impressão de etiquetas.`}</p>
                  <br />
                  <p>
                    <strong>7.2 Detalhamento das Atividades</strong>
                  </p>
                  {empresa.cargos.map((cargo, index) => (
                    <div key={index}>
                      <p>
                        <strong>
                          7.2.{index + 1} {cargo.nome}
                        </strong>
                      </p>
                      <ul>
                        {cargo.atividades.map((atividade, i) => (
                          <li key={`${cargo}-atividade-${i}`}>{atividade}</li>
                        ))}
                      </ul>
                      <p>
                        <strong>
                          7.2.{index + 1}.1 Exposição do {cargo.nome} a agentes
                          nocivos
                        </strong>
                      </p>
                      {cargo.agentes_nocivos.map((agente, index) => (
                        <div key={`${agente}-${index}`}>
                          <p><strong>{Object.keys(agente)}</strong></p>
                          <ul className="nome-risco">
                            {agente[Object.keys(agente)].map(
                              (riscos, index) => (
                                <ul key={index}>
                                  {Object.keys(riscos).map((risco, i) => (
                                    <li key={risco}>
                                      <strong>
                                        {Object.keys(riscos)[i]}
                                      </strong>
                                      {`: Exposição de maior risco ${riscos[risco].quantidade}. ${riscos[risco].descricao}: ${riscos[risco].limite}`}
                                    </li>
                                  ))}
                                </ul>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                      <p>
                        <strong>
                          7.2.{index + 1}.2 Equipamentos de proteção utilizados
                          pelo {cargo.nome}
                        </strong>
                      </p>
                      <p>Medidas administrativas:</p>
                      <ul>
                        {cargo.medidas_administrativas.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                      <p>Equipamentos de proteção coletiva:</p>
                      <ul>
                        {cargo.epc.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                      <p>Equipamentos de proteção individual:</p>
                      <ul>
                        {cargo.epi.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                      <p>
                        <strong>
                          7.2.{index + 1}.3 Tempo de exposição a agentes nocivos
                          do cargo de {cargo.nome}
                        </strong>
                      </p>
                      {<p>{cargo.tempo_exposicao}</p>}
                      <p>
                        <strong>
                          7.2.{index + 1}.4 Romendações para o cargo de {cargo.nome}
                        </strong>
                        <ul>
                          {
                            cargo.recomendacoes.map((recomendacao) => (
                              <li>{recomendacao}</li>
                            ))
                          }
                        </ul>
                      </p>
                    </div>
                  ))}
                </article>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="extemporaneidade">
                <article className="article-container">
                  <h3 className="article-title">
                    8. Declaração de extemporaneidade
                  </h3>
                  <p className="article-paragraph">{`Quanto as condições de trabalho e aos agentes ambientais, referente ao preíodo acima considerado, temos a esclarecer que o Laudo Técnico Pericial é extemporâneo ao exercício das atividades desenvolvidas pelo empregado, entretanto o setor de trabalho em análise, mantém as mesmas características ambientais e equipamentos da época.`}</p>
                </article>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="equipamentos-medicao">
                <article className="article-container">
                  <h3 className="article-title">
                    9. Equipamentos de medição utilizados
                  </h3>
                  <p className="article-paragraph">{`Para avaliar a exposição ao nível de pressão sonora, utilizamos ${empresa.equipamentos[0].nome}, marca ${empresa.equipamentos[0].marca}, modelo ${empresa.equipamentos[0].modelo}, procedência ${empresa.equipamentos[0].procedencia}. ${empresa.equipamentos[0].metodo}`}</p>
                  <br />
                  <p className="article-paragraph">{`Para avaliar a exposição ao calor, utilizamos ${empresa.equipamentos[1].nome} da marca ${empresa.equipamentos[1].marca}. ${empresa.equipamentos[1].metodo}`}</p>
                </article>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="conclusao">
                <article className="article-container">
                  <h3 className="article-title">10. Conclusão</h3>
                  <p className="article-paragraph">{empresa.conclusao}</p>
                </article>
                <p>Afirmo que toda a informação aqui prestada é verdadeira.</p>
                <p>{empresa.cidade}, {empresa.data_conclusao}</p>
                <div className="assinaturas-container">
                  <div className="campo-assinatura">
                    <p>Responsável técnico</p>
                    <p>____________________________________________________</p>
                    <p>{empresa.responsavel_tecnico.nome}</p>
                    <p>{empresa.responsavel_tecnico.cargo}</p>
                    <p>{empresa.responsavel_tecnico.crea}</p>
                  </div>
                  <div className="campo-assinatura">
                    <p>Responsável pela empresa</p>
                    <p>____________________________________________________</p>
                    <p>{empresa.responsavel_empresa.nome}</p>
                    <p>{empresa.responsavel_empresa.cargo}</p>
                    <p>{empresa.responsavel_empresa.cpf}</p>
                  </div>
                </div>
              </section>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <footer className="footer-space" />
            </td>
          </tr>
        </tfoot>
      </table>
      <Footer />
    </div>
  );
}

export default Ltcat;
