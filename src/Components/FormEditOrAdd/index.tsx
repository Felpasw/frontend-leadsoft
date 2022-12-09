import { AxiosError, AxiosResponse } from "axios";
import { Fragment, useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import PeopleType from "../../@types/People";
import { Axios } from "../../Config/Axios";
import NavbarHome from "../NavbarHome";
import Spinner from "../Spinner";

const ZeroState: PeopleType = {
        Id: "",
        Name: "",
        Surname: "",
        DateOfBirth: "",
        Weigth: 0,
        Height: 0
} 

export default function FormEditOrAdd(props:{id?:string}){
    const [formValues, setFormValues] = useState( ZeroState as PeopleType)
    const [loading, isLoading] = useState(false)
    const navigate = useNavigate()
   

    const handleSubmit =  async () =>  {
        const People = {
            Name: formValues.Name,
            Surname: formValues.Surname,
            DateOfBirth: formValues.DateOfBirth,
            Weight: formValues.Weigth,
            Height: formValues.Height
        }
        isLoading(true);
        try {
            if(props.id){
                const PutResponse: AxiosResponse =  await Axios.put(`/api/v1/People/${props.id}`, People);
                    if(PutResponse.status = 200){
                        alert("Data succesfully edited!");
                        isLoading(false);
                    } else{
                        return PutResponse.data
                    }
            }
            else{
                const PostResponse: AxiosResponse = await Axios.post("/api/v1/People", People)
                isLoading(false);
                if (PostResponse.status = 200){
                    alert("Data succesfully sended!")
                }
                else{
                    return PostResponse.data
                }
            }
        } catch (error) {
            alert("Failed to send the form!\n" + error);
            isLoading(false);
        }
        
         
           
        }
       
    


    //-------------
    const getItem = async (id:string) =>{
         const getResponse = await Axios.get(`/api/v1/People/${id}`)
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
      }
    //-------------
    
    return(
<Fragment>
        <NavbarHome/>
        <button onClick={() => navigate("/home")} type="button" className="btn btn-outline-primary" >  <ImCancelCircle/> <Spinner loading={loading} /></button> 
        <div className="col-4 offset-md-4" >
        <form>
            <div className="input-group text-primary" style={{width: '100%'}}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control"  
                        onChange={handleChange} 
                        name = "Name" value={formValues.Name}/>
                    <label htmlFor="floatingInput"> Name</label>
                </div>
            </div>

            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="text" 
                className="form-control" 
                onChange={handleChange}
                name = "Surname" value={formValues.Surname}/>
                <label htmlFor="floatingInput"> Surname</label>
            </div>

            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="date" 
                className="form-control"  
                onChange={handleChange}
                name = "DateOfBirth" value={formValues.DateOfBirth}/>
                <label htmlFor="floatingInput"> Date of Birth</label>
            </div>
            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="text" 
                className="form-control" 
                onChange={handleChange}
                name = "Weight" value={formValues.Weigth}/>
                <label htmlFor="floatingInput"> Weight</label>
            </div>
            
            <div className="form-floating mb-3 text-primary "style={{width: '100%'}}>
                <input type="text" 
                className="form-control" 
                onChange={handleChange}
                name = "Height" 
                value={formValues.Height}/>
                <label htmlFor="floatingInput" > Height </label>
            </div>
            <div className="col-8 offset-md-5">
                <button onClick={handleSubmit} type="button" className="btn btn-outline-primary" > Send <Spinner loading={loading} /></button>    
            </div>
        </form>
    </div>
</Fragment>
    )
}
