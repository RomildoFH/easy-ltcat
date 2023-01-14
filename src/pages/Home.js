import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import './Home.css';

function Home() {

  const {
    isLoading,
    setIsLoading,
    nomeEmpresa,
    setNomeEmpresa,
    cnpj,
    setCnpj,
  } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { name, type } = target;

    const value = type === "checkbox" ? target.checked : target.value;

    switch (name) {
      case "nomeEmpresa":
        setNomeEmpresa(value);
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

  return (
    <div className="page-container">
      <form id="search-form">
        <p>Bem vindo(a), por favor, insira o CNPJ da empresa da qual deseja visualizar o LTCAT</p>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="input-cnpj"
            placeholder="00.000.000/0001-00"
            name="cnpj"
            onChange={ handleChange } />
          <label htmlFor="input-cnpj">CNPJ</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="input-nome-empresa"
            placeholder="nome da empresa a ser consultada"
            name="nomeEmpresa"
            onChange={ handleChange } />
          <label htmlFor="input-nome-empresa">Nome da empresa</label>
        </div>
      </form>
    </div>
  )
}

export default Home;
