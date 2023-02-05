import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Pgr.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import BasePGR from '../components/Pgr/BasePGR';
import RiskAssesment from '../components/Pgr/riscos/RiskAssesment';
import RiskInventary from '../components/Pgr/inventario/RiskInventary';
import PlanoDeAcao from '../components/Pgr/plano-acao/PlanoAcao';
import QuadroObrigacoes from '../components/Pgr/quadro-de-obrigacoes/QuadroObrigacoes';
import AcompanhamentoAcidentes from '../components/Pgr/acompanhamento-acidentes/AcompanhamentoAcidentes';
import FichaEpi from '../components/Pgr/ficha-epi/FichaEpi';
import ProcedimentosEmergencia from '../components/Pgr/procedimentos-emergencia/ProcedimentosEmergencia';
import Responsabilidade from '../components/Pgr/responsabilidade/Responsabilidade';

function Pgr() {

  const {
    isLoading,
    empresa,
  } = useContext(AppContext);

  const mappingFuncoesNomes = () => {
    return empresa.cargos.map((cargo) => (
      <li key={ cargo.nome }>{cargo.nome}</li>
    ));
  }

  const navegate = useNavigate();

  const handleClick = ({target}) => {

    const { name } = target

    switch (name) {
      case 'home':
        navegate('/easy-ltcat')
        break;
      case 'print':
        window.print();
        break;
      default:
        break;
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div className="page-container">
      <div>
        <button name="home" className="btn btn-warning" onClick={handleClick}>Home</button>
        <button name="print" className="btn btn-warning" onClick={handleClick}>Imprimir</button>
      </div>
      <table className="main-container">
        <thead>
          <tr>
            <td>
              <Header />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="page-content">
            <td>
              <section className="cover-page">
                <div>
                  <h2 className="cover-title">{empresa.nome_fantasia}</h2>
                  <p className="cover-andress">{empresa.endereco}</p>
                </div>
                <div className="cover-functions">
                  <p>Funções</p>
                  <ul className="lista-funcoes-nomes">
                    {mappingFuncoesNomes()}
                  </ul>
                </div>
                <p>
                  <strong>{empresa.versao_do_laudo}</strong>
                </p>
              </section>
              <BasePGR />
              <RiskAssesment />
              <RiskInventary />
              <PlanoDeAcao />
              <QuadroObrigacoes />
              <AcompanhamentoAcidentes />
              <FichaEpi />
              <ProcedimentosEmergencia />
              <Responsabilidade />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <footer className="footer-space" />
            </td>
          </tr>
        </tfoot>
      </table>
      <Footer />
    </div>
  );
}

export default Pgr;
