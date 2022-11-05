import { createContext, useState } from "react"



export let LoginContext= createContext(null)
let ContextProvider=({children})=>{

    let [account,setAccount]= useState('')
    return(
        <LoginContext.Provider
        value={{account,setAccount}}>
            {children}
        </LoginContext.Provider>
    )

}

export default ContextProvider