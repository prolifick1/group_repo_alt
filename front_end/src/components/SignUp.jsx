import axios from 'axios'

function SignUp(){
    function signUp(){
        // this will come into effect once the it's a form to submit not a button you'll use get elementbyid().value to get the form values
        event.preventDefault()
        let name=document.getElementById('name').value
        let email=document.getElementById('email').value
        let password=document.getElementById('password').value
        axios.post('/sign_up', {
          name: name,  
          email: email, 
          password: password
        }).then((response)=>{
            // usenavigate
          document.location.href='/'
          console.log('response from server: ', response)
        })
      }
      return(
          <div>
              <label>First Name</label>
              <input id='name' placeholder='ex: pacho'/>
              <br/>
              <label>Email</label>
              <input id='email' placeholder='ex: pancho@gmail.com'/>
              <br/>
              <label>Password</label>
              <input id='password'/>
              <br/>
              <button onClick={signUp}>Sign Up</button>
          </div>
      )
}

export default SignUp