import { Fragment } from "react"
import { ToastContainer } from "react-toastify"

import Footer from "../../Components/Footer"
import FormLogin from "../../Components/FormLogin"



export default function LoginPage(){

    return(
<Fragment>    
    <div className="container text-center d-flex p-2" style={{width:800}}>
        <img src={require('../../@img/logoBranco.png')} 
        style={{width: '100%', margin: 30, color:"blue"}} 
        alt="Unabled"/>    
    </div>
    <FormLogin/>
    <Footer/>  
    <ToastContainer/>
</Fragment>
)}