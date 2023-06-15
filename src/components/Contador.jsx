import React, { useContext } from 'react';
import { ContadorContext } from '../context/contador';

//UN CONTADOR SIMPLE, CON UNA FUNCION HANDLE PARA CAPTURAR EL EVENTO ONCLICK Y ACTUALIZAR EL ESTADO GLOBAL
function Contador(){
  const {contador, setContador} = useContext(ContadorContext)


  function handleChangeCounter(){
    setContador(contador+1)
    return(
     contador
    )
   
  }
   
   return(
        <div>
          <h1>el contador total es{contador}</h1>
          <button onClick={handleChangeCounter}>BOTON</button>
        </div>
    )
}


export default Contador


