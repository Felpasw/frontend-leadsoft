import { Fragment } from "react"

import Footer from "../../Components/Footer"
import FormLogin from "../../Components/FormLogin"




const url = "../../../"

export default function LoginPage(){

    return(
<Fragment>
    <div className="container text-center d-flex p-2" style={{width:800}}>
        <img src={require('../../Components/ImgLogin/leadsoft_logotipo-registrado_negativo-branco.png')} 
        style={{width: '100%', margin: 30, color:"blue"}} 
        alt="Unabled"/>    
    </div>
    <FormLogin/>
    <Footer/>  
</Fragment>
)}