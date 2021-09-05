import React from "react";
import avatar from "../../img/avatar1.jpeg";
const Profile = () => {
  return (
    <div className="profile">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Profile;
