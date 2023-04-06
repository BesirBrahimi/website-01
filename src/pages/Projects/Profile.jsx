import React from "react";
import "./projects.css";

const Profile = ({ img, name, email, desc, time }) => {
  return (
    <div className="profile-user">
      <div className="photo-name">
          <img className="photo" src={img} alt="" />
        <div className="name-email">
          <h5>{name}</h5>
          <p>{email}</p>
        </div>
      </div>
      <div className="desc-time">
        <p>{desc}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Profile;
