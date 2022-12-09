import { Fragment, useContext } from "react"
import Auth from "../../context/Auth"
import PeopleList from "../../Components/PeopleList";
import NavbarHome from "../../Components/NavbarHome";






export default function HomePage(){
    const{Authorized}:any = useContext(Auth);
    if(Authorized){
        return(
            <Fragment>
                <NavbarHome/>
                <PeopleList/>
            </Fragment>)   
    }
    else{
        return( <h1 className="text-light"> Entrada não autorizada! </h1>)
    }
    
    
   
}