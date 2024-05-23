import React from 'react'
import './CSS/Login.css'
function Login() {
  return (
    <div className='logmain'>
      <div className="login">
     <h1>Sign Up</h1>
     <div className="form">
      <div className="fields">
      <input type='text' placeholder="You'r Name"/>
      <input type='email' placeholder="Email Address"/>
      <input type='password' placeholder="Password"/>
      </div>
      <div className="buttonbox">
      <button className='continue'>
        Continue
      </button>
      </div>
      <div className="already">
      <p>Already have an account?</p><a href='#'>Login here</a>
      </div>
      <div className="check">
      <input type='checkbox'/><p>By continuing I agree to the terms of use & Service policy</p>
      </div>

     </div>

</div>
    </div>
  )
}

export default Login
