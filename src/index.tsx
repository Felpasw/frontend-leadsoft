import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LoginPage from "./Pages/LoginPage" 
import UsersPage from './Pages/UsersPage';
import HomePage from './Pages/HomePage';
import App from './App';


 

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
    <App/>
);


    






