const { error } = require('console')
const { response } = require('express')
const express= require ('express')
const { request } = require('http')
const router = express.Router()
import Layout from './components/Router/Layout'
import Signin from './components/pages/forms/signin';
import Signup from './components/pages/forms/signup';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout (){
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">daka-99</a> 
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
           <button class="nav-link"> <Link to="/">Home</Link></button>
          </li>
          <li class="nav-item">
           <button class="nav-link"> <Link to="/register">Signup</Link></button>
          </li>
          <li class="nav-item">
           <button class="nav-link"> <Link to="/login">login</Link></button>
          </li>
        </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;