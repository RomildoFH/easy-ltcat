import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './Ltcat.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function Ltcat() {

  const {
    isLoading,
    setIsLoading,
    // empresa,
  } = useContext(AppContext);

  const empresa = {
    nome: 'EXPRESSO ETIQUETAS E BOBINAS LTDA-ME',
    nome_fantazia: 'EXPRESSO ETIQUETAS E BOBINAS',
    endereco: 'rua projetada, s/n, lote 08, quadra 103, Dom Helder Câmara, Garanhuns - PE',
    cnpj: '38.045.074/0001-17',
    ramo: 'Serviços de pré-impressão',
    data_da_pericia: '22/03/2022',
    horario_inicio: '09:00',
    horario_termino: '12:00',
    medicoes: ['pressão sonora', 'exposição ao calor', 'agentes químicos', 'biológicos'],
    escopo_pericia: ['Análise das tarefas executadas', 'Quantificação dos agentes', 'Análise das normas de segurança do trabalho', 'Análise dos sistemas de proteção individual adotados', 'Consulta as normas técnicas'],
    descricao_do_local: 'Área construída em alvenaria, vigas de concreto armado, coberta com telha de fibrocimento, onde estão instaladas as máquinas destinadas à serviço de pré-impressão de etiquetas.',
    cargos: [
      {
        nome: 'Serviços gerais',
        atividades: [
          'Operar máquinas na confecção de etiquetas de papel, como também',
          'Organizar o setor de trabalho',
          'Obs.: A tinta utilizada no processo produtivo é a base de água',
        ],
        agentes_nocivos: [
          {
            fisico: [
              {
                ruido: {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '84dB(A)',
                },
                calor: {
                  descricao: 'Dentro dos limites de tolerância',
                  quantidade: '',
                },
              }
            ]
          },
          {
            quimico: ['Não existe']
          },
          {
            biologico: ['Não existe']
          }
        ],
        epi: ['protetor auricular', 'luvas de malha de algodão pigmentadas', 'calçado de segurança'],
        epc: [''],
        tempo_exposicao: 'Ausência de Agentes Nocivos',
        exposicao: 'Não se expõem a nenhum agente físico, químico, biológico ou ergonômico, em níveis que venham a causar danos a sua saúde',
      }
    ],
    equpamentos: [
      {
        nome: 'Dosimetro',
        marca: 'Instrutherm',
        modelo: 'DOS-600',
        procedencia: 'americana',
      },
      {
        nome: 'Termômetro Digital Quest',
        marca: 'Quest',
        modelo: '',
        procedencia: '',
      },
    ],
    metodologia: [''],
  }

  useEffect = (() => {

  }, []);

  const mappingFuncoesNomes = () => {
    return empresa.cargos.map((cargo) => (
      <li key={ cargo.nome }>{cargo.nome}</li>
    ));
  }

  return (
    isLoading ? <p>Loading...</p> : (
      <table className="page-container">
        <thead><tr><td>
          <Header />
        </td></tr></thead>
        <tbody>
          <tr className="page-content">
            <td>
              <section className="cover-page">
                <div>
                  <h2>{ empresa.nome_fantazia }</h2>
                  <p>{ empresa.endereco }</p>
                </div>
                <div>
                  <p>Funções</p>
                  <ul className="lista-funcoes-nomes">
                    { mappingFuncoesNomes() }
                  </ul>
                </div>
                <p>{ empresa.data_da_pericia }</p>
              </section>
            </td>
          </tr>
          <tr className="page-content">
            <td>
              <section className="historico">
                <article className="article-container">
                  <h3 className="article-title">1. Histórico</h3>
                  <p className="article-paragraph">{ `Atendendo a solicitação da empresa ${empresa.nome}; situada na ${empresa.endereco}; ramo: ${empresa.ramo}; foi realizada perícia para verificar se as atividades exercidas por seus colaboradores enquadram-se à legislação vigente para fins de aposentadoria especial.` }</p>
                  <br />
                  <p className="article-paragraph">{ `A perícia baseou-se em realizar avaliações quantitativas e qualitativas dos agentes nocivos físicos, químicos e biológicos, ou grupos de agentes prejudiciais à saúde ou a integridade física do trabalhador para o preenchimento do formulário de informações sobre Atividades com Exposição a Agentes Agressivos - Aposentadoria Especial - Modelo do INSS - Instituto Nacional de Seguridade Social.` }</p>
                </article>
             </section>
            </td>
          </tr>
        </tbody>
        
        <Footer />
      </table>
    )
  )
}

export default Ltcat;
