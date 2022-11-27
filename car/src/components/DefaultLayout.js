import React from 'react'
import {Menu,Dropdown,Button,Space,Row,Col} from "antd";
import { userLogin } from '../redux/actions/userActions';
//import Search from './Search';
//import {Route,Routes} from 'react-router-dom'

function DefaultLayout(props) {
  const user=JSON.parse(localStorage.getItem('user'))
 
  return (
    <><nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class=" navbar-brand" href="#">CARRentals</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active" >
            <a class="nav-link" href="/reservations">My Reservations<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/login">Logout<span class="sr-only">(current)</span></a>
          </li>
         
         
        </ul>
        
      </div>
    </nav><div className="content">
        {props.children}
      </div></>
    

  )
}

export default DefaultLayout