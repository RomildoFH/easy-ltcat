import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

function Responsabilidade() {

  const { empresa } = useContext(AppContext);

  return (
    <div>
      <article className="article-container">
      <h3 className="article-title">
        15. Responsabilidade pelo PGR
      </h3>
      <p className="article-paragraph">
        O PGR, é de responsabilidade do empregador, sendo ele o total e único responsável por sua elaboração, implementação e manutenção. Reconhecendo que todo o conteúdo aqui descrito é verídico,o responsável pela { empresa.nome } e também o responsável pela elaboração do documento, assinam abaixo:
      </p>
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
      </article>
    </div>
  )
};

export default Responsabilidade;
