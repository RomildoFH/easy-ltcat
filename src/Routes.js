import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ltcat from './pages/Ltcat';
import Pgr from './pages/Pgr';


function Routers() {
  return (
    <Routes>
      <Route exact path="/easy-ltcat" element={ <Home /> } />
      <Route path="/easy-ltcat/ltcat" element={ <Ltcat /> } />
      <Route path="/easy-ltcat/pgr" element={ <Pgr /> } />
    </Routes>
  )
}

export default Routers;
