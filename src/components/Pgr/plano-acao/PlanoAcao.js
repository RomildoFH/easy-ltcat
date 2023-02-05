import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import setPrioridade from "../riscos/calcPriority";

import './style.css';

function PlanoDeAcao() {
  const { empresa } = useContext(AppContext);

  const getActions = () => {
    return empresa.cargos.map((cargo) => {
      return cargo.agentes_nocivos.map((agente) => {
        const agenteNocivo = Object.keys(agente);
        const riscos = Object.keys(agente[agenteNocivo][0]);
        return riscos.map((risco) => {
          const riskObject = agente[agenteNocivo][0][risco];
          console.log(riskObject);
          if (riskObject.monitorar === true) {
            return (
              <tr key={`${cargo}-${risco}`}>
                <td>{ cargo.nome }</td>
                <td>{ riskObject.fator }</td>
                <td className={`riso-${setPrioridade(riskObject.probabilidade, riskObject.severidade).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}`}>{ setPrioridade(riskObject.probabilidade, riskObject.severidade) }</td>
                <td>{ riskObject.medidas_necessarias }</td>
                <td>{ riskObject.responsavel_medidas }</td>
                <td className="fill-blank">31/12/2023</td>
                <td className="fill-blank">31/12/2023</td>
                <td className="fill-blank">31/12/2023</td>
                <td className="fill-blank">31/12/2023</td>
              </tr>
            )
          }
          return null;
        });
      });
    });
  }

  return (
    <article className="article-container">
      <h3 className="article-title">
        9. PLANO DE AÇÃO
      </h3>
        <table className="table-action-plan">
          <thead>
            <tr className="text-bold">
              <td>Cargo Exposto</td>
              <td>Fator de risco</td>
              <td>Prioridade</td>
              <td>Ação</td>
              <td>Responsável</td>
              <td>Prazo (dd/mm/aa)</td>
              <td>Iniciado (dd/mm/aa)</td>
              <td>Concluído (dd/mm/aa)</td>
              <td>Assinatura</td>
            </tr>
          </thead>
          <tbody>
            {
              getActions()
            }
          </tbody>
        </table>
        <p className="article-paragraph">Todas as ações necessitam de atualização e avaliação periódica, sendo o empregar o responsável por garantir sua atualização. Os campos de data e assinatura devem ser preenchidos com caneta, sem rasuras.</p>
        <p className="article-paragraph">Em caso de haver, implementação de EPI's é necessário garantir que além de seu fornecimento, sejam registrados em ficha de EPI e os colaboradores recebam treinamento para seu correto uso.</p>
    </article>
  )
}

export default PlanoDeAcao;
