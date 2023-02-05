import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import './style.css';

function AcompanhamentoAcidentes() {
  const { empresa } = useContext(AppContext);

  const createRows = (limit) => {
    const newArray = []
    for(let i = 1; i <= limit; i ++) {
      newArray.push(i);
    }
    return newArray.map((e) => (
      <tr key={e}>
        <td>{e}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ))
  };

  return (
    <div>
      <article className="article-container">
      <h3 className="article-title">
        11. Acompanhamento dos acidentes
      </h3>
      <p className="article-paragraph">
        Todo acidente de trabalho, seja considerado ele típico ou de trajeto, deverá ser registrado na tabela de acompanhamento de acidentes, anualmente deverá ser feita uma avaliação dos registros e caso necessário o plano de ação deverá ser atualizado.
      </p>
      <table className="modelo-registro-acidentes">
        <thead className="text-bold">
          <tr>
            <td colSpan={7}>
              Acompanhamento dos acidentes
            </td>
          </tr>
          <tr>
            <td>Empresa: </td>
            <td colSpan={3}>{ empresa.nome }</td>
            <td>CNPJ: </td>
            <td colSpan={2}>{ empresa.cnpj }</td>
          </tr>
          <tr>
            <td rowSpan={3}>SEQ</td>
            <td rowSpan={3}>MÊS</td>
            <td rowSpan={3}>ANO</td>            
          </tr>
          <tr>
            <td colSpan={2}>Com afastamento</td>
            <td colSpan={2}>Sem afastamento</td>           
          </tr>
          <tr>
            <td>Típico</td>
            <td>Trajeto</td>
            <td>Típico</td>
            <td>Trajeto</td>        
          </tr>
        </thead>
        <tbody>
          {
            createRows(15)
          }
        </tbody>
      </table>
      </article>
    </div>
  )
}

export default AcompanhamentoAcidentes;
