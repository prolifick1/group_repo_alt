import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common['X-CSRFToken']= csrftoken

function App() {
  const [user, setUser] = useState(null)


  async function curr_user(){
    const response = await axios.get('curr_user')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  useEffect(()=>{
    curr_user()
  },[])

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home /> } />
      </Routes>
    </HashRouter>
  )
}

export default App
