import { Fragment, useContext, useEffect } from "react"
import Auth from "../../context/Auth"







export default function HomePage(){
    const{Auhorized}:any = useContext(Auth);
    if(Auhorized){
        return(
            <Fragment>
                <h1 className="text-light">HomePage </h1>
            </Fragment>)
        
    }
    else{
        return( <h1 className="text-light"> Entrada não autorizada! </h1>)
    }
    
    
   
}