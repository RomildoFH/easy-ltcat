import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";
import setPrioridade from "./calcPriority";
import "./style.css";

function RiskAssesment() {
  const { empresa } = useContext(AppContext);
  
  return (
    <article className="article-container">
      <h3 className="article-title">
        8. RECONHECIMENTO/ANTECIPAÇÃO DOS RISCOS
      </h3>
      {empresa.cargos.map((cargo) =>
        cargo.agentes_nocivos.map((agente) => {
          const riscos = Object.keys(agente);
          return riscos.map((risco) => {
            const fatores = Object.keys(agente[risco][0]);
            return fatores.map((fator) => {
              // console.log(agente[risco][0][fator].fator);
              const fatorDeRisco = agente[risco][0][fator]
              return (
                fatorDeRisco.monitorar ? (
                <table className="table-risk-assesment">
                  <tr className="text-bold">
                    <td colSpan="2">FUNÇÃO</td>
                    <td>SETOR</td>
                    <td colSpan="2">TEMPO DE EXPOSIÇÃO (Horas)</td>
                  </tr>
                  <tr>
                    <td colSpan="2">{cargo.nome}</td>
                    <td>Administrativo</td>
                    <td colSpan="2">{fatorDeRisco.jornada}</td>
                  </tr>
                  <tr className="text-bold">
                    <td rowSpan="2">Quantidade</td>
                    <td>HOMENS</td>
                    <td>MULHERES</td>
                    <td>MENORES</td>
                    <td>TOTAL</td>
                  </tr>
                  <tr>
                    <td>{cargo.masc}</td>
                    <td>{cargo.fem}</td>
                    <td>{cargo.menores}</td>
                    <td>{cargo.masc + cargo.fem + cargo.menores}</td>
                  </tr>
                  <tr className="text-bold">
                    <td colSpan="5">Atividades</td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <ul className="lista-atividades-pgr">
                        {
                          cargo.atividades.map((atividade, index) => (
                            <li key={`${cargo.nome}-atividade-${index}`}>{atividade}</li>
                          ))
                        }
                      </ul>
                    </td>
                  </tr>
                  <tr className="text-bold">
                    <td>TIPO DE RISCO</td>
                    <td>FATOR DE RISCO</td>
                    <td colSpan="3">FONTE</td>
                    {/* <td>PERIODICIDADE</td> */}
                    {/* <td>NÍVEL DE EXPOSIÇÃO</td> */}
                  </tr>
                  {/* Aqui deverá ser feito map dos riscos */}
                  <tr>
                    <td>{risco}</td>
                    <td>{fatorDeRisco.fator}</td>
                    <td colSpan="3">{fatorDeRisco.fonte}</td>
                    {/* <td>Permanente (habitual)</td> */}
                    {/* <td>{fatorDeRisco.probabilidade}</td> */}
                  </tr>
                  <tr>
                    <td colSpan="5" className="text-bold">
                      AVALIAÇÃO
                    </td>
                  </tr>
                  <tr className="text-bold">
                    <td>FATOR DE RISCO</td>
                    <td>PROBABILIDADE</td>
                    <td>SEVERIDADE</td>
                    <td>PRIORIDADE</td>
                    <td>POSSÍVEIS DANOS À SAÚDE</td>
                  </tr>
                  <tr>
                    <td>{fatorDeRisco.fator}</td>
                    <td>{fatorDeRisco.probabilidade}</td>
                    <td>{fatorDeRisco.severidade}</td>
                    <td>{setPrioridade(fatorDeRisco.probabilidade, fatorDeRisco.severidade)}</td>
                    <td>{fatorDeRisco.danos}</td>
                  </tr>
                  <tr className="text-bold">
                    <td colSpan="5">Equipamentos de proteção</td>
                  </tr>
                  <tr className="text-bold">
                    <td colSpan="3">EPC's</td>
                    <td colSpan="3">EPI's</td>                    
                  </tr>
                  <tr>
                  <td colSpan="3">
                      <ul className="lista-ep">
                        {
                          cargo.epc.map((e) => (
                            <li key={e}>{e}</li>
                          ))
                        }
                      </ul>
                    </td>
                    <td colSpan="3">
                      <ul className="lista-ep">
                        {
                          cargo.epi.map((e) => (
                            <li key={e}>{e}</li>
                          ))
                        }
                      </ul>
                    </td>
                  </tr>
                </table>
                ) : null
              );
            });
          });
        })
      )}
    </article>
  );
}

export default RiskAssesment;
