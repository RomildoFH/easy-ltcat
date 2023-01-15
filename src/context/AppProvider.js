import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [empresa, setEmpresa] = useState({});
  const [laudo, setLaudo] = useState('ltcat');

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
  }), [isLoading, nomeEmpresa, cnpj, empresa, laudo])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
