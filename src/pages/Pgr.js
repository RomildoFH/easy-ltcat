import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Pgr.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import BasePGR from '../components/Pgr/BasePGR';

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

  const textMedicoes = () => {
    let string = '';
    const newArray = empresa.medicoes;
    for (let index in newArray) {
      if (index < newArray.length - 2) {
        string += newArray[index] + ', ';
      } else if (index < newArray.length - 1) {
        string += newArray[index] + ' e '
      } else {
        string += newArray[index];
      }
    }
    return string;
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
