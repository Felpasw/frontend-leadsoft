import { AxiosResponse } from "axios";
import { Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {Axios} from '../../Config/Axios'

//icons
import {IoMdContact} from 'react-icons/io'
import {GiWeightLiftingUp, GiBodyHeight} from "react-icons/gi"
import { FaWeightHanging } from "react-icons/fa";
import {AiFillEdit} from "react-icons/ai";
import {HiUserRemove} from "react-icons/hi";
import {VscPerson} from "react-icons/vsc"
//Toast
import { toast } from "react-toastify";

//Types
import {PeopleType, PeopleTypeIMC} from "../../@types/People";




export default function PeopleList(){
    const[People, setPeople] = useState([] as PeopleTypeIMC[]);
    const navigate = useNavigate();
   
    
    //--------------
    const getItems = async ()  => {
        await Axios.get('/api/v1/People/IMC').then((response: { data: React.SetStateAction<PeopleTypeIMC[]>; }) => setPeople(response.data))
    }
    //-------------
    useEffect(() =>{
        getItems();
      
     })
    //-------------
    const removePeople = async (id: string, name:string) =>{
        if(window.confirm(`Remover ${name}?`)){
            const DeleteResponse: AxiosResponse = await Axios.delete(`api/v1/People/${id}`)
            if(DeleteResponse.status = 200){
                toast.success("Pessoa removida com sucesso!")
            }
        }
        
        
    }

    //-------------

    return(
        <Fragment>
         <div className="row">
        { 
            People.map( (element:PeopleTypeIMC) =>
           
                <div className="col-3 d-flex p-2">
                        <div className="card text-primary" style={{width: "18rem", margin: 10}}  >
                            <div className="card-body float-none">
                                <h5 className="card-title"><IoMdContact/> {element.FullName} </h5>
                                <p className="card-text"><FaWeightHanging/> Peso: {element.Weigth}kg</p>
                                <p className="card-text"><GiBodyHeight/> Altura: {element.Height}m</p>
                                <p className="card-text"><VscPerson/> Idade: {element.Age} anos</p>
                                <p className="card-text"><GiWeightLiftingUp/> IMC: {element.IMC} kg/m²</p>
                                    <div className="text-center">
                                        <button 
                                        type="button" 
                                        className="btn btn-outline-primary"  
                                        onClick={() => navigate(`/edit/${element.Id}`)}> <AiFillEdit/> Editar</button>  
                                        <button 
                                        type="button" 
                                        className="btn btn-outline-primary"  
                                        onClick={() => removePeople(element.Id, element.FullName)}><HiUserRemove/> Remover</button>
                                    </div>
                              
                        </div>
                    </div>
                </div>
            )
        }
        </div>
    </Fragment>
)}