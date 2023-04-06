import React from 'react'
import "./courses.css";
import logo2 from '../../assets/photo-home.png'
import users from '../../assets/Users.png'

const Courses = () => {
  return (
    <div className="courses-home">
      <div className="left">
        <div className="first-half">
          <button>Featured Course</button>
          <h1>Introduction to <br />
           computer science</h1>
        </div>
        <div className="second-half">
          <div className="button-users">
            <button>Start learning for free</button>
            <img src={users} alt="users" />
          </div>
        </div>
        <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, culpa officia laboriosam voluptatibus aliquam cumque.</p>
      </div>
      <div className="right">
        <img src={ logo2 } alt="right-logo" />
      </div>
    </div>
  )
}

export default Courses