import React from 'react';

function QuadroObrigacoes() {
  return (
    <article className="article-container">
        <h3 className="article-title">10. QUADRO DE OBRIGAÇÕES</h3>
        <p className="article-paragraph">
          Além das ações listadas no plano de ação, a empresa necessita cumprir com obrigações mínimas determinadas pelas normativas de saúde e segurança do trabalho. Para elucidar sobre tais obrigações, a empresa deverá atender as determinações constantes do quadro de obrigações deste documento. Deve-se também considerar que mediante as condições de saúde e segurança do trabalho sofrerem alterações de uma empresa para outra, em momentos distintos de sua operação, deve-se manter o monitoramente constante dos riscos e serem tomadas ações compatíveis com a realidade de cada lugar ou atividade para assegurar a integridade física de seus trabalhadores.
        </p>
        <table className="table-action-plan">
          <thead>
            <tr>
              <td className="text-bold" colSpan={5}>QUADRO DE OBRIGAÇÕES REFERENTE AS NR's</td>
            </tr>
            <tr className="text-bold">
              <td>Norma</td>
              <td>Ação</td>
              <td>Onde Intervir</td>
              <td>Forma de registro</td>
              <td>Prazo</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NR-1</td>
              <td>Cumprir determnações da norma</td>
              <td>Nos trabalhadores, no processo e na administração da empresa</td>
              <td>Procedimentos por escrito e atas de treinamentos</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-5</td>
              <td>Realizar eleição da CIPA (quando aplicável)</td>
              <td>Gerência</td>
              <td>Atas de reunião e posse conforme normativa</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-6</td>
              <td>Adquirir e distribuir Equipamentos de Proteção</td>
              <td>Atividades onde se faça necessário o uso</td>
              <td>Ficha de EPIs</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-6</td>
              <td>Treinar colaboradores quanto ao uso de quipamentos de Proteção</td>
              <td>Atividades onde se faça necessário o uso</td>
              <td>Ata de treinamento</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-6</td>
              <td>Fiscalizar o correto uso dos EPIs</td>
              <td>Atividades onde se faça necessário o uso</td>
              <td>Checklist de observação periódica</td>
              <td>Periódicamente</td>
            </tr>
            <tr>
              <td>NR-7</td>
              <td>O PGR deverá ter ações integradas com o PCMSO</td>
              <td>Nos procedimentos e locais de trabalho</td>
              <td>PCMSO, PGR e procedimentos</td>
              <td>Imediatamente</td>
            </tr>
            <tr>
              <td>NR-8</td>
              <td>Realizar inspeções periódicas para garantir a qualidade de pisos, paredes, teto, escadas e estruturas físicas</td>
              <td>Instalações da empresa / local de trabalho</td>
              <td>Checklist de observação periódica</td>
              <td>Periódicamente</td>
            </tr>
            <tr>
              <td>NR-10</td>
              <td>Sinalizar quadros e instalações elétricas</td>
              <td>Instalações elétricas</td>
              <td>Sinalização local</td>
              <td>Imediatamente</td>
            </tr>
            <tr>
              <td>NR-10</td>
              <td>Restringir acesso de pessoas não habilitadas a componentes elétricos</td>
              <td>Instalações elétricas</td>
              <td>Dispositivos de bloqueio/travas</td>
              <td>Imediatamente</td>
            </tr>
            <tr>
              <td>NR-10</td>
              <td>Fazer inspeções periódicas das instalações elétricas</td>
              <td>Instalações elétricas</td>
              <td>relatório de inspeção e checklist</td>
              <td>Periódicamente</td>
            </tr>
            <tr>
              <td>NR-11</td>
              <td>Realizar treinamento sobre levantamento e transporte manual de peso</td>
              <td>Nos trabalhos envolvendo armazenamento e transporte de cargas</td>
              <td>Ata de treinamento e certificado de participação</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-12</td>
              <td>Realizar laudo de inspeção de segurança em máquinas e equipamentos</td>
              <td>Máquinas e equipamentos da empresa</td>
              <td>Laudo de inspeção</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-13</td>
              <td>Realizar laudo de inspeção de vazos de pressão</td>
              <td>Máquinas, equipamentos e tubulações pressurizadas na empresa</td>
              <td>Laudo de inspeção</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-15</td>
              <td>Realizar LTCAT das atividades desenvolvidas na empresa</td>
              <td>Todas as atividades da empresa</td>
              <td>LTCAT e PGR</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-16</td>
              <td>Realizar laudo de periculosidade para caracterizar atividades periculosas (quando houver)</td>
              <td>Atividades periculosas</td>
              <td>Laudo</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-17</td>
              <td>Realizar AET (análise ergonômica do trabalho)</td>
              <td>Todas as atividades da empresa</td>
              <td>AET</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-18</td>
              <td>Realizar inspeções de escadas e plataformas</td>
              <td>Escadas e plataformas da empresa</td>
              <td>Checklist</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-20</td>
              <td>Manter FISPQ dos produtos químicos utilizados em local próximo das atividades</td>
              <td>Todas as atividadeque utilize produtos químicos</td>
              <td>FISPQs</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-20</td>
              <td>Trenar pessoal envolvido em atividades com produtos químicos quanto as fichas de emergência</td>
              <td>Todas as atividadeque utilize produtos químicos</td>
              <td>Ata de treinamento e certificado de participação</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-23</td>
              <td>Adquirir e disponibilizar no local equipamentos de proteção contra incêndio compatíveis com as necessidades locais</td>
              <td>Instalações da empresa</td>
              <td>Equipamentos de combate a incêndio e AVCB</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-24</td>
              <td>Prover instalações sanitárias compatíveis com a necessidade da empresa conforme preconiza normativa</td>
              <td>Instalações da empresa</td>
              <td>Instalações de vaso sanitários, chuveiros, mictórios e lavabos</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-25</td>
              <td>Implementar gestão de resíduos sólidos conforme normativas de meio ambiente</td>
              <td>Instalações da empresa</td>
              <td>Implementar gestão de resíduos sólidos recicláveis, perigosos e não recicláveis</td>
              <td>Imediato</td>
            </tr>
            <tr>
              <td>NR-26</td>
              <td>Implementar sinalização de segurança de toda a instalação da empresa</td>
              <td>Instalações da empresa</td>
              <td>Sinalizações instaladas nos postos de trabalho e checklists periódicos</td>
              <td>Imediato</td>
            </tr>
          </tbody>
        </table>
      </article>
  )
}

export default QuadroObrigacoes;
