import { AxiosResponse } from "axios";
import { Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {Axios} from '../../Config/Axios'

//icons
import {IoMdContact} from 'react-icons/io'
import { MdDateRange } from "react-icons/md";
import { FaWeightHanging } from "react-icons/fa";
import {GiBodyHeight} from 'react-icons/gi'
import { toast } from "react-toastify";


interface PeopleType{
    Id: string,
    Name: string,
    Surname: string,
    DateOfBirth: string
    Weigth: number,
    Height: number
}




export default function PeopleList(){
    const[People, setPeople] = useState([] as PeopleType[]);
    const navigate = useNavigate();
   
    
    //--------------
    const getItems = async ()  => {
        await Axios.get('/api/v1/People').then((response: { data: React.SetStateAction<PeopleType[]>; }) => setPeople(response.data))
    }
    //-------------
    useEffect(() =>{
        getItems();
      
     })
    //-------------
    const removePeople = async (id: string) =>{
        const DeleteResponse: AxiosResponse = await Axios.delete(`api/v1/People/${id}`)
        if(DeleteResponse.status = 200){
            toast.success("Data succesfully deleted!")
        }
        
    }

    //-------------

    return(
        <Fragment>
         <div className="row">
        { 
            People.map( (element:PeopleType) =>
           
                <div className="col-3">
                        <div className="card text-primary" style={{width: "18rem", margin: 10}}  >
                            <div className="card-body">
                                <h5 className="card-title"><IoMdContact/> {element.Name} </h5>
                                <h6 className="card-subtitle mb-2 text-muted">{element.Surname}</h6>
                                <p className="card-text"><FaWeightHanging/> Weight: {element.Weigth}kg</p>
                                <p className="card-text"><GiBodyHeight/> Height: {element.Height}m</p>
                                <p className="card-text">IMC: {element.Weigth / (element.Height*element.Height)} kg/m²</p>
                                <button type="button" className="btn btn-outline-primary"  onClick={() => navigate(`/edit/${element.Id}`)}>Edit</button>  
                                <button type="button" className="btn btn-outline-primary"  onClick={() => removePeople(element.Id)}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        }
        </div>
    </Fragment>
)}