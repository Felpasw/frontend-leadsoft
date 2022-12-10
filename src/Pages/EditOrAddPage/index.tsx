import { useContext } from "react"
import { useParams } from "react-router-dom"
import FormEditOrAdd from "../../Components/FormEditOrAdd"
import Auth from "../../context/Auth"
import ErrorPage from "../ErrorPage"


export default function EditOrAddPage(){
    const Params = useParams()
    const{Authorized}:any = useContext(Auth)
    
    if(Authorized){
        if(Params){
            return(<FormEditOrAdd id={`${Params.id}`} /> )
        }
        else{
            return(<FormEditOrAdd/>)
        }
    }
   else{
    return(<ErrorPage/>)
   }
}