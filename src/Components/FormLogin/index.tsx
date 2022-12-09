import { Fragment, useContext, useState } from "react";
import{useNavigate} from 'react-router-dom'; 

import Button from '../Button';
import Axios from 'axios'
import {AxiosResponse} from 'axios';
import Spinner from "../Spinner";

//Icons
import {MdEmail} from 'react-icons/md';
import{RiLockPasswordFill} from 'react-icons/ri' 
// import Auth from "../../context/Auth";
// import Token from "../../context/Token";



interface Login{
    username: string,
    password: string
}


let ZeroState: Login ={
    username:'',
    password:''
}





export default function FormLogin(){
    // const {Authorized, setAuthorized}: any = useContext(Auth);
    // const {Tokenn, setToken}:any = useContext(Token);
    const [formValues, setFormValues] = useState(ZeroState);
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate()
//---------------------
    const handleChange = (e: { target: { name: string; value: string; }; }): void =>{
        let name  = e.target.name;
        let  value = e.target.value;
        setFormValues({...formValues, [name]: value});
       
    
      }
//-------------------
    const handleSubmit =  async () =>{
        setLoading(true)
        const Access: Login = {
            username:formValues.username,
            password: formValues.password
        }
        
        try {
            let LoginResponse: AxiosResponse = await Axios.post("http://peopletest.leadsoft.inf.br/api/v1/Auth/LogIn", Access);
            if (LoginResponse.status = 200) {
                // setAuthorized(true);
                // setToken(LoginResponse.data.Authorization);
                setLoading(false);
                navigate("/home");
                                
            }
        } catch (error) {
            console.log(error);
            alert("Usuário ou senha inválidos!");
            setLoading(false);
        }
       
    }


    
    return(
<Fragment>
    <div className="col-4 offset-md-4" >
        <form>
            <div className="input-group text-primary" style={{width: '100%'}}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" 
                        placeholder="name@example.com" 
                        onChange={handleChange} 
                        name = "username"/>
                    <label htmlFor="floatingInput"><MdEmail /> Email address</label>
                </div>
            </div>
            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="password" 
                className="form-control" 
                placeholder="name@example.com" 
                onChange={handleChange}
                name = "password"/>
                <label htmlFor="floatingInput"><RiLockPasswordFill /> Password</label>
            </div>
            <div className="col-8 offset-md-5">
                <button onClick={handleSubmit} type="button" className="btn btn-outline-primary" >Enter <Spinner loading={Loading} /></button>    
            </div>
        </form>
    </div>

</Fragment>)
}