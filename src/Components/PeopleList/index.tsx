import { Fragment, useEffect, useState } from "react"
import {Axios} from '../../Config/Axios'
import Button from "../Button";


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

   const getItems = async ()  => {
    
    await Axios.get('/api/v1/People').then((response: { data: React.SetStateAction<PeopleType[]>; }) => setPeople(response.data));
    
  }

  useEffect(() =>{
    getItems();
    console.log(People);
  })

// const removePeople(){

// }



    return(
        <Fragment>
         <div className="row">
        { 
            People.map( (element:PeopleType) =>
           
                <div className="col-3">
                        <div className="card text-primary" style={{width: "18rem", margin: 10}}  >
                        <div className="card-body">
                        <h5 className="card-title">{element.Name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{element.Surname}</h6>
                        <p className="card-text">Age Of Birth: {element.DateOfBirth}</p>
                        <p className="card-text">Weight: {element.Weigth}</p>
                        <p className="card-text">Height: {element.Height}</p>
                            <Button message="Edit"/>   
                            <Button message="Remove"/>  
                        </div>
                    </div>
                </div>
            )
        }
        </div>
    </Fragment>
)}