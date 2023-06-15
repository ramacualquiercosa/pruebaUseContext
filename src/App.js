import Contador from './components/Contador'
import ContadorTotal from './components/ContadorTotal'
import React from 'react';
import './App.css';
import Nav from './components/nav'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Nav/>
    <hr></hr>
    <Routes>
    <Route path="/" element={<Contador/>}/>
    <Route path="/contotal" element={<ContadorTotal/>}/>
    </Routes>
    </>
  );
}

export default App;
