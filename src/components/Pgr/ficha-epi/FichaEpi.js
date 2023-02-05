import React, { useContext } from 'react'
import AppContext from '../../../context/AppContext';
import './style.css';

function FichaEpi() {

  const { empresa } = useContext(AppContext);

  const createRows = (limit) => {
    const newArray = []
    for(let i = 1; i <= limit; i ++) {
      newArray.push(i);
    }
    return newArray.map((e) => (
      <tr key={e}>
        <td>_____/_____/_____</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ))
  };

  return (
    <div className="page-print-container">
      <article className="article-container">
      <h3 className="article-title">
        13. Ficha de Equipamentos de Proteção Individual
      </h3>
      <p className="article-paragraph">
        Todo equipamento de proteção individual, quando for entregue ao colaborador, precisará ser registrado em ficha de EPI, conforme modelo abaixo, porém a empresa poderá optar por utilizar outro modelo que julgar mais adequado, desde que contenha informações suficientes para comprovar a entrega do EPI.
      </p>
      <table className="modelo-ficha-epi">
        <thead className="text-bold">
          <tr>
            <td colSpan={5}>
              Ficha de EPI
            </td>
          </tr>
          <tr>
            <td>Empresa: </td>
            <td colSpan={2}>{ empresa.nome }</td>
            <td>CNPJ: </td>
            <td colSpan={2}>{ empresa.cnpj }</td>
          </tr>
          <tr>
            <td>Matrícula e Nome: </td>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <td>Data de Entrega</td>
            <td>Quantidade</td>
            <td style={{width: "200px"}}>Descrição</td>
            <td>C.A.</td>
            <td>Visto do colaborador</td>        
          </tr>
        </thead>
        <tbody>
          {
            createRows(22)
          }
          <tr>
            <td colSpan={5}>
              <ul className="lista-observacoes-ficha">
                <li>Declaro que recebi o EPI em perfeito estado de conservação</li>
                <li>Declaro que recebi instrução prévia, quanto ao uso do EPI</li>
                <li>Declaro que estou ciente de minha responsabilidade quanto à guarda e conservação do EPI</li>
                <li>Declaro que estou ciente de minha responsabilidade quanto ao uso correto do EPI, sendo passível de receber penalidades em caso de mal uso</li>
              </ul>            
            </td>            
          </tr>
          <tr>
              <td>
                Assinatura do colaborador
              </td>
              <td colSpan={4}>
                
              </td>
            </tr>
        </tbody>
        <tfoot>          
        </tfoot>
      </table>
      </article>
    </div>
  )
}

export default FichaEpi;
