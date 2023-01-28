import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './pages/login';
import Account from './pages/account';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="account" element={<Account/>}></Route>
      </Routes>
    </BrowserRouter>
);

