import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import QuadroFuniocnal from './QuadroFuniocnal';

const matrizRisco = require('../Pgr/matriz_de_risco.png');
const matrizPriorizacao = require('../Pgr/matriz_de_prioridade.png');

function BasePGR() {
  const { empresa } = useContext(AppContext);
  return (
    <section className="introducao">
                <article className="article-container">
                  <h3 className="article-title">1. Introdução</h3>
                  <p className="article-paragraph">{`Por solicitação da ${empresa.nome}, elaboramos o presente Programa de Gerenciamneto de Riscos (PGR) para que a empresa possa prover mecânismos de identificação, avaliação e gestão dos riscos identificados em sua instalação.`}</p>
                  <br />
                  <p className="article-paragraph">{`Este programa tem o objetivo de desenvolver e melhorar a cultura prevencionista da ${empresa.nome_fantasia} localizada na ${empresa.endereco} através da identificação e avaliação dos perigos e riscos nos ambientes de trabalho, além de propor estratégias de prevenção dos acidentes e doenças ocupacionais. A prevenção de acidentes e doenças no ambiente laboral é essencial para a realização dos trabalhos em condições adequadas aos trabalhadores e ao meio ambiente. Sendo assim, o programa visa acima do gerenciamento, utilizar técnicas eficazes para reduzir ou eliminar os riscos.`}</p>
                  <p className="article-paragraph">{
                    `Este programa foi elaborado tendo como diretrizes a política de segurança e saúde do trabalho, recolhendo informações do Gerenciamento de Riscos Ocupacionais (GRO), conforme preconiza a NR 01 pela Portaria SEPRT n° 6.730, de 09 de março de 2020. Para fins de caracterização das atividades e operações insalubres ou atividades e operações perigosas foram aplicadas as disposições previstas na NR 15 e NR 16. O campo de aplicação deste PGR foi estabelecido, em comum acordo com o empregador, conforme determina a NR 01, item 1.5.3.1.1.1 "A critério da organização, o PGR pode ser implementado por unidade operacional, setor ou atividade".` 
                  }
                  </p>
                  <p className="article-paragraph">{
                    `Mesmo a empresa tendo contratado nossos serviços para a elaboração deste documento, é de inteira responsabilidade da empresa ${empresa.nome_fantasia} a gestão de todo e qualquer processo de segurança e medicina do trabalho, sendo somente ela a responsável legal perante qualquer assunto que envolva questões relacionadas com seu quadro de funcionários, instalações e obrigações perante a lei.`
                  }</p>
                </article>
                <article className="article-container">
                  <h3 className="article-title">2. Identificação da empresa</h3>
                  <table className="article-table">
                    <tbody>
                      <tr>
                        <td><strong>Razão Social:</strong></td>
                        <td>{empresa.nome}</td>
                      </tr>
                      <tr>
                        <td><strong>Nome Fantasia:</strong></td>
                        <td>{empresa.nome_fantasia}</td>
                      </tr>
                      <tr>
                        <td><strong>Endereço:</strong></td>
                        <td>{empresa.endereco}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Atividades:</strong>
                        </td>
                        <td>
                          {
                            empresa.cnaes.map((cnae) => (
                              <tr key={cnae}>{ cnae }</tr>
                            ))
                          }
                        </td>                        
                      </tr> 
                      <tr>
                        <td><strong>Grau de risco:</strong></td>
                        <td>{empresa.grau_de_risco}</td>
                      </tr>
                      <tr>
                        <td><strong>Número de funcionários:</strong></td>
                        <td>{empresa.funcionarios}</td>
                      </tr>
                      <tr>
                        <td><strong>Contato:</strong></td>
                        <td>{empresa.contato.nome}</td>
                      </tr>
                      <tr>
                        <td><strong>Telefone:</strong></td>
                        <td>{empresa.contato.telefone}</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
                <article className="article-container">
                  <h3 className="article-title">3. Desenvolvimento do PGR</h3>
                  <p className="article-paragraph">{`A NR-01, pela Portaria SEPRT n°6.730, de 09 de março de 2020, estabelece as disposições gerais e o Gerenciamento de Riscos Ocupacionais na Saúde e Segurança do Trabalho:`}</p>
                  <p className="article-paragraph">{
                    `"1.1.1 O objetivo desta Norma é estabelecer as disposições gerais, o campo de aplicação, os termos e as definições comuns às Normas Regulamentadoras (NRs) relativas a segurança e saúdo no trabalh e as diretrizes e os requisitos para o gerenciamento de riscos ocupacionais e as medidas de prevenção em Segurança e Saúde no Trabalho - SST.`
                  }</p>
                  <p className="article-paragraph">{`
                  O PGR - Programa de Gerenciamento de Riscos é um documento que deve estar incluso no Gerenciamento de Riscos Ocupacionais da emrpesa.`}</p>
                  <br></br>
                  <p className="article-subtitle"><strong>A organização do PGR contém informações para:</strong></p>
                  <br></br>
                  <ul className="article-paragraph-list">
                    <li>Evitar os riscos ocpacionais que possam ser originados no trabalho;</li>
                    <li>Identificar os perigos e possíveis lesões ou agravos à saúde;</li>
                    <li>Avaliar os riscos ocupacionais indicando o nível de risco;</li>
                    <li>Classificar os riscos ocupacionais para determinar a necessidade de adoção de medidas de prevenção;</li>
                    <li>Implementar medidas de prevenção, de acordo com a classificação de risco e na ordem de prioridade estabelecida e</li>
                    <li>Acompanhar o controle dos riscos ocupacionais.</li>
                  </ul>
                  <p className="article-subtitle"><strong>O presente programa inclui as seguintes etapas:</strong></p>
                  <br></br>
                  <ul className="article-paragraph-list">
                    <li>Antecipação e reconhecimento dos perigos;</li>
                    <li>Estabelecimento de prioridades e metas de avaliação e controle;</li>
                    <li>Implantação de medidas de controle e avaliação de sua eficácia;</li>
                    <li>Monitoramento da exposição aos perigos;</li>
                    <li>Registro e divulgação dos dados.</li>
                  </ul>
                  <p className="article-subtitle"><strong>O reconhecimento dos perigos contém os seguintes itens:</strong></p>
                  <br></br>
                  <ul className="article-paragraph-list">
                    <li>A sua identificação;</li>
                    <li>Determinação da fonte geradora;</li>
                    <li>Localização da fonte geradora;</li>
                    <li>A identificação das possíveis trajetórias e dos meios de propagação dos agentes no ambiente de trabalho;</li>
                    <li>A identificação da função exposta ao perigo;</li>
                    <li>O número de trabalhadores expostos ao perigo;</li>
                    <li>A caracterização das atividades e do tipo de exposição;</li>
                    <li>A obtenção de dados existentes na empresa, indicativos de possível comprometimento da saúdo decorrente do trabalho;</li>
                    <li>Os possíveis danos à saúde relacionada aos perigos identificados, disponíveis na literatura técnica;</li>
                    <li>A descrição das meddidas de controle já existentes.</li>
                  </ul>
                  <p className="article-subtitle"><strong>A avaliação quantitativa deverá ser realizada sempre que necessário para:</strong></p>
                  <br></br>
                  <ul className="article-paragraph-list">
                    <li>Comprovar o controle da exposição ou inexistência dos perigos identificados na etapa de reconhecimento;</li>
                    <li>Dimensionar a exposição dos trabalhadores;</li>
                    <li>Subsidiar o equacionamento das medidas de controle.</li>
                  </ul>
                  <p className="article-subtitle"><strong>Medidas de controle deverão ser verificadas sempre que uma ou mais das seguintes situações que se seguem ocorrer:</strong></p>
                  <br></br>
                  <ul className="article-paragraph-list">
                    <li>Identificação, na fase de antecipação, do perigo potencial à saúde;</li>
                    <li>Constatação, na fase de reconhecimento, de perigo evidente à saúde;</li>
                    <li>Quando, através do controle médico da saúde, ficar caracterizado o anexo casual entre danos observados na saúde dos trabalhadores e a situação de trabalho a que ficam expostos. A medida deverá estar consignada ao Programa de Controle Médico e Saúde Ocupacional (PCMSO).</li>
                  </ul>
                  <p className="article-subtitle">Perigo</p>
                  <p className="article-paragraph">Um perigo pode ser qualquer coisa (material ou equipamento de trabalho, método ou práticas de trabalho) com potencial para causar danos.</p>
                  <p className="article-subtitle">Risco</p>
                  <p className="article-paragraph">Um risco é a probabilidade, alta ou baixa, de alguém sofrer lesões ou danos devido a exposição ao perigo.</p>
                  <p className="article-subtitle">Riscos químicos</p>
                  <p className="article-paragraph">São as substâncias, compostas ou produtos nas formas de líquidos, gases, vapores, névoas, neblinas, fumos ou poeira, que possam penetrar no organismo pela via respiratória, ou que pela natureza da atividade de exposição, possam ter contato ou ser absorvidos pelo organismo através da pele.</p>
                  <p className="article-subtitle">Riscos biológicos</p>
                  <p className="article-paragraph">São os agentes mórbidos: bactérias, fungos, bacilos, parasitas, protozoários e virus, que, pela sua patogênese, possam causar doenças no trabalhador quando no exercîcio de suas funções.</p>
                  <p className="article-subtitle">Riscos ergonômicos</p>
                  <p className="article-paragraph">São os esforços físicos intensos, levantamento e transporte manual de peso, iluminaşão deficiente, desconforto térmico, imposição de ritmos excessivos, trabalho em turno e noturno, jornada de trabalho prolongada, monotonia e repetitividade, local de trabalho inadequado, posturas incorretas, posição incômoda, conflito, ansiedade e responsabilidade excessiva.</p>
                  <p className="article-subtitle">Riscos de acidentes</p>
                  <p className="article-paragraph">São os arranjos físicos inadequados, máquinas e equipamentos sem proteção, superfície aquecidas, instalaşão elétrica inadequada, matéria-prima sem especificação, ferramenta inadequada, falta de EPI, edificaçăo com defeito de construção, fora de especificação ou sem proteção, falta de sinalização, armazenagem e manuseio inadequado de inflamáveis e animais peçonhentos.</p>
                  <p className="article-subtitle">PROCEDIMENTO DE COMUNICAÇÃO DO P.G.R.:</p>
                  <p className="article-paragraph">Deverá ser organizada uma reuniäo com participação dos funcionários, onde deverão ser discutidos os seguintes temas:</p>
                  <ul className="article-paragraph-list">
                    <li>Segurança e Medicina do Trabalho;</li>
                    <li>Programa de Segurança;</li>
                    <li>Proporcionar treinamento em Saúde e Segurança.</li>
                  </ul>
                  <p className="article-subtitle">AVALIAÇÕES DAS EXPOSIÇÕES:</p>
                  <p className="article-paragraph">Será efetuado:</p>
                  <ul className="article-paragraph-list">
                    <li>Levantamento das condições ambientais;</li>
                    <li>Condições de equipamentos e maquinários;</li>
                    <li>Monitorar, avaliar e mapear as condições do ambiente (lluminação, Ruído, Elétrica, Produtos Químicos, Ergonômicos e Riscos de Acidentes).</li>
                  </ul>
                  <p className="article-subtitle">PROCEDIMENTO PARA CONTROLE DOS RISCOS:</p>
                  <p className="article-paragraph">Este procedimento irá assegurar que os Equipamentos de Proteção Coletiva (E.P.C.) e Equipamentos de Proteşão Individual (E.P.I.), sejam mantidos em condições de segurança e born funcionamento. E poderá observar:</p>
                  <ul className="article-paragraph-list">
                    <li>Riscos existentes no local de trabalho;</li>
                    <li>Como corrigir estes riscos;</li>
                    <li>Medidas que podem ser tomadas para prevenir suas recorrências.</li>
                  </ul>
                  <p className="article-subtitle">NORMAS E PROCEDIMENTOS DE SAÚDE E SEGURANÇA DO TRABALHO:</p>
                  <p className="article-paragraph">Todas as questões sobre Segurança do Trabalho deverão ser feitas levando-se em consideraçăo os aspectos Legais e Técnicos. A segurança só é eficiente quando o ambiente de trabalho possuir:</p>
                  <ul className="article-paragraph-list">
                    <li>Regras escritas e aplicadas a todos os funcionários;</li>
                    <li>Práticas de trabalho seguram para cada tipo de atividade;</li>
                    <li>Procedimento operacional;</li>
                    <li>Plano escrito para situações de emergências.</li>
                  </ul>
                  <p className="article-subtitle">TREINAMENTO E ORIENTAÇÃO:</p>
                  <p className="article-paragraph">Para ser bem estabelecido, necessita cobrir os seguintes aspectos;</p>
                  <p className="article-paragraph">Informar às chefias que:</p>
                  <ul className="article-paragraph-list">
                    <li>Eles são figuras importantes em um Programa de Segurança;</li>
                    <li>As soluções Seguras e Salubres de trabalho são importantes para a empresa;</li>
                    <li>Cabe a eles investigar acidentes e adotar medidas corretivas e preventivas.</li>
                  </ul>
                  <p className="article-paragraph">Informar aos empregados:</p>
                  <ul className="article-paragraph-list">
                    <li>Que o sucesso do programa depende de suas ações;</li>
                    <li>Que o trabalho seguro protege contra exposições nocivas;</li>
                    <li>Como utilizar e manter o equipamento de proteção Individual (E.P.I.);</li>
                    <li>Sobre os materiais e equipamentos com os quais estejam trabalhando.</li>
                  </ul>
                  <p className="article-subtitle">REGISTRO DO P.G.R.</p>
                  <p className="article-paragraph">Tem a finalidade de manter o administrador informado, quadrimestralmente, semestralmente e anualmente, verificando cada componente do programa, observando o que está funcionando bem e que melhorias poderiam ser tomadas para funcionar melhor.</p>
                  <p className="article-subtitle">ETAPAS DO PROGRAMA DE GERENCIAMENTO DE RISCOS:</p>
                  <ul className="article-paragraph-list">
                    <li>Antecipação e identificação	de fatores de riscos, levando-se em conta	as informações do mapa de riscos elaborado pela CIPA, quando houver;</li>
                    <li>Avaliação dos fatores de riscos e da exposição dos trabalhadores Estabelecimento de prioridades, metas e cronograma;</li>
                    <li>Acompanhamento das medidas de controle implementadas;</li>
                    <li>Monitorização da exposição aos fatores de riscos;</li>
                    <li>Registro e manutenção dos dados por no mínimo, vinte anos;</li>
                    <li>Avaliação periódica do programa.</li>
                  </ul>
                  <p className="article-paragraph">O PGR deve considerar os Níveis de Ação acima dos quais devem ser desenvolvidas ações preventivas, de forma a minimizar a probabilidade de ultrapassagem dos limites de exposição Ocupacional, implementando-se medidas para o monitoramento periódico da exposição, informação dos trabalhadores e o controle médico, observadas as seguintes definições:</p>
                  <ul className="article-paragraph-list">
                    <li>Limites de exposição Ocupacional: Valores de limites de tolerância previstos na NR-15 ou, na ausência destes, os valores limites de exposição Ocupacional adotados pela American Conference of Governamental Industrial Higyenists- ACGIH;</li>
                    <li>Níveis de Ação para agentes químicos: valores de concentração ambiental correspondentes à metade dos Limites de Exposição;</li>
                    <li>Níveis de açáo para ruído: valores correspondentes a dose de zero vírgula cinco (dose superior a cinquenta por cento), conforme critério da NR-15, Anexo 1, item 6.</li>
                  </ul>
                  <p className="article-subtitle">RESPONSABILIDADES DO TRABALHADOR</p>
                  <ul className="article-paragraph-list">
                    <li>Zelar pela sua segurança e saúde e de terceiros e colaborar para o cumprimento das disposições legais, inclusive das normas internas de segurança e saúde;</li>
                    <li>Comunicar ao superior hierárquico as situações que considerar representar riscos para sua segurança e saúde.</li>
                  </ul>
                  <p className="article-subtitle">DIREITO DOS TRABALHADORES:</p>
                  <ul className="article-paragraph-list">
                    <li>Interromper suas tarefas sempre que constatar evidências que representem riscos graves e iminentes para sua segurança e saúde ou de terceiros;</li>
                    <li>Serem informados sobre os riscos existentes nos locais de trabalho que possam afetar sua segurança e saúde.</li>
                  </ul>
                  <p className="article-subtitle">ORGANIZAÇÃO DOS LOCAIS DE TRABALHO:</p>
                  <ul className="article-paragraph-list">
                    <li>Locais construídos, equipados, utilizados e mantidos de forma que os trabalhadores possam desempenhar suas funções, eliminando ou reduzindo ao mínimo, praticável e factível, os riscos para sua segurança e saúde;</li>
                    <li>Postos de trabalho projetados e instalados segundo princípios ergonômicos;</li>
                    <li>Entradas identificadas com nome da empresa, acessos e estradas sinalizadas.</li>
                  </ul>
                  <p className="article-subtitle">MÁQUINAS, EQUIPAMENTOS, FERRAMENTAS E INSTALAÇÔES:</p>
                  <ul className="article-paragraph-list">
                    <li>Projetadas, montadas e mantidas em conformidade com as normas técnicas vigentes, instruções dos fabricantes e as melhorias desenvolvidas por profissionais habilitados;</li>
                    <li>Dispositivos de acionamento e parada: ser acionado ou desligado pelo operador na sua posição de trabalho;</li>
                    <li>Não se localizem na zona perigosa da máquina ou equipamento, nem acarretem riscos adicionais;</li>
                    <li>Possam ser acionados ou desligados, em caso de emergência, por outra pessoa que não seja o operador;</li>
                    <li>Não possam ser acionados ou desligados involuntariamente pelo operador ou de forma acidental;</li>
                    <li>Os equipamentos devem possuir proteção do operador contra exposição ao sol e chuva.</li>
                  </ul>
                  <p className="article-subtitle">FERRAMENTAS:</p>
                  <ul className="article-paragraph-list">
                    <li>Apropriadas ao uso a que se destinam, proibido o uso de defeituosas, danificadas ou improvisadas inadequadamente.</li>
                  </ul>
                  <p className="article-subtitle">MEDIDAS DE SEGURANÇA E OPERAÇÕES COM MÁQUINAS E EQUIPAMENTOS PESADOS:</p>
                  <ul className="article-paragraph-list">
                    <li>Isolar e sinalizar a área de atuação, sendo o acesso à área somente permitido mediante autorização de pessoa responsável;</li>
                    <li>Antes de iniciar partida e movimentação observar se não há ninguém próximo à zona de perigo;</li>
                    <li>Não operar em posição que comprometa sua estabilidade;</li>
                    <li>Indicação de capacidade máxima em local visível;</li>
                    <li>Cadeira confortável,	fixada de forma que sejam reduzidos os efeitos de transmissão das vibrações;</li>
                    <li>É proibido fazer manutenção, inspeção e reparos de qualquer equipamento sustentados por sistemas hidráulicos.</li>
                  </ul>
                  <p className="article-subtitle">PROTEÇÃO CONTRA POEIRA:</p>
                  <ul className="article-paragraph-list">
                    <li>Nos locais onde haja geração de poeiras na superfície deverá ser realizado monitoramento periódico da exposição dos trabalhadores, atravès de grupos homogêneos de exposição e das medidas de controle adotadas com registro de dados.</li>
                  </ul>
                  <p className="article-subtitle">INSTALAÇÕES ELÉTRICAS:</p>
                  <ul className="article-paragraph-list">
                    <li>Os cabos, instalações e equipamentos elétricos devem ser protegidos contra impactos, água e influência de agentes químicos;</li>
                    <li>Os equipamentos elétricos móveis devem ter aterramento;</li>
                    <li>As malhas, os pontos de aterramento e pára-raios devem ser revisados periodicamente e os resultados registrados;</li>
                    <li>Os quadros de dístribuişão elétrica devem ser devidamente fixados e aterrados e os locais de instalaçăo sinalizados, ventilados e protegidos contra impactos acidentais.</li>
                  </ul>
                  <p className="article-subtitle">PROTEÇÃO CONTRA INCÊNDIOS E EXPLOSÕES:</p>
                  <ul className="article-paragraph-list">
                    <li>Os equipamentos do sistema de combate a incêndio devem ser inspecionados periodicamente.</li>
                    <li>Todos os trabalhadores devem estar instruídos sobre prevenção e combate a princípios de incêndios, através do uso de extintores portáteis, e sobre noşões de prìmeiros socorros.</li>
                    <li>As malhas, os pontos de aterramento e pára-raios devem ser revisados periodicamente e os resultados registrados;</li>
                  </ul>
                  <p className="article-subtitle">OPERAÇÕES DE EMERGÊNCIA:</p>
                  <p className="article-paragraph">Elaborar, implementar e manter atualizado um piano de emergência, que inclua no mínimo, os seguintes requisitos:</p>
                  <ul className="article-paragraph-list">
                    <li>Identificação de seus riscos maiores</li>
                    <li>Normas e procedimentos para operações em caso de: incêndios, explosões ou acidentes maiores</li>
                    <li>Localização de equipamentos e materiais necessários para as operações de emergência e prestação de primeiros socorros;</li>
                    <li>Simulaşão periõdica de situações de salvamento com a mobilização	do contingente da empresa;</li>
                    <li>Definição do sistema de comunicação e sinalização de emergência;</li>
                    <li>Compete ao supervisor conhecer e divulgar os procedimentos do piano de emergência a todos os seus subordinados.</li>
                    <li>A empresa proporcionará treinamento anual específico à brigada de emergência, com aulas teóricas e aplicações práticas.</li>
                    <li>Devem ser realizadas, anualmente, simulações do plano de emergência com mobilização do contingente da empresa diretamente afetado.</li>
                  </ul>
                  <p className="article-subtitle">DISPOSIÇÕES GERAIS:</p>
                  <p className="article-paragraph">A empresa manterá instalações sanitárias tratadas e higienizadas destinadas à satisfaşăo das necessidades fisiológicas, próximas aos locais e frentes de trabalho.</p>
                  <br></br>
                  <p className="article-paragraph">As condições de conforto e higiene são as estabelecidas na NR-24. Nos locais e postos de trabalho deverá ser fornecido aos trabalhadores água potável em condişões de higiene.</p>
                  <p className="article-subtitle">MEDIDAS DE CONTROLE:</p>
                  <p className="article-paragraph">Sempre que forem verificadas uma ou mais das seguintes situaşoes:</p>
                  <ul className="article-paragraph-list">
                    <li>Identificação, na fase de antecipação, do risco potencial à saúde;</li>
                    <li>Constataçao, na fase de reconhecimento, de risco evidente à saúde;</li>
                  </ul>
                  <p className="article-paragraph">Quando, através do controle médico da saúde, ficar caracterizado o nexo causal entre danos observados na saúde dos trabalhadores e a situação de trabalho a que ficam expostos.</p>
                </article>
                <article className="article-container">
                  <h3 className="article-title">4. ESTRUTURA DO PROGRAMA</h3>
                  <p className="article-subtitle">PROGRAMA DE GERENCIOAMENTO DE RISCOS - PGR:</p>
                  <p className="article-paragraph">
                    Este documento representa a implementação do PGR - Programa de Gerenciamento de Riscos, estabelecido pela NR-1 (Portaria SEPRT n.° 6.730): 1.5.3.1. A organização deve implementar, por estabelecimento, o gerenciamento de riscos ocupacionais em suas atividades.<br/><br/>

                    1.5.3.1.1 O gerenciamento de riscos ocupacionais deve constituir um Programa de Gerenciamento de Riscos - PGR.<br/><br/>

                    1.5.3.1.1 A critério da organização, o PGR pode ser implementado por unidade operacional, setor ou atividade.<br/><br/>

                    1.5.3.1.2 O PGR pode ser atendido por sistemas de gestão, desde que estes cumpram as exigências previstas nesta NR e em dispositivos legais de segurança e saúde no trabalho.<br/><br/>

                    1.5.3.1.3 O PGR deve contemplar ou estar integrado com planos, programas e outros documentos previstos na legislação de segurança e saúde no trabalho" Segundo a NR-1, o PGR deve conter dois documentos base: Inventário de Riscos e Plano de Ação.<br/><br/>

                    1.5.7.1 O PGR deve conter, no mínimo, os seguintes documentos:<br/>
                    a) inventário de riscos; e<br/>
                    b) plano de ação.<br/><br/>

                    1.5.7.2 Os documentos integrantes do PGR devem ser elaborados sob a responsabilidade da organização, respeitado o disposto nas demais Normas Regulamentadoras, datados e assinados.<br/><br/>

                    1.5.7.2.1 Os documentos integrantes do PGR devem estar sempre disponíveis aos trabalhadores interessados ou seus representantes e à inspeção do Trabalho.<br/><br/>
                  </p>
                  <p className="article-subtitle">Sobre o inventário de riscos:</p>
                  <p className="article-paragraph">
                    Os riscos identificados e avaliados neste PGR — Programa de Gerenciamento de Riscos, foram formalizados em um inventário de riscos, da maneira estabelecida pela NR-1 (Portaria SEPRT n.° 6.730):<br/><br/>

                    1.5.7.3.1 Os dados da identificação dos perigos e das avaliações dos riscos ocupacionais devem ser consolidados em um inventário de riscos ocupacionais.<br/><br/>


                    1.5.7.3.2 O Inventário de Riscos Ocupacionais deve contemplar, no mínimo, as seguintes informações:<br/>

                    a) caracterização dos processos e ambientes de trabalho;<br/>
                    b) caracterização das atividades;<br/>
                    c) descrição de perigos e de possíveis lesões ou agravos à saúde dos trabalhadores, com a identificação das fontes ou circunstâncias, descrição de riscos gerados pelos perigos, com a índicação dos grupos de trabalhadores sujeitos a esses riscos, e descrição de medidas de prevenção implementadas;<br/>
                    d) dados da análise preliminar ou do monitoramento das exposições a agentes físicos, químicos e biológicos e os resultados da avaliação de ergonomia nos termos da NR-17.<br/>
                    e) 	avaliação dos riscos, incluindo a classificação para fins de elaboração do piano de ação; e<br/>

                    f) critérios adotados para avaliação dos riscos e tomada de decisão.<br/><br/>
                    1.5.7.3.3 O inventário de riscos ocupacionais deve ser mantido atualizado.<br/><br/>
                    1.5.7.3.3.1 O histórico das atualizações deve ser mantido por um período mínimo de 20 (vinte) anos ou pelo período estabelecido em normatização específica."<br/><br/>
                    A caracterizaçăo dos ambientes está disposta logo no início do inventário. O inventário de riscos está disposto por cargo. Na descrição dos cargos está disposto a caracterização dos processos e atividades.<br/>
                    Para compor o inventário de riscos, foram avaliados os níveis de riscos através da matriz de riscos definida. Para isso foi necessário avaliar os níveis de probabilidade e severidade de cada perigo e risco identificado, através de tabelas de gradações mencionadas em “2.DEFINIÇÖES E CRITÉRIOS DE RISCOS”.<br/>
                    O inventário de riscos, quando feito através de um sistema de gestão sofisticado, deve ser exposto de maneira listada, como é feito neste documento (de acordo com as recomendaşões da Fundacentro).
                  </p>
                  <p className="article-subtitle">SOBRE 0 PLANO DE AÇÃO:</p>
                  <p className="article-paragraph">
                    Após feito o lnventário de Riscos, foi consolidado um plano de ação para controle dos riscos ocupacionais necessários, como estabelecido pela NR-1 (Portaria SEPRT n.° 6.730):
                    “1.5.5.2.1 A organização deve elaborar plano de ação, indicando as medidas de prevenção a serem introduzidas, aprimoradas ou mantidas, conforme o subitem 1.5.4.4.5.<br/><br/>

                    1.5.5.2.2 Para as medidas de prevenção deve ser definido cronograma, formas de acompanhamento e aferição de resultados.”<br/><br/>
                    O modelo exposto neste documento é um cronograma de ações planejadas, onde cada ação tern sua descrição e data de planejamento. Na descrição de cada ação são informadas as medidas de prevenção com as respectìvas ações necessárias para controle e mitigação dos riscos ocupacionais.
                  </p>
                  <p className="article-subtitle">EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL</p>
                  <p className="article-paragraph">
                    EPI — Equipamento de Proteção Individual é considerado todo dispositivo ou produto, de uso individual utilizado pelo trabalhador, destinado á proteção de riscos suscetíveis de ameaçar a segurança e a saúde no trabalho.<br/><br/>

                    6.3 A empresa é obrigada a fornecer aos empregados, gratuitamente, EPI adequado ao risco, em perfeito estado de conservação e funcìonamento, nas seguintes circunstâncias:<br/>


                      a) sempre que as medidas de ordem geral não ofereçam completa proteção contra os riscos de acidentes do trabalho ou de doenşas profissionais e do trabalho;<br/>
                      b) enquanto as medidas de proteção coletiva estiverem sendo implantadas;<br/>
                      c) para atender a situações de emergência<br/><br/>

                    Todo EPI — Equipamento de Proteção Individual que for fornecido ao empregado, relativo a higiene e segurança no trabalho, como por exemplo, uniformes, botas, calçados especiais, luvas, óculos de segurança, protetores faciais e outros equipamentos de proteção individual (EPI’s), deve ser feito através de registro em ficha de fornecimento de EPI, assìnado pelo trabalhador, para atendimento aos requisitos estabelecidos na NR-6.
                  </p>
                  <p className="article-subtitle">6.6.1 Cabe ao empregador quanto ao EPI:</p>
                  <p className="article-paragraph">
                    a) adquirir o adequado ao risco de cada atividade;<br/>
                    b) exigir seu uso;<br/>
                    c) fornecer ao trabalhador somente o aprovado pelo órgão nacional competente em matéria de segurança e saúde no trabalho;<br/>
                    d) orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação;<br/>
                    e) substituir imediatamente, quando danificado ou extraviado;<br/>
                    f) responsabilizar-se pela higienização e manutenção periódica;<br/>
                    g) comunicar ao TEM qualquer irregularidade observada, e.<br/>
                    h) registrar o seu fornecimento ao trabalhador, podendo ser adotados livros, fichas ou sistema eletrônico.
                  </p>
                  <p className="article-subtitle">COMUNICAÇÃO DE ACIDENTE DO TRABALHO:</p>
                  <p className="article-paragraph"> Referente ao Comunicado de Acidente do Trabalho, o empregador deverá atentar-se à:<br/><br/>
                    i)A empresa deverá comunicar o acidente do trabalho, ocorrido com seu empregado, havendo ou não afastamento do trabalho, até o primeiro día útil seguinte ao da ocorrência e, em caso de morte, de imediato à autoridade competente, sob pena de multa variável entre o limite mínimo e o teto máximo do salário-de-contribuição, sucessivamente aumentada nas reincidências, aplicada e cobrada na forma do artigo 109 do Decreto no 2.173/97.<br/>
                    j) Deverão ser comunicadas ao INSS, mediante formulário "Comunicação de Acidente do Trabalho — CAT", as seguintes ocorrências:<br/>
                    k) Todos os casos com diagnóstico formado de doença profissional ou do trabalho devem ser objeto de emissão de CAT pelo empregador, acompanhada de relatório médico preenchido pelo médico do trabalho da empresa, médico assistente (serviço de saúde público ou privado) ou médico responsável pelo PCMSO (Programa de Controle Médico de Saúde Ocupacional — previsto na NR n° 7), com descrição da atividade e posto de trabalho para fundamentar o nexo causal e o técnico.<br/>
                    l) No caso de doença profissional ou do trabalho, a CAT deverã ser emitida após a conclusão do diagnóstico.<br/>
                    m) As reaberturas deverão ser comunicadas ao INSS pela empresa ou beneficiário, quando houver reinicio de tratamento ou afastamento por agravamento de lesão de acidente do trabalho ou doença ocupacional comunicado anteriormente ao INSS. 2.2 — Na CAT de reabertura deverao constar as mesmas informações da época do acidente, exceto quanto ao afastamento, último dia trabalhado, atestado médico e data da emissão, que serão relativos à data da reabertura. 3 - Comunicaşão de óbito 3.1 — O óbito decorrente de acidente ou doença ocupacional, ocorrido após a emissão da CAT inicial ou da CAT reabertura, será comunicado ao INSS através da CAT comunicação de óbito, constando a data do óbito e os dados relativos ao acidente inicial. Anexar a certidäo de óbito e quando houver o laudo de necropsia.
                  </p><br/>
                  <table className="article-table-info">
                    <thead>
                      <tr>
                        <th>Ocorrência</th>
                        <th>Tipo de CAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Acidente do trabalho, típico ou de trajeto, ou doença profissional ou do trabalho;</td>
                        <td>CAT Inicial</td>
                      </tr>
                      <tr>
                        <td>Reinicio de tratamento ou afastamento por agravamento de lesão de acidente do trabalho ou doença profissional ou do trabalho, jà comunicado anteriormente ao INSS;</td>
                        <td>CAT Reabertura</td>
                      </tr>
                      <tr>
                        <td>Falecimento decorrente de acidente ou doença profissional ou do trabalho, ocorrido após a emissão da CAT inicial.</td>
                        <td>CAT Comunicação de óbito</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
                <article className="article-container">
                  <h3 className="article-title">5. NIVEL DE AÇÃO E LIMITE DE TOLERÂNCIA</h3>
                  <p className="article-paragraph">
                    Chama-se nível de ação o valor acima do qual devem ser iniciadas açöes preventivas de forma a minimizar a probabilidade de que as exposições aos agentes ultrapassem os limites de exposição.
                  </p>
                  <p className="article-paragraph">
                    Para agentes químicos, o nível de ação é a metade dos limites de exposição, para o ruído, a dose superior a 50% do tempo máximo de exposição permitida do critério estabelecido na NR 15.
                  </p>
                  <p className="article-paragraph">
                    Não se deve confundir o Nîvel de Açăo com o Limite de Tolerância, este último quando superado, requer ações corretivas imediatas, enquanto que o primeiro ficará restrito às ações de ordem preventiva e atençäo.
                  </p>
                  <p className="article-subtitle">TABELAS PARA AVALIAÇÃO:</p>
                  <p className="article-paragraph">
                    As tabelas de gradação de severidade e probabilidade sugeridas são as tabelas da AIHA - American Industrial Hygiene Associaton, AS/NZS 4360 e European Comission (recomendadas pela Fundacentro). Todas elas possuem gradações de 1 a 5, que vão determinar a classificação da severidade e probabilidade.
                  </p>
                  <p className="article-paragraph">
                    As gradaçöes de probabilidade săo 5 (cinco): Rara (1); Pouco Provável (2); Possível (3); Provável (4) e Muito Provável (5). Nas avaliações qualitativas, de acordo com o controle e exposição ao risco, determina-se de 1 a 5 o nîvel de probabilidade. Em avaliações quantitativas, a probabilidade é classificada de acordo com a porcentagem do valor de exposição ao LEO - Limite de Exposição Ocupacional.
                  </p>
                  <p className="article-subtitle">MATRIZ DE RISCO UTILIZADA:</p>
                  <p className="article-paragraph">
                    A Matriz de Risco utilizada neste Programa de Gerenciamento de Riscos é uma matriz no formato 5x5, baseada nas estimativas de gradações de Severidade e Probabilidade da AIHA - American Industrial Hygiene Associaton, AS/NZS 4360 e European Comission (recomendadas pela Fundacentro). Esta matriz funciona para avalíações qualitativas e quantitativas, pois as tabelas de gradações sugeridas possuem as estimativas adequadas para ambas às avaliações.
                  </p>
                  <p className="article-paragraph">
                    Os níveis de risco presentes na matriz são 5 (cinco): Trivial (1-3); Tolerável (3-8); Moderado (4-12); Substancial (10-15) e lntolerável (15-25). Cada nîvel de risco possui o seu método de controle sugerido, baseado na estimativa (grau de certeza) da avaliaşão, onde os riscos de níveis mais altos têm prioridade de açăo.
                  </p>
                  <figure className="matriz-image">
                    <img src={matrizRisco} alt="matriz-de-risco" />
                    <figcaption>Imagem 01 - Matriz de risco baseada no modelo AIHA</figcaption>
                  </figure>
                  <p className="article-subtitle">MEDIDAS DE CONTROLE E AÇÃO:</p>
                  <p className="article-paragraph">
                    Os métodos de controle são classificados de acordo com o nível do risco e grau de certeza da estimativa da avaliação. Os níveis de risco mais altos devem ter prioridade na ação de controle. A ação de controle é classificada de acordo com a estimativa, que pode ser: certa (0); incerta (1) e altamente incerta (2).
                  </p>
                  <p className="article-paragraph">
                    Esta classificação padrão dos métodos de controle funciona apenas para o Inventário de Riscos e não deve ser adotada como método único para o Plano de Ação. Contudo, como as ações de controle serão feitas baseadas no inventário, estas classificações servem para definir a prioridade das ações. A tabela utilizada foi recomendada pela Fundacentro.
                  </p>
                  <figure className="matriz-image">
                    <img src={matrizPriorizacao} alt="matriz-de-risco" />
                    <figcaption>Imagem 02 - Matriz de prioridade definida através do risco</figcaption>
                  </figure>
                </article>
                <article className="article-container">
                  <h3 className="article-title">6. QUADRO FUNCIONAL</h3>
                  <p className="article-paragraph">
                    Para facilitar sistematizações realizadas neste programa, relaciona-se a seguir todas as funções existentes na empresa com a correspondente quantidade de profissionais que desempenham essas funções divididas por sexo e identificação preliminar simplificada dos perigos aos quais estes profissionais estão expostos.
                  </p>
                  <QuadroFuniocnal />
                </article>
              </section>
  )
}

export default BasePGR;