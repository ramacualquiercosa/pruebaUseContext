import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContadorProvider from './context/contador.jsx'
import {BrowserRouter} from 'react-router-dom'

//ACA CONSUMO PROVEO EL CONTEXTO PARA QUE SEA UTILIZABLE EN TODA LA APP
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ContadorProvider>
    <App />
  </ContadorProvider>
  </BrowserRouter>
);


