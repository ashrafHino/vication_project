import { Router } from 'express';
import React from 'react';
import './App.css';
import Signin from './components/pages/forms/signin';
import Signup from './components/pages/forms/signup';
import infotable from './components/pages/forms/infotable'
import Home from './components/pages/home';
import Admintable from './components/pages/forms/admintable'
import Infotable from './components/pages/forms/infotable';
import {Button, Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link, Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Navbar expand="lg"  bg="dark" variant="dark" fixed="top">
            <a className='navbar-brand' href="#">daka-99</a>
            <div className='collapse navbar-collapse' id="navbarNav">
            <ul className='navbar-nav'>
              <li className='nav-item active'>
              <button className='nav-link btn btn-sm btn-outline-secondary' type="button">  <a href="http://localhost:3000">Home</a></button>
              </li>
              <li className='nav-item active'>
               <button className='nav-link btn btn-sm btn-outline-secondary' type="button"> <a href='http://localhost:3000/Signup'>Signup</a></button>
              </li>
              <li className='nav-item active'>
              <button className='nav-link btn btn-sm btn-outline-secondary' type="button">  <a href='http://localhost:3000/Signin'>Signin</a></button>
              </li>
            </ul>
            </div>
          </Navbar>
        </>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Admintable' element={<Admintable/>}/>
            <Route path="/infotable" element={<Infotable />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
