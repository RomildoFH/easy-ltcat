import React from 'react';

function ProcedimentosEmergencia() {

  return (
    <div>
      <article className="article-container">
      <h3 className="article-title">
        13. Ficha de Equipamentos de Proteção Individual
      </h3>
      <p className="article-paragraph">
        Em caso de ocorrência de acidentes, a empresa deverá tomar medidas emergenciais para resguardar o bem estar da vítima, sendo necessário muitas vezes adotar medidas de imediato. Na tabela de Procedimentos de Acidentes Críticos, encontram-se algumas recomendações do que se deve ser feito em caso de acidentes. Devendo a empresa, elaborar seu próprio procedmento de emergência, considerando seus recursos disponíveis, pessoal treinado, locais de atendimento médico e outros fatores que venham a influênciar no resgate e assistência a vítima.
      </p>
      <table className="modelo-ficha-epi">
        <thead className="text-bold">
          <tr>
            <td colSpan={4}>
              Procedimentos de Acidentes Críticos (PAC)
            </td>
          </tr>
          <tr>
            <td>Acidente</td>
            <td>Primeiros Socorros</td>
            <td>Medidas</td>
            <td>Observações</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-vertical">Picadas ou mordidas de animais peçonhentos</td>
            <td>
              Acalmar a vitima, mantê-la deitada, quieta e aquecida. Não oferecer bebida alcoólica ou aspirina. Checar os sinais vitais. Fazer garroteamento. Providenciar o transporte da vítima.
            </td>
            <td>
              Encaminhar a vítimapara o hospital o mais breve possível.
            </td>
            <td>
              Se possível identificar o animal peçonhento, capturando-o vivo ou morto.  
            </td>      
          </tr>
          <tr>
            <td className="text-vertical">Fratura, luxações e entorses</td>
            <td>
              Analisar a situação da vítima, identificando o local da lesão e/ou possível lesão na coluna vertebral. Acalmar a vítima e verificar se existe hemorragia severa, em caso de positivo assumir procedimentos para estancar o sangue. Providenciar a imobilização da lesão, tomando cuidado com a proteção do local lesionado e com a pressão da imobilização. Verificar a temperatura e pulso da extremidade do membro lesionado. Providenciar o transporte da vítima.
            </td>
            <td>
              Encaminhar a vítima para unidade traumatológica mais próxima.
            </td>
            <td>
              Acidentados de queda em altura e desmoronamento, quando inconscientes, deverão ser tratados com lesáo na coluna. Vítima com lesões no fêmur, quadril ou pelve, deverá ser transportado deitado, nunca sentado. Lesões de clavícula, ombro ou escãpula poderão ser transportados sentados Lesões na coluna deverão ser transportados em superfície plana e rígida.
            </td>      
          </tr>
          <tr>
            <td className="text-vertical">Desmaio</td>
            <td>
              Conserve a vítima deitada com os pés levantados não mais que 30cm. Afrouxe-lhe as roupas. Em caso de vômito coloque a vítima de Iado. Observe suas vias respiratórias.
            </td>
            <td></td>
            <td>
              Não Ihe dê nenhum líquido até sua total recuperação Não jogue água na vítima Não coloque sal na sua boca. Se o desmaio não tiver causa justificada, sugira à vítima uma consulta ao médico para investigação do mesmo.
            </td>      
          </tr>
          <tr>
            <td className="text-vertical">Envenenamento</td>
            <td>
              No caso de vítima consciente e sem convulsão, dar um copo d’água ou leite para diluir o veneno. Procurar obter o máximo de informações sobre a substância ingerida com a vítima. Manter a temperatura da vítima. Observar sua respiração. Manter a vítima em decúbito lateral (vômito). Realizar RCP se necessário.
            </td>
            <td>
              Encaminhar a vítima o mais rápido possível para o hospital.
            </td>
            <td>
              O vômito não deverã ser provocado nas seguintes situações: Paciente inconsciente ou com convulsão. Se o veneno for corrosivo ou derivado de petróleo Deverá ser informado ao médico: Idade da vítima. Nome do veneno. Estado de saúde fisico e mental da vitima. Se houve vômito.Se os sintomas foram súbitos ou jã havia reclamações anterior
            </td>      
          </tr>
          <tr>
            <td className="text-vertical">Insolação, cãibras e intermação</td>
            <td>
              Insolação: Tirar a roupa da vítima. Aplicar compressas úmidas e frescas continuamente, não usar gelo. Usar ventiladores ou ar condicionados sobre a vítima. Não dê estimulante.Cãibras: Dar à vítima uma solução de 250ml de água com uma colher de chá de sal a cada 15 min. durante 01 hora. Fazer massagem no local. Intermação Dar à vítima uma solução de 250ml de água com uma colher de chá de sal a cada 15 min. durante 01 hora. Conserve a vítima deitada, elevando os pés da vítima não mais que 30cm. Afrouxe-lhe as roupas. Aplique compressas de água natural. Em caso do vômito suspenda a ingestão do liquido.
            </td>
            <td>
              Encaminhar a vítima para o hospital o mais breve possível.
            </td>
            <td>
              Depois de um ataque de intermação a vítima não deve trabalhar por vários dias e ficar em repouso
            </td>      
          </tr>
          <tr>
            <td className="text-vertical">Queimaduras</td>
            <td>
              Acalmar a vítima Colocar água fria(não gelada) na érea queimada. Se possível submergi-la. A água deve ser o mais limpa possível. Se a queimadura for na face dê atenção ás vias respiratórias e transporte a vítima deitada com hiper- extensão da cabeça. Em caso de bolhas não as rompas. Conservar braços e pernas elevados. Não remover pedaços de roupas queimadas. As roupas não devem ser rasgadas, e sim cortadas. Cobrir as áreas queimadas com gaze esterilizada molhando as regiões afetadas com soro fisiológico Para grandes extensões de áreas queimadas, não se deve submergi-la, pois o frio pode provocar o choque. Providenciar o transporte o mais breve possível
            </td>
            <td>
              Encaminhar a vítima para o hospital de queimados mais próximo ou outro hospital que possua uma unidade de queimados.
            </td>
            <td>
              Em caso de queimadura química, deve-se enxaguar abundantemente a região afetada com água até chegar ao hospital, inclusive durante o transporte. Queimaduras químicas nos olhos por ãcidos lavar com água no mínimo 05 minutos, no caso de queimadura por álcalis, no mínimo 15 minutos. Queimaduras por eletricidade devem ser testadas a consciência e respiração da vítima.
            </td>      
          </tr>
          <tr>
            <td className="text-vertical">Óbito</td>
            <td></td>
            <td></td>
            <td>
              Isolar a área do acidente Comunicar a polícia civil Comunicar a DRT
            </td>
          </tr>
        </tbody>
      </table>
      </article>
    </div>
  )
}

export default ProcedimentosEmergencia;
