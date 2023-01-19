import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [empresa, setEmpresa] = useState({});
  const [laudo, setLaudo] = useState('ltcat');
  const [versaoDoLaudo, setVersaoDoLaudo] = useState('2022.1');

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    nomeEmpresa,
    setNomeEmpresa,
    cnpj,
    setCnpj,
    empresa,
    setEmpresa,
    laudo,
    setLaudo,
    versaoDoLaudo,
    setVersaoDoLaudo,
  }), [isLoading, nomeEmpresa, cnpj, empresa, laudo, versaoDoLaudo])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
