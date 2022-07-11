import React from "react";
import "../style/Profile.css";

import Navbar from "../components/navbar/Navbar";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileBook from "../components/profile/ProfileBook";
import { useQuery } from "react-query";
import { API } from "../config/api";

function Profile() {
  let { data: purchasedBook } = useQuery("PurchasedBookChace", async () => {
    const response = await API.get("/purchased-books");
    return response.data.purBook;
  });

  console.log(purchasedBook);
  return (
    <div className="profCont">
      <Navbar />
      <div className="profWarp">
        <h1 className="profTitle">Profile</h1>
        <ProfileCard />
        <h1 className="profTitle">My Books</h1>
        <div className="profBottom">
          {purchasedBook?.map((item, index) => (
            <ProfileBook item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
