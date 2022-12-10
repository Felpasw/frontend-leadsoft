import { Fragment, useContext } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Footer from "../../Components/Footer"
import FormEditOrAdd from "../../Components/FormEditOrAdd"
import NavbarHome from "../../Components/NavbarHome"
import Auth from "../../context/Auth"
import ErrorPage from "../ErrorPage"


export default function EditOrAddPage(){
    const Params = useParams()
    const{Authorized}:any = useContext(Auth)
    
    if(Authorized){
        if(Params.id){
            return(
            <Fragment>
                <NavbarHome/>
                <FormEditOrAdd id={`${Params.id}`} /> 
                <Footer/>
                <ToastContainer/>
            </Fragment>
            )
        }
        else{
            return(
            <Fragment>
                <NavbarHome/>
                <FormEditOrAdd id = "c"/>
                <Footer/>
                <ToastContainer/>
            </Fragment>
            
            
           )
        }
    }
   else{
    return(<ErrorPage/>)
   }
}