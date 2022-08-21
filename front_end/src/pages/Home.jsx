import Test from '../components/Test'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import NavBar from '../components/NavBar'

export default function Home({ user, checkLoginRedirect, proceed }) {

  return (
    <div className="App">
      {checkLoginRedirect()}
      {proceed &&
        <div>
          <NavBar />
          <h4>{user && <h4>Welcome, {user.first_name}</h4>}</h4>
        </div>
      }
    </div>
  )
}



