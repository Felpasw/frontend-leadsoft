import { Fragment } from "react";
import {FaSadTear} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";


export default function ErrorPage(){
    const navigate = useNavigate()
    return(
    <Fragment>
        <div className="text-center">
            <img src={require("../../@img/logoBranco.png")} alt="" style={{width: 400}}/>
            <p className="text-light" >ERROR <br />Parece que você não está autorizado para entrar aqui.</p>
            <p className="text-light" style={{fontSize:200}}><FaSadTear/></p>  
            <button onClick={()=> navigate("/")} type="button" className="btn btn-outline-primary" > Voltar</button> 
        </div>
        <Footer/>
    </Fragment>
    )
}