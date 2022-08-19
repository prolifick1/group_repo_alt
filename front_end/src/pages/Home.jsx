import Test from '../components/Test'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

export default function Home({user}) {
  function signOut(){
    event.preventDefault()
    axios.post('/sign_out').then((respone)=>{
      window.location.href=""
    })
  }
  return (
    <div className="App">
      <Test />
      {user && <p>Welcome, {user.name}</p>}
      <SignUp />
      <SignIn />
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

