import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Header.css';

function Header() {
  const { laudo } = useContext(AppContext);
  const subtitle = () => {
    switch (laudo) {
      case 'ltcat':
        return 'Laudo Técnico das Condições Ambientes de Trabalho';
      case 'pgr':
        return 'Programa de Gerenciamento de Riscos';
        case 'pcmso':
          return 'Programa de Controle Médico e Saúde Ocupacional';
      default:
        break;
    }
  }
  return (
    <header className="container-header">
      <h1>{laudo.toUpperCase()}</h1>
      <p>{subtitle()}</p>
    </header>
  )
}

export default Header;
