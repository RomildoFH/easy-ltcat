import React, { useMemo, useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');

  const values = useMemo(() => ({
    isLoading,
    setIsLoading,
    nomeEmpresa,
    setNomeEmpresa,
    cnpj,
    setCnpj,
  }), [isLoading, nomeEmpresa, cnpj])

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
