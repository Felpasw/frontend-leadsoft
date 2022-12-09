
import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from "../Pages/LoginPage" 
import HomePage from '../Pages/HomePage';
import Auth from '../context/Auth';
import EditOrAddPage from '../Pages/EditOrAddPage';




export default function App(){

    const[Authorized, setAuthorized] = useState(false);
    return( 
        <React.StrictMode>
            <BrowserRouter>
                <Auth.Provider value ={{Authorized, setAuthorized}}>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/new" element={<EditOrAddPage/>} />
                        <Route path= "/edit/:id" element= {<EditOrAddPage/>}/>
                        <Route path="/home" element={<HomePage />} />
                    </Routes>
                </Auth.Provider>
            </BrowserRouter>
       </React.StrictMode>  
       )
    
}