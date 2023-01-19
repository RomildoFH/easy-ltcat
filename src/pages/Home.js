import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { listaEmpresas } from '../data/listaEmpresas';
import './Home.css';
import Header from '../components/Header/Header';

function Home() {
  const {
    nomeEmpresa,
    setNomeEmpresa,
    cnpj,
    setCnpj,
    setEmpresa,
    laudo,
    setLaudo,
    versaoDoLaudo,
    setVersaoDoLaudo,
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
      case "laudo":
        setLaudo(value);
        break;
      case "versaoDoLaudo":
        setVersaoDoLaudo(value);
        break;
      default:
        break;
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    const result = listaEmpresas.filter((empresa) => {
      return (empresa.nome === nomeEmpresa && empresa.cnpj === cnpj && empresa.versao_do_laudo === versaoDoLaudo)
    });

    switch (result.length) {
      case 1:
        setEmpresa(result[0]);
        navigate(`/easy-ltcat/${laudo}`);  
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
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Laudo</legend>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="laudo" id="laudo1" value="ltcat" onChange={handleChange} checked={laudo === 'ltcat'} />
            <label className="form-check-label" htmlFor="laudo1">
              LTCAT
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="laudo" id="laudo2" value="pgr" onChange={handleChange} checked={laudo === 'pgr'} />
            <label className="form-check-label" htmlFor="laudo2">
              PGR
            </label>
          </div>
          {/* <div className="form-check">
            <input className="form-check-input" type="radio" name="laudo" id="laudo3" value="pcmso" onChange={handleChange} checked={laudo === 'pcmso'} />
            <label className="form-check-label" htmlFor="laudo3">
              PCMSO
            </label>
          </div> */}
        </fieldset>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="input-versao-laudo"
            placeholder="2022.1"
            name="versaoDoLaudo"
            onChange={ handleChange }
            value={ versaoDoLaudo } />
          <label htmlFor="input-versao-laudo">Versão do Laudo Ex.: 2022.1</label>
        </div>
        <button type="button" className="btn btn-primary btn-lg" onClick={ handleClick }>Procurar</button>
        {
          !validation ? <p id="message-error-01">Desculpe, o CNPJ, Nome de Empresa ou Versão do Laudo não consta em nosso sistema</p> : null
        }
      </form>
    </div>
  )
}

export default Home;
