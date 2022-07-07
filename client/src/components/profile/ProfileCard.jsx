import React from "react";

import Mail from "../../assets/mail.png";
import Gender from "../../assets/gender.png";
import Phone from "../../assets/phone.png";
import Maps from "../../assets/maps.png";

import Photo from "../../assets/default-photo.png";

import ModalEdit from "./ModalEdit";

function ProfileCard() {
  return (
    <div className="profTop">
      <div className="profCard-left">
        <ul className="profile-icon">
          <li>
            <img src={Mail} alt="mail" />
          </li>
          <li>
            <img src={Gender} alt="gender" />
          </li>
          <li>
            <img src={Phone} alt="phone" />
          </li>
          <li>
            <img src={Maps} alt="maps" />
          </li>
        </ul>
        <ul>
          <li className="profile-bio">Kholish Nurfajri</li>
          <li className="profile-bio-template">Email</li>
          <li className="profile-bio">Mele</li>
          <li className="profile-bio-template">Gender</li>
          <li className="profile-bio">0812-1212-3434</li>
          <li className="profile-bio-template">Mobile Phone</li>
          <li className="profile-bio">Indonesia</li>
          <li className="profile-bio-template">Address</li>
        </ul>
      </div>
      <div className="profCard-right">
        <img src={Photo} alt="photoo" />
        <ModalEdit />
      </div>
    </div>
  );
}

export default ProfileCard;
