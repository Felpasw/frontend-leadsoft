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
            <button></button>
            <p className="text-light" >ERROR <br />Looks like you're not authorized to enter here</p>
            <p className="text-light" style={{fontSize:200}}><FaSadTear/></p>  
            <button onClick={()=> navigate("/")} type="button" className="btn btn-outline-primary" > Back home</button> 
        </div>
        <Footer/>
    </Fragment>
    )
}