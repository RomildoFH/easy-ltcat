import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import setPrioridade from "../riscos/calcPriority";
import './styles.css';

function RiskInventary() {
  const { empresa } = useContext(AppContext);

  return (
    <article className="article-container">
      <h3 className="article-title">
        8. INVENTÁRIO DE RISCOS
      </h3>
      {
        empresa.cargos.map((cargo) => (
          <table className="table-risk-inventary">
            <thead>
              <tr>
                <td className="text-bold">Cargo:</td>
                <td colSpan={6} className="text-bold">{ cargo.nome }</td>
              </tr>
              <tr>
                <td className="text-bold">Ambiente de trabalho</td>
                <td colSpan={6}>{ empresa.descricao_do_local }</td>
              </tr>
              <tr>
                <td className="text-bold">Atividades realizadas</td>
                <td colSpan={6}>
                  <ul className="lista-atividades-inventario">
                    {
                      cargo.atividades.map((atividade) => (
                        <li>{ atividade }</li>
                      ))
                    }
                  </ul>                  
                </td>
              </tr>
              <tr className="text-bold">
                <td>Risco</td>
                <td>Fator de Risco</td>
                <td>Fonte</td>
                <td>Exposição</td>
                <td>Possíveis efeitos</td>
                <td>Medidas existentes</td>
                <td>Prioridade</td>
              </tr>
            </thead>
            <tbody>
              {
                cargo.agentes_nocivos.map((agente, index) => {
                  const riskName = (Object.keys(cargo.agentes_nocivos[index]))
                  const agenteNocivo = Object.keys(agente);
                  const riscos = Object.keys(agente[agenteNocivo][0]);
                  return riscos.map((risco) => {
                    const riskObject = agente[agenteNocivo][0][risco];
                    return (
                      <tr key={`${riskName}-${agente[agenteNocivo][0][risco].fator}`}>
                        <td>{ riskName }</td>
                        <td>{ riskObject.fator }</td>
                        <td>{ riskObject.fonte }</td>
                        <td>{ riskObject.quantidade }</td>
                        <td>{ riskObject.danos }</td>
                        <td>{ riskObject.medidas_existentes }</td>
                        <td>{ setPrioridade(riskObject.probabilidade, riskObject.severidade) }</td>
                      </tr>
                    )
                  })
                })
              }
            </tbody>
          </table>
        ))
      }
    </article>
  )
};

export default RiskInventary;
