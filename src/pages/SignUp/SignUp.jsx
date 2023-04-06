import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup">
      <div className="left-signup">
        <h2>Join the Computer Science <br />
        School newsletter</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, error itaque!</p>
        <div className="input-button">
          <input type="text" name="input" id="input" placeholder='Enter your email...' />
          <button>Submit</button>
        </div>
        <p className='reserved'>@2022 Webflow University, All right Reserved</p>
      </div>
      <div className="right-signup">
        <div className="learn-left">
          <h3>Learn</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Hooks</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Sql</li>
          </ul>
        </div>
        <div className="company-right">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Pricing</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SignUp