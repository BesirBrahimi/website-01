import React from 'react';
import './projects.css';
import profiles from '../data';
import Profile from './Profile.jsx';

const Projects = () => {
  return (
    <div className="projects-profile">
      <h1 className='wall'>Wall of love</h1>
      <div className="profiles">
        {
          profiles.map((profile) => {
            return <Profile key={profile.id} {...profile}/>
          })
        }
      </div>
    </div>
  )
}

export default Projects