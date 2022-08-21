import axios from 'axios'

function SignIn({ checkHomeRedirect, showForm }) {
  function signIn(event) {
    event.preventDefault()
    let email = document.getElementById('emailSignIn').value
    let password = document.getElementById('passwordSignIn').value
    axios.post('/sign_in', {
      email: email,
      password: password
    }).then((response) => {
      console.log('response from server: ', response)
      window.location.href = '/'
    })
  }
  return (
    <div>
      {checkHomeRedirect()}
      {showForm &&
        <div className="login">
          <form onSubmit={signIn}>
            <label htmlFor="email">Email</label>
            <input id='emailSignIn'
              placeholder='Email'
              className="form-control"
              required />
            <br />
            <label htmlFor="password">Password</label>
            <input id='passwordSignIn'
              type='password'
              placeholder='Password'
              className="form-control" required />
            <br />
            <button type="submit">Sign In</button>
            <h6>Already have an account?</h6>
            <a href="#/SignUp">Create New Account</a>
          </form>
        </div>
      }
    </div>
  )
}

export default SignIn;
