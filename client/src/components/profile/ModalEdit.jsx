import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import checked from "../../assets/checked.svg";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";

function ModalEdit() {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const [profile, setProfile] = useState({
    gender: "",
    phone: "",
    address: "",
    avatar: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (profile.avatar) {
      formData.set("avatar", profile.avatar[0], profile.avatar[0]?.name);
    }
    formData.set("gender", profile.gender);
    formData.set("phone", profile.phone);
    formData.set("address", profile.address);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await API.patch("/profile", formData, config);
    handleClose();
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleShow}>Edit Profile</button>
      <Modal show={show} onHide={handleClose} className="modal-edit">
        <form>
          <div className="modalll">
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" className="modal-select">
              <option value="" hidden>
                Gender
              </option>
              <option value="Mele">Mele</option>
              <option value="Famele">Famele</option>
            </select>

            <label htmlFor="phonenmr">Phone Number</label>
            <input type="number" id="phonenmr" />

            <label htmlFor="address">Address</label>
            <textarea className="modal-address" id="address"></textarea>
          </div>
          <div>
            <label htmlFor="pp" className="lblpp">
              {" "}
              Photo Profile
            </label>
            <input type="file" className="modal-photo" id="pp" />
            <div>
              <img
                src={checked}
                alt=""
                style={{ height: "30px", width: "30px" }}
                hidden
              />
            </div>
            <button className="btn btn-dark w-100 my-3" onClick={handleClose}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ModalEdit;
