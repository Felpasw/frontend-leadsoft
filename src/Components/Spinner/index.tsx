import {ImSpinner2} from 'react-icons/im';


export default function Spinner(props:{loading:boolean}){
    if(props.loading){
        return(<ImSpinner2/>)
    }
    else{
        return (<></>)
    }
}