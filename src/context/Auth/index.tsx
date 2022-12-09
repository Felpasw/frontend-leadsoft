import React, { useState } from "react"


const  Authl = React.createContext({});

function Auth(props:{children:any}){
     const[Authorized, setAuthorized] = useState(false);

    return( 
    <Authl.Provider value ={{Authorized, setAuthorized}}>
            {props.children}
    </Authl.Provider>)
}
export default Auth;











