import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileBook({ item }) {
  const navigate = useNavigate();
  const handleDownload = async () => {
    return <a href={item?.book.bookPdf}>Download</a>;
  };
  return (
    <div className="card-list-book">
      <img src={item?.book.bookImg} alt="" />
      <h1>{item?.book.title.substr(0, 30)}</h1>
      <p>By : {item?.book.author}</p>
      <a href={item?.book.bookPdf} className="btnDonwoladd">
        Download
      </a>
    </div>
  );
}

export default ProfileBook;
