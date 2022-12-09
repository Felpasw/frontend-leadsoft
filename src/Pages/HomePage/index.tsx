import { Fragment, useContext, useEffect } from "react"
import Auth from "../../context/Auth"


// const getItems = async (){

// }


export default function HomePage(){
    // const {Authorized, setAuthorized}: any = useContext(Auth);



    // if(Authorized){
        return(
            <Fragment>
                <h1 className="text-light">HomePage </h1>
            </Fragment>)
    // }
    // else{
        return(<h1>Não autorizado!</h1>)
    // }
    
    
    
   
}