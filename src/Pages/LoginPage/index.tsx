import { Fragment } from "react"

import Footer from "../../Components/Footer"
import FormLogin from "../../Components/FormLogin"
// import LeadSoftLogo from "@img/leadsoft_logotipo registrado_preenchimento oficial-claro.png"




const url = '../../img/leadsoft_logotipo registrado_preenchimento oficial-claro.png'

export default function LoginPage(){

    return(
<Fragment>
    <div style={{width: 4, height: 5}}>
        <img src={url}  alt="" style={{width: 'auto', textAlign: "center", height:5}}/>    
    </div>
    <FormLogin/>
    <Footer/>  
</Fragment>
)}