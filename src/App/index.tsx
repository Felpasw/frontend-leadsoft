
import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from "../Pages/LoginPage" 
import UsersPage from '../Pages/UsersPage';
import HomePage from '../Pages/HomePage';
import Auth from '../context/Auth';




export default function App(){

    const[Authorized, setAuthorized] = useState(false);
    return( 
        <React.StrictMode>
            <BrowserRouter>
                <Auth.Provider value ={{Authorized, setAuthorized}}>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/users" element={<UsersPage />} />
                        <Route path="/home" element={<HomePage />} />
                    </Routes>
                </Auth.Provider>
            </BrowserRouter>
       </React.StrictMode>  
       )
    
}