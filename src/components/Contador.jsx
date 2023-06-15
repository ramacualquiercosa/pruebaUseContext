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
          <h1 className='p-5'>El contador parcial es {contador}</h1>
          <button className='p-5' onClick={handleChangeCounter}>BOTON PARA SUMAR</button>
        </div>
    )
}


export default Contador


