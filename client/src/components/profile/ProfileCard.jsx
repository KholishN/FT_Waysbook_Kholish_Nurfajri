import React, { useState, useEffect, useContext } from "react";
import { API } from "../../config/api";
import { UserContext } from "../../context/UserContext";
import { useQuery } from "react-query";

import Mail from "../../assets/mail.png";
import Gender from "../../assets/gender.png";
import Phone from "../../assets/phone.png";
import Maps from "../../assets/maps.png";

import Photo from "../../assets/default-photo.png";

import ModalEdit from "./ModalEdit";

function ProfileCard() {
  const [state] = useContext(UserContext);

  let { data } = useQuery("bookChace", async () => {
    const response = await API.get("/profile");
    console.log(response.data.data);
    return response.data;
  });

  // console.log(data.data);

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
          <li className="profile-bio">{state?.user.email}</li>
          <li className="profile-bio-template">Email</li>
          <li className="profile-bio">
            {data?.data.gender === null ? " - " : data?.data.data?.gender}
          </li>
          <li className="profile-bio-template">Gender</li>
          <li className="profile-bio">
            {data?.data.phone === null ? " - " : data?.data.data?.phone}
          </li>
          <li className="profile-bio-template">Mobile Phone</li>
          <li className="profile-bio">
            {data?.data.address === null ? " - " : data?.data.data?.address}
          </li>
          <li className="profile-bio-template">Address</li>
        </ul>
      </div>
      <div className="profCard-right">
        <img
          src={data?.data.avatar === null ? Photo : data?.data?.avatar}
          alt="photoo"
        />
        <ModalEdit />
      </div>
    </div>
  );
}

export default ProfileCard;
