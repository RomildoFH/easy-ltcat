import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function QuadroFuniocnal() {
  const {empresa} = useContext(AppContext);
  return (
    <div className="table-container">
      <table className="article-table-info" id="quadro-funcional">
        <thead>
          <tr>
            <td>Função</td>
            <td>Func. Total</td>
            <td>Func. Masc.</td>
            <td>Func. Fem.</td>
            <td>Risco Físico</td>
            <td>Risco Químico</td>
            <td>Risco Biológico</td>
            <td>Risco Ergonômico</td>
            <td>Risco Acidentes</td>
          </tr>
        </thead>
        <tbody>
          {
            empresa.cargos.map((cargo) => (
              <tr>
                <td>{cargo.nome}</td>
                <td>{cargo.masc + cargo.fem}</td>
                <td>{cargo.masc}</td>
                <td>{cargo.fem}</td>
                <td>{cargo.resumo_dos_riscos.includes('físico') ? 'X' : '-'}</td>
                <td>{cargo.resumo_dos_riscos.includes('químico') ? 'X' : '-'}</td>
                <td>{cargo.resumo_dos_riscos.includes('biológico') ? 'X' : '-'}</td>
                <td>{cargo.resumo_dos_riscos.includes('ergonômico') ? 'X' : '-'}</td>
                <td>{cargo.resumo_dos_riscos.includes('acidente') ? 'X' : '-'}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <p>Obs.: Tipos de perigo quando assinalados com "X" estão presentes, quando assinalados com "-" estão ausentes.</p>
      <span>NOTA:</span><br/>
      <p className="article-paragraph">
        Os profissionais estão expostos aos perigos identificados no quadro acima, porém a existência do perigo não remete automaticamente a uma condição de prejuízo à saúde do trabalhador, para isto devem-se levar em consideração as informações do RECONHECIMENTO / ANTECIPAÇÃO DOS PERIGOS, como também no LEVANTAMENTO DE PERIGOS deste PGR, e mais ainda a conclusão de um Laudo Técnico que considere as condições de trabalho relacionando com as protesões coletivas e individuais disponibilizadas para o profissional.
      </p>
    </div>
  )
}

export default QuadroFuniocnal;