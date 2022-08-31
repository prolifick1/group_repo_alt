import NavBar from '../components/NavBar'
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Dashboard from './Dashboard';


export default function Home({ user, checkLoginRedirect, proceed }) {

  return (
    <div
      className='board_div'>
      <div className="welcome">
        {checkLoginRedirect()}
        {proceed &&
          <h4>{user && <h4>Welcome, {user.first_name}</h4>}</h4>
        }
        <Dashboard user={user} />
      </div>
    </div>

  );
}







