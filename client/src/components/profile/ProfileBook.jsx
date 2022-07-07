import React from "react";
import Cover1 from "../../assets/coverbook1.jpg";

function ProfileBook() {
  return (
    <div className="profBottom">
      <div className="card-list-book">
        <img src={Cover1} alt="" />
        <h1>56 Hari: Perjalanan Kisah</h1>
        <p>By : Destashya Wdp</p>
        <button>Download</button>
      </div>
    </div>
  );
}

export default ProfileBook;
