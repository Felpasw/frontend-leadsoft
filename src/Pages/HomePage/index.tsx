import { Fragment, useContext } from "react"
import Auth from "../../context/Auth"
import PeopleList from "../../Components/PeopleList";
import NavbarHome from "../../Components/NavbarHome";
import Footer from "../../Components/Footer";
import ErrorPage from "../ErrorPage"
import { ToastContainer } from "react-toastify";






export default function HomePage(){
    const{Authorized}:any = useContext(Auth);
    if(Authorized){
        return(
            <Fragment>
                <NavbarHome/>
                <PeopleList/>
                <Footer/>
                <ToastContainer/>
            </Fragment>)   
    }
    else{
        return(<ErrorPage/>)
    }
    
    
   
}