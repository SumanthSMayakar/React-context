import React,{createContext} from "react";
import UserAPI from "./API/UserAPI";


// context
export const GlobalContext = createContext(); // create context instance


//Provider
function GlobalProvider(props){

    const data = {
        userApi: UserAPI()
    }

    return(
       <GlobalContext.Provider value = {data}>
                    {props.children}
       </GlobalContext.Provider>
    )
}

export default GlobalProvider