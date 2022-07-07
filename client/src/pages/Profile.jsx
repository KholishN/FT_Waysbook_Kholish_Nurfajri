import React from "react";
import "../style/Profile.css";

import NavbarCustomer from "../components/navbar/NavbarCustomer";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileBook from "../components/profile/ProfileBook";

function Profile() {
  return (
    <div className="profCont">
      <NavbarCustomer />
      <div className="profWarp">
        <h1 className="profTitle">Profile</h1>
        <ProfileCard />
        <h1 className="profTitle">My Books</h1>
        <ProfileBook />
      </div>
    </div>
  );
}

export default Profile;
