import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from './context/AppContext';
import { useContext } from 'react';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import Routers from './Routes.js'
import './App.css';

function App() {
  const { isLoading, setIsLoading } = useContext(AppContext);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  return (
    <div className="App">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <Router>
          <Routers />
        </Router>
      )}
    </div>
  );
}

export default App;
