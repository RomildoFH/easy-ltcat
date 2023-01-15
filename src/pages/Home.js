import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { listaEmpresas } from '../data/listaEmpresas';
import './Home.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function Home() {
  const {
    setIsLoading,
    nomeEmpresa,
    setNomeEmpresa,
    cnpj,
    setCnpj,
    setEmpresa,
  } = useContext(AppContext);

  const [validation, setValidation] = useState(true);

  const handleChange = ({ target }) => {
    const { name, type } = target;

    const value = type === "checkbox" ? target.checked : target.value;

    switch (name) {
      case "nomeEmpresa":
        setNomeEmpresa(value.toUpperCase());
        break;
      case "cnpj":
        setCnpj(
          value.replace(
            /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
            "$1.$2.$3/$4-$5"
          )
        );
        break;
      default:
        break;
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    const result = listaEmpresas.filter((empresa) => {
      return (empresa.nome === nomeEmpresa && empresa.cnpj === cnpj)
    });

    switch (result.length) {
      case 1:
        setEmpresa(result);
        setIsLoading(true);
        navigate('/easy-ltcat/ltcat');
        break;
    
      default:
        setValidation(false);
        break;
    }

    console.log(result);
    
  };

  return (
    <div className="page-container">
      <Header />
      <form id="search-form">
        <p>Bem vindo(a), por favor, insira o CNPJ da empresa da qual deseja visualizar o LTCAT</p>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="input-cnpj"
            placeholder="00.000.000/0001-00"
            name="cnpj"
            onChange={ handleChange }
            value={ cnpj } />
          <label htmlFor="input-cnpj">CNPJ</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="input-nome-empresa"
            placeholder="nome da empresa a ser consultada"
            name="nomeEmpresa"
            onChange={ handleChange }
            value={ nomeEmpresa } />
          <label htmlFor="input-nome-empresa">Nome da empresa</label>
        </div>
        <button type="button" className="btn btn-primary btn-lg" onClick={ handleClick }>Procurar</button>
        {
          !validation ? <p id="message-error-01">Desculpe, empresa não encontrada</p> : null
        }
      </form>

      <Footer />
    </div>
  )
}

export default Home;
