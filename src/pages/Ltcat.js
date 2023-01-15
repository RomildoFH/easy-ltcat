import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Ltcat.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';

function Ltcat() {

  const {
    isLoading,
    empresa,
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
              <section className="historico">
                <article className="article-container">
                  <h3 className="article-title">1. Histórico</h3>
                  <p className="article-paragraph">{`Atendendo a solicitação da empresa ${empresa.nome}; situada na ${empresa.endereco}; ramo: ${empresa.ramo}; foi realizada perícia para verificar se as atividades exercidas por seus colaboradores enquadram-se à legislação vigente para fins de aposentadoria especial.`}</p>
                  <br />
                  <p className="article-paragraph">{`A perícia baseou-se em realizar avaliações quantitativas e qualitativas dos agentes nocivos físicos, químicos e biológicos, ou grupos de agentes prejudiciais à saúde ou a integridade física do trabalhador para o preenchimento do formulário de informações sobre Atividades com Exposição a Agentes Agressivos - Aposentadoria Especial - Modelo do INSS - Instituto Nacional de Seguridade Social.`}</p>
                </article>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="data-e-hora">
                <article className="article-container">
                  <h3 className="article-title">2. Data e hora da perícia</h3>
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
                  <h3 className="article-title">3. Atividades desempenhadas</h3>
                  <p>
                    <strong>3.1 Local</strong>
                  </p>
                  <p className="article-paragraph">{`Área construída em alvenaria, vigas de concreto armado, coberta com telha de fibrocimento, onde estão instaladas as máquinas destinadas à serviços de pré-impressão de etiquetas.`}</p>
                  <br />
                  <p>
                    <strong>3.2 Detalhamento das Atividades</strong>
                  </p>
                  {empresa.cargos.map((cargo, index) => (
                    <div key={index}>
                      <p>
                        <strong>
                          3.2.{index + 1} {cargo.nome}
                        </strong>
                      </p>
                      <ul>
                        {cargo.atividades.map((atividade, i) => (
                          <li key={`${cargo}-atividade-${i}`}>{atividade}</li>
                        ))}
                      </ul>
                      <p>
                        <strong>
                          3.2.{index + 1}.1 Exposição do {cargo.nome} a agentes
                          nocivos
                        </strong>
                      </p>
                      {cargo.agentes_nocivos.map((agente, index) => (
                        <div key={`${agente}-${index}`}>
                          <p>{Object.keys(agente)}</p>
                          <ul className="nome-risco">
                            {agente[Object.keys(agente)].map(
                              (riscos, index) => (
                                <ul key={index}>
                                  {Object.keys(riscos).map((risco, i) => (
                                    <li key={risco}>{`${
                                      Object.keys(riscos)[i]
                                    }: ${riscos[risco].descricao}: ${
                                      riscos[risco].quantidade
                                    }`}</li>
                                  ))}
                                </ul>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                      <p>
                        <strong>
                          3.2.{index + 1}.2 Equipamentos de proteção utilizados
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
                          3.2.{index + 1}.3 Tempo de exposição a agentes nocivos
                          do cargo de {cargo.nome}
                        </strong>
                      </p>
                      {<p>{cargo.tempo_exposicao}</p>}
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
                    4. Declaração de extemporaneidade
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
                    5. Equipamentos de medição utilizados
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
                  <h3 className="article-title">6. Conclusão</h3>
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
