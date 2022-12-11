import {  AxiosResponse } from "axios";

import { Fragment, useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//Types
import PeopleType from "../../@types/People";
//Axios
import { Axios } from "../../Config/Axios";

//icons
import Spinner from "../Spinner";
import{TbSend} from "react-icons/tb"


const ZeroState: PeopleType = {
        Name: "",
        Surname: "",
        DateOfBirth: "",
        Weigth: 0,
        Height: 0
} 

export default function FormEditOrAdd(props:{id:string}){
    const [formValues, setFormValues] = useState( ZeroState as PeopleType)
    const [loading, isLoading] = useState(false);
    const navigate = useNavigate();

   

    const handleSubmit =  async () =>  {
       if (formValues.Name && formValues.DateOfBirth && formValues.Height && formValues.Surname && formValues.Weigth){   
            const People: PeopleType= {
	                Name: formValues.Name,
	                Surname: formValues.Surname,
	                DateOfBirth: formValues.DateOfBirth,
	                Weigth: Number(formValues.Weigth),
	                Height: Number(formValues.Height)
	            }
	            isLoading(true);
                if(People.Weigth  == 0 || People.Height == 0){
                    toast.error("Peso e altura devem ser maiores que 0!")
                    isLoading(false)
                }
                else{
                    if(props.id !=="c"){
	                    const PutResponse: AxiosResponse =  await Axios.put(`/api/v1/People/${props.id}`, People);
	                        if(PutResponse.status = 200){
	                            toast.success("Pessoa editada com sucesso!");
	                            isLoading(false);
	                        } 
	                }   
	                else{
	                    const PostResponse: AxiosResponse = await Axios.post("/api/v1/People", People)
	                    isLoading(false);
	                    if (PostResponse.status = 200){
	                        toast.success("Pessoa enviada com sucesso!")
	                    }
	                
	                
                    }
                }
	               
        }
        else{
            toast.error("Por favor, preencha todos os campos!")
        }
           
}
       
    


    //-------------
    const getItem = async (id:string) =>{
         const getResponse = await Axios.get(`/api/v1/People/${id}`)
         console.log(getResponse)
         return getResponse
        
    }
    //-------------+-


    useEffect(() => { 
        if(props.id){
            getItem(props.id).then((res: AxiosResponse) => setFormValues(res.data))
            
          }
    }, [])
   
    //-------------

    const handleChange = (e: { target: { name: string; value: string; }; }): void =>{
        let name  = e.target.name;
        let  value = e.target.value;
        setFormValues({...formValues, [name]: value});
        console.log(name, value)
      }
    //-------------
    
    return(
<Fragment>  
        
        <div className="text-center">
            <img src={require("../../@img/logoBranco.png")} style={{width:300, margin: 30}}/>
        </div>
        <div className="col-4 offset-md-4" >
        <form>
            <div className="input-group text-primary" style={{width: '100%'}}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control"  
                        onChange={handleChange} 
                        name = "Name" value={formValues.Name}/>
                    <label htmlFor="floatingInput"> Nome</label>
                </div>
            </div>

            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="text" 
                className="form-control" 
                onChange={handleChange}
                name = "Surname" value={formValues.Surname}/>
                <label htmlFor="floatingInput"> Sobrenome</label>
            </div>

            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="date" 
                className="form-control"  
                onChange={handleChange}
                name = "DateOfBirth" value={formValues.DateOfBirth}/>
                <label htmlFor="floatingInput"> Data de nascimento</label>
            </div>
            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="number" 
                className="form-control" 
                onChange={handleChange}
                name = "Weigth" 
                value={formValues.Weigth}/>
                <label htmlFor="floatingInput"> Peso </label>
            </div>
            
            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="number" 
                className="form-control" 
                onChange={handleChange}
                name = "Height" 
                value={formValues.Height}/>
                <label htmlFor="floatingInput"> Altura </label>
            </div>
            <div className="col-8 offset-md-4">
                <button onClick={handleSubmit} type="button" className="btn btn-outline-primary"  style={{margin: 3}}> <TbSend/> Enviar <Spinner loading={loading} /></button>    
                <button onClick={() => navigate("/home")} type="button" className="btn btn-outline-primary" > <ImCancelCircle/> Cancelar </button> 
            </div>
        </form> 
    </div>
</Fragment>
    )
}
