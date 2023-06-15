import React, {useContext} from 'react'
import { ContadorContext } from '../context/contador';
 

//ESTE COMPONENTE MUESTRA LOS CONTEOS TOTALES DEL ESTADO CONTADOR
 function ContadorTotal() {
    const {contador} = useContext(ContadorContext) 
    
  return (
    <div className='p-5'>ContadorTotal: {contador}</div>
  )
}

export default ContadorTotal