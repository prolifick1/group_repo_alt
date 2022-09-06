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
        <Dashboard user={user} checkLoginRedirect={checkLoginRedirect} proceed={proceed} />
    </div>

  );
}







