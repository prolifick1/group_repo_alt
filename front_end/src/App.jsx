import { useEffect, useState } from 'react'
import axios from 'axios';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Test from './components/Test';
import './App.css'


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

  function signOut(){
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
    <div className="App">
      {user && <p>Welcome, {user.name}</p>}
      <SignUp />
      <SignIn />
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default App
