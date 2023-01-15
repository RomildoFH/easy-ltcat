import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';
import { listaEmpresas } from '../data/listaEmpresas';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nomeEmpresa, setNomeEmpresa] = useState('EXPRESSO ETIQUETAS E BOBINAS LTDA-ME');
  const [cnpj, setCnpj] = useState('38.045.074/0001-17');
  const [empresa, setEmpresa] = useState(listaEmpresas[0]);

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    nomeEmpresa,
    setNomeEmpresa,
    cnpj,
    setCnpj,
    empresa,
    setEmpresa,
  }), [isLoading, nomeEmpresa, cnpj, empresa])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
