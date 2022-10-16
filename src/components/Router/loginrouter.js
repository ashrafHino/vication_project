const { error } = require('console')
const { response } = require('express')
const express= require ('express')
const { request } = require('http')
const router = express.Router()
import Layout from './components/Router/Layout'
import Signin from './components/pages/forms/signin';
import Signup from './components/pages/forms/signup';
import { Outlet, Link } from "react-router-dom";

function Layout (){
  return (
    <>
      <nav>
        <ul>
          <li>
           <button> <Link to="/infotable">infotable</Link></button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;