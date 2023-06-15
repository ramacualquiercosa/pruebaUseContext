import { createContext, useState} from "react";

//ACA ESTA EL CONTEXTO, LO ARME ASÍ PARA QUE PUEDA RETORNAR LAS VARIABLES DE ESTADO "CONTADOR" y "SETCONTADOR" A CUALQUIER COMPONENTE HIJO QUE ENVUELVA EL PROVIDER
export const ContadorContext = createContext()

//LO SEPARE EN UNA FUNCION APARTE PARA QUE SE APLIQUE A CUALQUIER COMPONENTE HIJO QUE NECESITE
function ContadorProvider({children}){
    const [contador, setContador] = useState(0)
    return(
        <ContadorContext.Provider value={{contador,setContador}}>
            {children}
        </ContadorContext.Provider>   
    )
}

export default ContadorProvider