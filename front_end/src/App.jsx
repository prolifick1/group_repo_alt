import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import TestPage from './pages/TestPage'

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
  console.log(user)

  function signOut(){
    console.log('sign out request')
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }


  async function curr_user(){
    const response = await axios.get('curr_user')
    const user = response.data && response.data[0] && response.data[0].fields
    setUser(user)
  }

  useEffect(()=>{
    curr_user()
  },[])

  return (
    <div>

    <NavBar user={user} signOut={signOut}/>
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route exact path='/dashboard' element={<Dashboard user={user}  /> } />

        <Route path='*' element={<NotFound /> } />
        <Route path='/test' element={<TestPage /> } />
      </Routes>
    </HashRouter>
    </div>
  )
}

export default App
