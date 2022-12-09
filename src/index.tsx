import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from "./Pages/LoginPage" 
import UsersPage from './Pages/UsersPage';
import HomePage from './Pages/HomePage';



 

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
    <React.StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/home" element={<HomePage />} />
         </Routes>
      </BrowserRouter>
    </React.StrictMode>
);


    






