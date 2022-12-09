import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Auth from "../../context/Auth";





export default function NavbarHome(){
    const navigate = useNavigate();
    const {setAuthorized}:any = useContext(Auth);
    
    const LogOut = () =>{
        navigate("/");
        setAuthorized(false);
    }

    const AddNewPeople = () =>{
        navigate("/new");
    }

    return(
    <nav className="navbar bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={require("../../@img/leadsoft_lambda_gradiente-azul.png")} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{margin: 3}}/>
        Leadsoft <Button message ="LogOut" arrowFunction={LogOut}/> <Button message="Add new People" arrowFunction={AddNewPeople}/>
      </a>
    </div>
  </nav>
  )
}