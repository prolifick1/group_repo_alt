import axios from 'axios'

function SignUp({ showForm, checkHomeRedirect }) {
  function signUp(event) {
    // this will come into effect once the it's a form to submit not a button you'll use get elementbyid().value to get the form values
    event.preventDefault()
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let jobTitle = document.getElementById('jobTitle').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    axios.post('/sign_up', {
      firstName: firstName,
      lastName: lastName,
      jobTitle: jobTitle,
      email: email,
      password: password
    }).then((response) => {
      // usenavigate
      document.location.href = '#/signin'
      console.log('response from server: ', response.data.message)
    })
  }
  return (
    <div>
      {checkHomeRedirect()}
      {showForm && (
        <div className="signup">
          <form onSubmit={signUp}>
            <label htmlFor="firstName">First Name </label>
            <input
              id="firstName"
              placeholder="ex: pacho"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="lastName">Last Name </label>
            <input
              id="lastName"
              placeholder="ex: villa"
              className="form-control"
              required
            />
            <br />
            <label>Job Title: </label>
            <input
              id="jobTitle"
              placeholder="ex: engineer"
              className="form-control"
              required
            />
            <br />
            <label>Email: </label>
            <input
              id="email"
              placeholder="ex: pancho@gmail.com"
              className="form-control"
              required
            />
            <br />
            <label>Password: </label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />
            <br />
            <div className="signin1">
              <button type="submit">Sign Up</button>
            </div>
            <p>Already have an Account?</p>
            <a href="#/signin">LOG IN</a>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp
